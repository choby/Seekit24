import IconFont from "@/components/Iconfont";
import { nearbySearch } from '@/services/googleMapService';
import PublishState from '@/stores/goods/publish';
import theme from '@/theme';
import { GoogleLocationResult, GoogleNearbySearchResult } from '@/types/data/GoogleMap';
import _ from 'lodash';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Divider from "../Divider";
import styles from './styles/nearbyPlaceModal';

interface NearbyPlaceModalProps {
    publishState?: PublishState;
    latitude: number;
    longitude: number;
    selectedSearch?: GoogleLocationResult;
    selectedPlcaceId?: string;
    onSelect?: (placeId: string) => void;
    onLoadList?: () => void;
    onLoadListEnd?: () => void;
}

interface NearbyPlaceModalState {
    geocodings: GoogleNearbySearchResult[];
    panelActive: boolean;
    placeId?: string;
}

export default class NearbyPlaceModal extends React.PureComponent<NearbyPlaceModalProps, NearbyPlaceModalState>{
    constructor(props: NearbyPlaceModalProps) {
        super(props);
        this.state = {
            geocodings: [],
            panelActive: false,
            placeId: this.props.selectedPlcaceId
        };
    }


    UNSAFE_componentWillReceiveProps(nextProps: NearbyPlaceModalProps) {
        const { latitude, longitude, onLoadList, onLoadListEnd } = this.props;
        if (!_.isEqual(nextProps.latitude, latitude) || !_.isEqual(nextProps.longitude, longitude)) {
            onLoadList?.();
            nearbySearch(nextProps.latitude, nextProps.longitude).then(geo => {
                if (!geo) {
                    onLoadListEnd?.();
                    return;
                }
                if (geo.status === "OK" && geo.results.length > 0) {
                    setTimeout(() => {
                        this.setState({
                            geocodings: geo.results,
                            panelActive: true,
                        });
                        if (!nextProps.selectedSearch) {
                            const placeId = geo.results[0].place_id;
                            this.setState({ placeId });
                            this.onSelect(placeId);
                        }
                        onLoadListEnd?.();
                    }, 10);
                    return;
                }
                onLoadListEnd?.();
            });
        }
        if (!_.isEqual(nextProps.selectedSearch, this.props.selectedSearch)) {
            this.setState({ placeId: nextProps.selectedSearch?.place_id });
        }

        if (!_.isEqual(nextProps.selectedPlcaceId, this.props.selectedPlcaceId)) {
            this.setState({ placeId: nextProps.selectedPlcaceId });
        }
    }




    count = 0;


    onSelect(placeId: string) {
        this.setState({ placeId: placeId });
        this.props.onSelect?.(placeId);
    }

    render() {
        const { geocodings, placeId } = this.state;
        const { selectedSearch } = this.props;
        return <View style={[styles.container]}>
            <Divider height={12} />
            <ScrollView style={theme.container}>
                {
                    selectedSearch && <TouchableOpacity key={selectedSearch.place_id} onPress={() => this.onSelect(selectedSearch.place_id)}>
                        <View style={[styles.addressItemContainer, styles.addressItemContainerBorder]}>
                            <View style={{ overflow: "hidden", flex: 1 }}>
                                <Text style={styles.addressName}>{selectedSearch.structured_formatting.main_text}</Text>
                                <Text style={styles.addressDetail}>{selectedSearch.structured_formatting.secondary_text}</Text>
                            </View>
                            {
                                placeId === selectedSearch.place_id && <IconFont name="duihao1x" />
                            }
                        </View>
                    </TouchableOpacity>
                }


                {
                    geocodings.filter(x => x.place_id !== selectedSearch?.place_id).map(geocoding => <TouchableOpacity key={geocoding.place_id} onPress={() => this.onSelect(geocoding.place_id)}>
                        <View style={[styles.addressItemContainer, styles.addressItemContainerBorder]}>
                            <View style={{ overflow: "hidden", flex: 1 }}>
                                <Text style={styles.addressName}>{geocoding.name}</Text>
                                <Text style={styles.addressDetail}>{geocoding.vicinity}</Text>
                            </View>
                            {
                                placeId === geocoding.place_id && <IconFont name="duihao1x" />
                            }

                        </View>
                    </TouchableOpacity>)
                }
            </ScrollView>
        </View>;
    }
}