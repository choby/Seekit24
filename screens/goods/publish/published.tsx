import { Loading, PreLoader } from "@/components/animations";
import Button from "@/components/Button";
import { default as IconFont, default as Iconfont } from "@/components/Iconfont";
import Modal from "@/components/Modal";
import PlaceHolder from "@/components/Placeholder";
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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Badge, NavigationBar } from "reactive";
import styles from "./styles/published";



export default () => {
    const navigation = useNavigation<Navigation>();
    const [goodsList, setGoodsList] = useState<PagedList<Goods>>({ total: 0, list: [], pageSize: 10 });
    const [peddingCount, setPendingCount] = useState(0);
    const [isConnected, fetchNetState, , useNetworkCallback] = useNetworkListener();
    const [initializing, useFetch] = useFetchWithInitState();

    useFocusEffect(
        useNetworkCallback(() => {
            useFetch(async () => {
                await Promise.all([
                    refreshGoodsList(),
                    refreshPendingCount()
                ]);
            });
        }, [])
    );


    const refreshGoodsList = async (reload?: boolean) => {
        if (reload !== true && goodsList.isLastPage === true) return;
        const data = await getUserGoodsList(`${EnumGoodsState.ON_THE_SHELF}`, reload ? undefined : goodsList.nextPage, undefined);
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

    const refreshPendingCount = async () => {
        const data = await getUserGoodsList(`${EnumGoodsState.PENDING_PUBLISH}`, 1, undefined);
        if (data)
            setPendingCount(data.total!);
    };

    const offShelfGoods = async (goods: Goods) => {
        Modal.show({
            content: "Are you sure you want to take it off the shelves?",
            okText: "Confirm",
            cancelText: "Cancel ",
            onCancelPress: () => {

            },
            onOkPress: async () => {
                const result = await setGoodsState(goods.goodsId, "offshelf");
                if (result) {
                    refreshGoodsList(true);
                    Tip.show("Off shelf Success");
                }
            }
        });
    };

    const delGoods = async (goods: Goods) => {
        Modal.show({
            content: "Unable to recover after deletion, are you sure to delete?",
            okText: "Confirm",
            cancelText: "Cancel ",
            onCancelPress: () => {

            },
            onOkPress: async () => {
                const result = await setGoodsState(goods.goodsId, "del");
                if (result) {
                    refreshGoodsList(true);
                    Tip.show("Delete Success");
                }
            }
        });
    };

    const goGoodsDetail = (goodsId: string) => {
        NavigationHelper.goGoodsDetail(goodsId);
    };

    const renderItem = (goods: Goods) => <View key={`goods_${goods.goodsId}`} style={[theme.paddingHorizontal, styles.goodsInfoItemContainer]}>
        <View style={styles.goodsInfoContainer}>
            <TouchableOpacity style={styles.goodsImage} activeOpacity={1} onPress={() => goGoodsDetail(goods.goodsId)}>
                <Image
                    source={{ uri: goods.coverUrl }}
                    resizeMode="cover"
                    style={styles.goodsImage}
                    width={styles.goodsImage.width}
                    height={styles.goodsImage.height}
                />
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={1} style={styles.goodsInfoDesc} onPress={() => goGoodsDetail(goods.goodsId)}>
                <View>
                    <Text numberOfLines={2} style={styles.goodsInfoTitle}>{goods.goodsName}</Text>
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
            </TouchableOpacity>
        </View>

        <View style={styles.goodsInfoButtons}>
            <Button size="sm" onPress={() => NavigationHelper.goPublish(goods.goodsId, Pages.GoodsPublished)} style={styles.goodsInfoButton}>Edit</Button>
            {
                goods.state === EnumGoodsState.ON_THE_SHELF && <Button size="sm" onPress={() => offShelfGoods(goods)} style={styles.goodsInfoButton}>Off shelf</Button>
            }
            {
                goods.state !== EnumGoodsState.DELETED && <Button size="sm" onPress={() => delGoods(goods)}>Delete</Button>
            }
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
            <Text style={styles.pageTitle}>My Publish</Text>
        </View>
        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <PreLoader.View loading={initializing}>
                <View style={theme.paddingHorizontal}>
                    <TouchableOpacity style={styles.waitingListContainer} onPress={() => navigation.navigate(Pages.GoodsPending)}>
                        <View style={styles.waitingTitleContainer} >
                            <IconFont name="qingdan1x" size={getLogicPixel(28)} />
                            <Text style={styles.waitingTitle}>Waiting list</Text>
                        </View>
                        <View style={styles.waitingMore}>
                            <Badge label={peddingCount} style={styles.waitingBadge} labelStyle={styles.waitingBadgeLabel} /><IconFont name="lie-jinru1x" size={14} />
                        </View>
                    </TouchableOpacity>
                </View>
                <Loading.FlatList<Goods>
                    renderItem={({ item }) => renderItem(item)}
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



