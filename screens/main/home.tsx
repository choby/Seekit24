import { Loading } from "@/components/animations";
import BottomModal from '@/components/BottomModal';
import Divider from "@/components/Divider";
import PlaceHolder from "@/components/Placeholder";
import useNetworkListener from "@/hooks/useNetworkListener";
import useState from "@/hooks/useState";
import NavigationHelper from "@/navigation/helper";
import { Pages } from "@/navigation/pages";
import { getCategoryRules } from "@/services/category";
import { getRecommend } from "@/services/goods";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { ConfigHub } from "@/types/apiConfig";
import { CategoryRule } from "@/types/data/CategoryRule";
import { GoodsRecommend } from "@/types/data/GoodsRecommend";
import { SystemUtils } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { Radio } from "reactive";
import SearchInput from "../../components/FakeSearchInput";
import Ad from "../components/Ad";
import Recommended from "../components/Recommended";
import styles from "./styles";

export default () => {
    const bottomModal = useRef<BottomModal>(null);
    const navigation = useNavigation<Navigation>();
    const [recommendData, setRecommendData] = useState<GoodsRecommend>({ list: [] });
    const [newProducts, setNewProducts] = useState<GoodsRecommend>({ list: [] });
    const [categoryRules, setCategoryRules] = useState<CategoryRule[]>([]);
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const navigationState = useStore("navigationState");
    const isTop = useRef(true);

    useNetworkEffect(() => { refresh(true); }, true);

    const refresh = async (reload?: boolean) => {
        if (!isConnected) return;
        await Promise.all([
            refreshNewProducts(),
            refreshRecommend(reload),
            refreshCategoryRules()
        ]);
    };

    const refreshRecommend = async (reload?: boolean) => {
        if (reload !== true && recommendData.isLastPage) return;
        const data = await getRecommend({ type: "index", pageNum: reload ? undefined : recommendData.nextPage });
        if (data) {
            setRecommendData({
                ...data,
                list: reload ? data.list : recommendData.list.concat(data.list)
            });
        }
    };

    const refreshNewProducts = async () => {
        if (newProducts.isLastPage) return;
        const data = await getRecommend({ type: "new", pageNum: recommendData.nextPage });
        if (data) {
            setNewProducts({
                ...data,
                list: data.list
            });
        }
    };

    const refreshCategoryRules = async () => {
        const data = await getCategoryRules("index");
        if (data) setCategoryRules(data);
    };

    const changeExpoEnv = (value: keyof ConfigHub) => {
        bottomModal.current?.close();
        SystemUtils.changeEnv(value);
        refresh(true);
    };

    return <>
        <PlaceHolder.NoNetworkView onRefresh={fetchNetState} isDisconnected={!isConnected}>
            <Loading.ScrollView style={[theme.screenView]}
                scrollsToTop={true}
                onScrollEndLoad={refreshRecommend}
                onScrollTopLoad={() => refresh(true)}
                showsVerticalScrollIndicator={false}
                isLastPage={recommendData.isLastPage}
                lastPageFooterComponent={<></>}
                ref={ref => NavigationHelper.HomeScrollView = ref}
                scrollEventThrottle={16}
                onScroll={(event) => {
                    if (SystemUtils.isIos && isTop.current === false && event.nativeEvent.contentOffset.y <= getLogicPixel(500)) {
                        NavigationHelper.HomeButtonAnimation?.play(20, 0);
                        navigationState.setHomePagePositions("HOME", true);
                        isTop.current = true;
                        return;
                    }
                    if (SystemUtils.isIos && isTop.current && event.nativeEvent.contentOffset.y > getLogicPixel(500)) {
                        NavigationHelper.HomeButtonAnimation?.play(0, 20);
                        navigationState.setHomePagePositions("HOME", false);
                        isTop.current = false;
                        return;
                    }
                }}
            >
                <View style={theme.paddingHorizontal}>
                    <Divider height={8} />
                    <TouchableOpacity activeOpacity={1}
                        onPress={() => navigation.navigate(Pages.Search, {})}
                    //  onLongPress={() => bottomModal.current?.open()}
                    >
                        <SearchInput />
                    </TouchableOpacity>
                    <Divider />
                    <View style={styles.navContainer}>
                        {
                            categoryRules.map((item, index) => <TouchableOpacity
                                style={styles.navItem}
                                key={`rule_${index}`}
                                onPress={() =>
                                    item.categoryId ?
                                        navigation.navigate(Pages.Search, { categoryId: item.categoryId })
                                        : navigation.navigate(Pages.AllCategories)
                                }
                            >
                                {
                                    item.iconImage.endsWith(".svg") ?
                                        <SvgUri uri={item.iconImage} width={getLogicPixel(40)} height={getLogicPixel(40)} />
                                        : <Image source={{ uri: item.iconImage }} style={{
                                            width: getLogicPixel(40),
                                            height: getLogicPixel(40)
                                        }} />
                                }
                                <Text style={styles.navItemText}>{item.categoryName ?? item.keywordEn}</Text>
                            </TouchableOpacity>)
                        }
                    </View>
                    <Divider />
                    <Ad data={newProducts.list} />
                    <Divider height={getLogicPixel(32)} />
                </View>
                <Recommended data={recommendData.list} />
            </Loading.ScrollView>
        </PlaceHolder.NoNetworkView>
        <BottomModal ref={bottomModal}>
            <Radio value={SystemUtils.expoEnv} onChange={value => changeExpoEnv(value as keyof ConfigHub)}>
                <Radio.Item label="生产环境" value="prod" />
                <Radio.Item label="外网测试" value="staging" />
                <Radio.Item label="内网测试" value="test" />
            </Radio>
        </BottomModal>
    </>;
};

