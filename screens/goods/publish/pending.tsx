import { Loading, PreLoader } from "@/components/animations";
import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import PlaceHolder from "@/components/Placeholder";
import useFetchWithInitState from "@/hooks/useFetchWithInitState";
import useNetworkListener from "@/hooks/useNetworkListener";
import NavigationHelper from "@/navigation/helper";
import { Pages } from "@/navigation/pages";
import { getUserGoodsList, setGoodsState } from "@/services/goods";
import theme from "@/theme/index";
import { Goods } from "@/types/data/Goods";
import { PagedList } from "@/types/data/PagedList";
import { EnumGoodsState } from "@/types/enums";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationBar } from "reactive";
import styles from "./styles/pending";


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
        const data = await getUserGoodsList(`${EnumGoodsState.PENDING_PUBLISH}`, reload ? undefined : goodsList.nextPage, undefined);
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
        }
    };

    const goGoodsDetail = (goodsId: string) => {
        NavigationHelper.goGoodsDetail(goodsId);
    };

    const renderItem = (goods: Goods, index: number) => <View style={[theme.paddingHorizontal, styles.goodsInfoContainer]} key={index}>
        <TouchableOpacity style={styles.goodsImage} activeOpacity={1} onPress={() => goGoodsDetail(goods.goodsId)}>
            <Image
                source={{ uri: goods.coverUrl }}
                resizeMode="cover"
                style={styles.goodsImage}
                width={styles.goodsImage.width}
                height={styles.goodsImage.height}
            />
        </TouchableOpacity>
        <View style={styles.goodsInfoDesc}>
            <TouchableOpacity activeOpacity={1} onPress={() => goGoodsDetail(goods.goodsId)}>
                <Text numberOfLines={2} style={styles.goodsInfoTitle}>{goods.goodsName}</Text>
                <View style={styles.goodsInfoAssetsContainer}>
                    <Text style={styles.goodsInfoAssets}>
                        {goods.goodsDescribe ?? "Release to earn more money!"}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.goodsInfoPriceContainer}>
                <View>
                    <Text style={styles.goodsInfoPriceCurrency}>$<Text style={styles.goodsInfoPriceAmount}>{goods.goodsPrice}</Text></Text>
                </View>
                <View style={styles.goodsInfoButtons}>
                    <Button size="sm" onPress={() => NavigationHelper.goPublish(goods.goodsId)}>Edit</Button>
                    <Button size="sm" style={styles.goodsInfoDelButton} onPress={() => delGoods(goods)}>Delete</Button>
                </View>
            </View>
        </View>
    </View>;

    return <View style={[theme.statusBar, theme.screenView]}>
        <View style={theme.navigationBar}>
            <NavigationBar
                backLabel={<IconFont name="fanhui-heise1x" />}
                onPressBack={() => navigation.goBack()}
                titleContainer={false}
                forwardLabel={<Text>Off the shelf</Text>}
                onPressForward={() => navigation.navigate(Pages.GoodsOffTheShelf)}
                style={{ zIndex: 1 }}
            />
        </View>
        <View style={theme.paddingHorizontal}>
            <Text style={styles.pageTitle}>Waiting list</Text>
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
                            No more products, go to <Text onPress={() => NavigationHelper.goPublish()} style={styles.noMoreReleaseText}>release new products</Text>
                        </Text>
                    </View>}
                    onScrollEndLoad={refreshGoodsList}
                    onScrollTopLoad={() => refreshGoodsList(true)}
                />
            </PreLoader.View>
        </PlaceHolder.NoNetworkView>
    </View>;
};



