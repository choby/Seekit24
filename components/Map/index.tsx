import { Pin } from "@/components/animations";
import Button from "@/components/Button";
// import Input from "@/components/Input";
import IconFont from "@/components/Iconfont";
import SearchInput from "@/components/SearchInput";
import useGpsLocation from "@/hooks/useGpsLocation";
import { searchDetails } from "@/services/googleMapService";
import theme from "@/theme/index";
import { GoogleLocationResult } from "@/types/data/GoogleMap";
// import BottomModal from "@/components/BottomModal";
// import LocationTooFarTip from "../components/LocationTooFarTip";
// import { Color } from "@/theme/variables";
// import AnotherCountyTip from "../components/AnotherCountyTip";
// import GpsOffTip from "../components/GpsOffTip";
import { EnumErrorType } from "@/types/enums";
import pixelRatio from "@/utils/pixelRatio";
import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { InteractionManager, LayoutRectangle, View } from "react-native";
import MapView, { Region } from 'react-native-maps';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationBar } from "reactive";
import Actions from "./actions";
import NearbyPlaceModal from "./NearbyPlaceModal";
import SearchPlaceModal from "./SearchPlaceModal";
import styles from "./styles/index";

interface MapProps {
    selectedPlaceId?: string;
    onBackPress: () => void;
    onComfirm: (placeId?: string) => void;
}

function coordsToRegion(coords?: {
    longitude: number;
    latitude: number;
}) {
    return {
        longitude: coords?.longitude!,
        latitude: coords?.latitude!,
        longitudeDelta: 0.025,
        latitudeDelta: 0.025
    };
}


export default observer(({ selectedPlaceId,
    onBackPress,
    onComfirm
}: MapProps) => {
    const map = useRef<MapView>(null);
    const [location, getLocation] = useGpsLocation();
    const [region, setRegion] = useState<Region>();

    const [placeId, setPlaceId] = useState<string | undefined>(selectedPlaceId);
    const [selectedSearch, setSelectedSearch] = useState<GoogleLocationResult>();

    const [mapViewLayout, setMapViewLayout] = useState<LayoutRectangle>();


    const searchPlaceModal = useRef<SearchPlaceModal>(null);
    const safeAreaBottom = useSafeAreaInsets().bottom;
    const pin = useRef<Pin>(null);

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            getLocation(undefined, false);
        });
    }, []);

    useEffect(() => {
        if (!!!location || !!!location.coords) {
            if (location.error === EnumErrorType.GPSISOFF || location.error === EnumErrorType.NOPERMISSIONS)
                //bottomModal.current?.open();
                return;
        }
        const region = coordsToRegion(location.coords);

        regionChangeHandler(region);


    }, [location]);


    const regionChangeHandler = (region: Region) => {

        setRegion(region);

        // nearbyPlaceModal.current?.open();
    };

    // 搜索框选中地址后, 在地图上定位出来
    const onSelectSearchPlace = (addr: GoogleLocationResult) => {
        pin.current?.play();
        setPlaceId(addr.place_id);
        setSelectedSearch(addr);
        searchDetails(addr.place_id, {
            language: "en",
            types: "address",
        }).then(detail => {
            if (!detail || detail.status !== "OK") return;
            const region = coordsToRegion({
                longitude: detail.result.geometry.location.lng,
                latitude: detail.result.geometry.location.lat,
            });
            regionChangeHandler(region);
            map.current?.animateToRegion(region);
            pin.current?.pause();
        });
    };

    // const getMarker = (region: Region) => {
    //     GoogleMapService.reverseGeocoding(region.latitude, region.longitude, googleMapApiKey).then(geo => {
    //         if (geo.status === "OK" && geo.results.length > 0) {
    //             setAddress(geo.results);
    //             setIsPanelActive(true);
    //         }
    //     });
    //     const animatedRegion = new AnimatedRegion(region);
    //     setMarker(animatedRegion);
    // }

    //TODO:demo代码, 留着晚点删除
    // const mapEventHandler = (e: MapEvent) => {
    //     const coordinate = e.nativeEvent.coordinate;
    //     const region = {
    //         longitude: coordinate.longitude,
    //         latitude: coordinate.latitude,
    //         longitudeDelta: 0.02,
    //         latitudeDelta: 0.02
    //     };

    //     const animatedRegion = new AnimatedRegion(region);
    //     setMarker(animatedRegion);
    // }


    const setCenterIconHeight = () => {
        if (!!!mapViewLayout) return 0;
        return (pixelRatio.screenSize.height - mapViewLayout.y - safeAreaBottom) / 2 + mapViewLayout.y; //- 100;
    };


    return <View style={[theme.statusBar, theme.screenView, { elevation: 0 }]}>

        {
            location.coords && region && region.latitude && region.longitude && <>
                <View style={[theme.container, { flex: 0 }]}>
                    <NavigationBar
                        backLabel={<IconFont name="fanhui-heise1x" />}
                        onPressBack={onBackPress}
                        titleContainer={<SearchInput
                            onFocus={() => { searchPlaceModal.current?.open(); }}
                        />}
                        forwardLabel={<Button type="primary" size="sm" style={styles.okButton}>OK</Button>}

                        style={{ zIndex: 1 }}
                        onPressForward={() => {
                            onComfirm(placeId);
                        }}
                    />
                </View>

                <MapView
                    onLayout={(e) => setMapViewLayout(e.nativeEvent.layout)}
                    ref={map}
                    loadingEnabled

                    provider="google"
                    style={styles.mapStyle}
                    showsUserLocation
                    followsUserLocation
                    mapType="standard"
                    pitchEnabled={true}
                    moveOnMarkerPress
                    showsPointsOfInterest
                    onRegionChangeComplete={regionChangeHandler}
                    // onTouchStart={() => {
                    //     pin.current?.reset();
                    // }}
                    onTouchCancel={() => {
                        setSelectedSearch(undefined);
                    }}
                    needsOffscreenAlphaCompositing
                    initialRegion={coordsToRegion(region)}
                    onTouchEnd={() => setSelectedSearch(undefined)}

                >
                    {/* {
            marker && < MarkerAnimated draggable coordinate={marker} flat />
        } */}
                </MapView>
                <View style={[styles.mapPickerView, { top: setCenterIconHeight() }]}>
                    <Pin ref={pin} />
                </View>


                <Actions onPressMyLocation={() => {
                    setSelectedSearch(undefined);
                    map.current?.animateToRegion({
                        latitude: location.coords!.latitude,
                        longitude: location.coords!.longitude,
                        latitudeDelta: 0.025,
                        longitudeDelta: 0.025
                    });
                }}
                />
                <NearbyPlaceModal
                    selectedPlcaceId={placeId}
                    selectedSearch={selectedSearch}
                    latitude={region?.latitude ?? 0} longitude={region?.longitude ?? 0}
                    onSelect={value => setPlaceId(value)}
                    onLoadList={() => pin.current?.play()}
                    onLoadListEnd={() => pin.current?.reset()}
                />
                <SearchPlaceModal ref={searchPlaceModal} onSelect={onSelectSearchPlace} />
            </>
        }


        {/* <BottomModal ref={bottomModal}>
            {location.error === ErrorType.GPSISOFF && <GpsOffTip />}
             <LocationTooFarTip />
        </BottomModal> */}


    </View>;
});



