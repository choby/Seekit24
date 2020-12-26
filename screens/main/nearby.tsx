import { Loading } from "@/components/animations";
import Divider from "@/components/Divider";
import PlaceHolder from "@/components/Placeholder";
import useGpsLocation from "@/hooks/useGpsLocation";
import useNetworkListener from "@/hooks/useNetworkListener";
import NavigationHelper from "@/navigation/helper";
import { Pages } from "@/navigation/pages";
import { getRecommend } from "@/services/goods";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { GoodsRecommend } from "@/types/data/GoodsRecommend";
import { EnumErrorType } from "@/types/enums";
import { SystemUtils } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import SearchInput from "../../components/FakeSearchInput";
import Recommended from "../components/Recommended";
import GpsOffTip from "./components/GpsOffTip";


//const IconFontSize = getLogicPixel(40);

export default observer(() => {
    const [recommendData, setRecommendData] = useState<GoodsRecommend>({ isLastPage: true, total: 0, nextPage: 1, list: [] });
    const navigation = useNavigation<Navigation>();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const [location, getLocation] = useGpsLocation();
    const navigationState = useStore("navigationState");
    const isTop = useRef(true);

    useNetworkEffect(() => { refreshRecommend(true); }, true);

    const refreshRecommend = async (reload?: boolean) => {
        const coords = (await getLocation())?.coords;
        if (!isConnected || (reload !== true && recommendData.isLastPage) || !coords) return;
        const data = await getRecommend({
            type: "near",
            pageNum: reload ? undefined : recommendData.nextPage,
            location: `${coords.latitude},${coords.longitude}`
        });
        if (data) {
            setRecommendData({
                ...data,
                list: reload ? data.list : recommendData.list.concat(data.list)
            });
        }
    };

    return <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>

        <Loading.ScrollView
            style={[theme.screenView]}
            scrollsToTop={true}
            onScrollEndLoad={refreshRecommend}
            showsVerticalScrollIndicator={false}
            onScrollTopLoad={async () => {
                refreshRecommend(true);
            }}
            isLastPage={recommendData.isLastPage}
            lastPageFooterComponent={<></>}
            ref={ref => NavigationHelper.NearbyScrollView = ref}
            scrollEventThrottle={16}
            onScroll={(event) => {
                if (SystemUtils.isIos && isTop.current === false && event.nativeEvent.contentOffset.y <= getLogicPixel(500)) {
                    NavigationHelper.HomeButtonAnimation?.play(20, 0);
                    isTop.current = true;
                    navigationState.setHomePagePositions("NEARBY", true);
                    return;
                }
                if (SystemUtils.isIos && isTop.current && event.nativeEvent.contentOffset.y > getLogicPixel(500)) {
                    NavigationHelper.HomeButtonAnimation?.play();
                    isTop.current = false;
                    navigationState.setHomePagePositions("NEARBY", false);
                    return;
                }
            }}
        >
            <View style={theme.paddingHorizontal}>
                <Divider height={8} />
                <View>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.Search, {})}>
                        <SearchInput />
                    </TouchableOpacity>
                </View>


                {/*<Divider />

                 <View style={styles.navContainer}>
                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu31x1" size={IconFontSize} />
                        <Text style={styles.navItemText}>Mobile phone</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu221x" size={IconFontSize} />
                        <Text style={styles.navItemText}>Computer</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu331x" size={IconFontSize} />
                        <Text style={styles.navItemText}>Digital</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu441x" size={IconFontSize} />
                        <Text style={styles.navItemText}>Classification</Text>
                    </View>

                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu551x" size={IconFontSize} />
                        <Text style={styles.navItemText}>Mobile phone</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu661x" size={IconFontSize} />
                        <Text style={styles.navItemText}>Computer</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu771x" size={IconFontSize} />
                        <Text style={styles.navItemText}>Digital</Text>
                    </View>
                    <View style={styles.navItem}>
                        <Iconfont name="jingangqu41x" size={IconFontSize} />
                        <Text style={styles.navItemText}>Classification</Text>
                    </View>
                </View>
                */}
                {
                    (location.error === EnumErrorType.NOPERMISSIONS || location.error === EnumErrorType.GPSISOFF) && <>
                        <Divider />
                        <GpsOffTip display={true} />
                    </>
                }
            </View>
            <Divider />
            <Recommended data={recommendData.list} />
        </Loading.ScrollView>

    </PlaceHolder.NoNetworkView>;
});

