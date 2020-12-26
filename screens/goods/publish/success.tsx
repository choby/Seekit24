import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import { Pages } from "@/navigation/pages";
import theme from "@/theme/index";
import { Goods } from "@/types/data/Goods";
import { StackActions, useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as Permissions from "expo-permissions";
import React from "react";
import { Image, Text, View } from "react-native";
import { NavigationBar } from "reactive";
import styles from "./styles/success";

export interface PublishSuccessRouteParams {
    goods: Goods;
    backPage?: Pages;
}

export default () => {
    const navigation = useNavigation<Navigation>();
    const route = useRoute<Route<Pages.GoodsPublishSuccess>>();
    const goods = route.params.goods;

    const goBack = () => {
        if (route.params.backPage) {
            if (route.params.backPage === Pages.GoodsDetail && goods.goodsId) {
                navigation.navigate(route.params.backPage, { id: goods.goodsId });
                return;
            }
            navigation.navigate(route.params.backPage);
        }
        else
            navigation.dispatch(StackActions.popToTop());
    };

    return <View style={[theme.screenView]}>
        <View style={theme.container}>
            <View style={styles.background}>
                <LinearGradient colors={["#4D5B72", '#FFFFFF']} style={styles.linearGradient} />
            </View>
            <View style={theme.statusBar}>
                <NavigationBar
                    backLabel={<IconFont name="fanhui-baise1x" />}
                    onPressBack={goBack}
                    titleContainer={false}
                    forwardLabel={<Text style={styles.postNext}>Post next</Text>}
                    onPressForward={async () => {
                        await Permissions.askAsync(Permissions.CAMERA_ROLL);
                        navigation.reset({
                            index: 1,
                            routes: [{
                                name: Pages.RootTab
                            }, {
                                name: Pages.GoodsPublish,
                            }]
                        });
                        //navigation.navigate(Pages.GoodsPublish, {});
                    }}
                    style={{ zIndex: 1 }}
                />
                <Text style={styles.successText}>Success!</Text>
                <View style={styles.goodsInfoContainer}>
                    <Image source={{ uri: goods.coverUrl }} resizeMode="cover" style={styles.goodsImage} width={styles.goodsImage.width} height={styles.goodsImage.height} />
                    <View style={styles.goodsInfoDesc}>
                        <Text numberOfLines={2} style={styles.goodsInfoTitle}>{goods.goodsName}</Text>
                        <View style={styles.goodsInfoPriceContainer}>
                            <Text style={styles.goodsInfoPriceCurrency}>$<Text style={styles.goodsInfoPriceAmount}>{goods.goodsPrice}</Text></Text>
                            <Button size="md" onPress={() => navigation.navigate(Pages.GoodsDetail, { id: goods.goodsId, fromSuccess: true })} style={styles.seeDetailBtn}>See details</Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>;
};



