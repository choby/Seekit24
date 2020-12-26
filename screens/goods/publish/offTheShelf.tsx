import { Loading, PreLoader } from "@/components/animations";
import Button from "@/components/Button";
import { default as IconFont, default as Iconfont } from "@/components/Iconfont";
import PlaceHolder from "@/components/Placeholder";
// import { Pages } from "@/navigation/pages";
import Tip from '@/components/Tip';
import useFetchWithInitState from "@/hooks/useFetchWithInitState";
import useNetworkListener from "@/hooks/useNetworkListener";
import NavigationHelper from "@/navigation/helper";
import { Pages } from "@/navigation/pages";
import { getUserGoodsList, setGoodsState } from "@/services/goods";
import theme from "@/theme/index";
import { Goods } from "@/types/data/Goods";
import { PagedList } from "@/types/data/PagedList";
import { EnumGoodsState } from "@/types/enums";
import { getLogicPixel } from "@/utils/pixelRatio";
// import GoMore from "@/components/GoMore";
// import { Color } from "@/theme/variables";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationBar } from "reactive";
import styles from "./styles/offTheShelf";

export default () => {
    const navigation = useNavigation<Navigation>();
    const [goodsList, setGoodsList] = useState<PagedList<Goods>>({ total: 0, list: [], pageSize: 10 });
    const [isConnected, fetchNetState, , useNetworkCallback] = useNetworkListener();
    const [initializing, useFetch] = useFetchWithInitState();

    useFocusEffect(useNetworkCallback(() => {
        useFetch(async () => {
            await refreshGoodsList(true);
        });
    }, []));



    const refreshGoodsList = async (reload?: boolean) => {
        if (reload !== true && goodsList.isLastPage === true) return;
        const data = await getUserGoodsList(`${EnumGoodsState.OFF_THE_SHELF}`, reload ? undefined : goodsList.nextPage, undefined);
        if (data) {
            if (reload)
                setGoodsList({
                    ...data
                });
            else
                setGoodsList({
                    ...data,
                    list: goodsList.list?.concat(data.list)
                });
        }
    };


    const delGoods = async (goods: Goods) => {
        const result = await setGoodsState(goods.goodsId, "del");
        if (result) {
            refreshGoodsList(true);
            Tip.show("Delete Success");
        }
    };

    const goGoodsDetail = (goodsId: string) => {
        NavigationHelper.goGoodsDetail(goodsId);
    };

    const renderItem = (goods: Goods, index: number) => <View style={[theme.paddingHorizontal, styles.goodsInfoItemContainer]} key={index}>
        {/* <View style={styles.goodsStatusContainer}>
                            <View style={styles.goodsStatus}>
                                <Text style={styles.goodsStatusText}>Removed</Text>
                            </View>
                            <Text style={styles.goodsStatusMore}>Five days ago  <GoMore color={Color.ERROR} text={false} textStyle={styles.goodsStatusMore} /> </Text>
                        </View> */}
        <TouchableOpacity activeOpacity={1} style={styles.goodsInfoContainer} onPress={() => goGoodsDetail(goods.goodsId)}>
            <Image source={{ uri: goods.coverUrl }} resizeMode="cover" style={styles.goodsImage} width={styles.goodsImage.width} height={styles.goodsImage.height} />
            <View style={styles.goodsInfoDesc}>
                <View>
                    <Text numberOfLines={2} style={[styles.goodsInfoTitle, styles.goodsInfoTitleDisabled]}>{goods.goodsName}</Text>
                    <View style={styles.goodsInfoAssetsContainer}>
                        <View style={styles.goodsInfoAssetsItem}>
                            <Iconfont name="liuyanlb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssets}>{goods.chatCount}</Text>
                        </View>
                        <View style={styles.goodsInfoAssetsItem}>
                            <Iconfont name="liulanlb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssets}>{goods.pageViewCount}</Text>
                        </View>
                        <View style={styles.goodsInfoAssetsItem}>
                            <Iconfont name="xiangyaolb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssets}>{goods.collectionCount}</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.goodsInfoPriceCurrency}>$<Text style={styles.goodsInfoPriceAmount}>{goods.goodsPrice}</Text></Text>
            </View>
        </TouchableOpacity>

        <View style={styles.goodsInfoButtons}>
            <Button size="sm" onPress={() => NavigationHelper.goPublish(goods.goodsId, Pages.GoodsOffTheShelf)}>Relist</Button>
            <Button size="sm" style={styles.goodsInfoButtonItem} onPress={() => delGoods(goods)}>Delete</Button>
        </View>

    </View>;


    return <View style={[theme.statusBar, theme.screenView]}>
        <View style={theme.navigationBar}>
            <NavigationBar
                backLabel={<IconFont name="fanhui-heise1x" />}
                onPressBack={() => navigation.goBack()}
                titleContainer={false}

                style={{ zIndex: 1 }}
            />
        </View>
        <View style={theme.paddingHorizontal}>
            <Text style={styles.pageTitle}>Off The Shelf</Text>
        </View>

        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <PreLoader.View loading={initializing}>
                <Loading.FlatList<Goods>
                    renderItem={({ item, index }) => renderItem(item, index)}
                    data={goodsList.list}
                    contentContainerStyle={theme.paddingHorizontal}
                    keyExtractor={(item) => `goods_${item.goodsId}`}
                    isLastPage={goodsList.isLastPage}
                    lastPageFooterComponent={<View style={styles.noMore}>
                        <Text style={styles.noMoreText}>
                            Unsold products can be re-listed~
                </Text>
                    </View>}
                    onScrollEndLoad={refreshGoodsList}
                    onScrollTopLoad={() => refreshGoodsList(true)}
                />
            </PreLoader.View>
        </PlaceHolder.NoNetworkView>

    </View>;
};



