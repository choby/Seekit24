import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { NavigationBar } from "reactive";
import theme from "@/theme/index";
import IconFont from "@/components/Iconfont";
import styles from "./styles/collection";
import Iconfont from "@/components/Iconfont";
import { getLogicPixel } from "@/utils/pixelRatio";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { getRecords } from "@/services/goods";
import { EnumRecordType } from "@/types/enums";
import { GoodsRecords } from "@/types/data/GoodsRecords";
import Avator from "@/components/Avator";

export default () => {
    const navigation = useNavigation<Navigation>();
    const [collection, setCollection] = useState<GoodsRecords>();

    useEffect(() => {
        refresh();
    }, []);

    const refresh = async () => {
        const data = await getRecords(EnumRecordType.COLLECTION);
        if (data) {
            setCollection(data);
        }
    }

    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            onPressBack={() => navigation.goBack()}
            backLabel={<IconFont name="fanhui-heise1x" />}
            titleContainer={false}
            forwardLabel={<Text>Edit</Text>}
            style={{ zIndex: 1 }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>My Collection</Text>
            <View style={styles.goodsInfoListContainer}>
                {
                    Array.isArray(collection?.list) && collection?.list.map((item,index) => <View style={styles.goodsInfoItemContainer} key={index}>
                        <View style={styles.goodsInfoUserContainer}>
                            <View style={styles.goodsInfoUser}>
                                <Avator source={{ uri: "" }} size={getLogicPixel(24)} />
                                <Text style={styles.goodsInfoUserNickName}>Tabitha Krajcik</Text>
                            </View>
                            <Text style={styles.goodsInfoTime}>{Number(item.dateline).fromNow()}</Text>

                        </View>
                        <View style={styles.goodsInfoContainer}>
                            <Image source={{ uri: item.coverUrl }} resizeMode="contain" style={styles.goodsImage} width={styles.goodsImage.width} height={styles.goodsImage.height} />
                            <View style={styles.goodsInfoDesc}>
                                <View>
                                    <Text numberOfLines={2} style={styles.goodsInfoTitle}>{item.goodsName}</Text>
                                    <View style={styles.goodsInfoAssetsContainer}>
                                        <View style={styles.goodsInfoAssets}>
                                            <Iconfont name="liuyanlb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssetsText}>{item.chatCount}</Text>
                                        </View>
                                        <View style={styles.goodsInfoAssets}>
                                            <Iconfont name="liulanlb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssetsText}>{item.pageViewCount}</Text>
                                        </View>
                                    </View>
                                </View>

                                <Text style={styles.goodsInfoPriceCurrency}>$<Text style={styles.goodsInfoPriceAmount}>{item.goodsPrice}</Text></Text>
                            </View>
                        </View>

                        <View style={styles.goodsInfoButtons}>
                            <Button icon="shoucang-anniu1x" size="sm">Cancel Collection</Button>
                            <Button icon="liaotian-anniu1x" type="primary" size="sm">Chat</Button>
                        </View>

                    </View>)
                }
            </View>
        </ScrollView>
    </View>;
}



