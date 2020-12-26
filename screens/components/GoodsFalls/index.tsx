import Avator from "@/components/Avator";
import { Pages } from "@/navigation/pages";
import { Goods } from "@/types/data/Goods";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StackActions, useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import RNMasonryScroll from "react-native-masonry-scrollview";
import Image from "./image";
import styles from "./styles";

interface GoodsFallsProps {
    data: Goods[],
}

function goodsFalls(props: GoodsFallsProps) {
    const navigation = useNavigation<Navigation>();
    const { data } = props;
    const goDetail = (goodsId: string) => {
        navigation.dispatch(StackActions.push(Pages.GoodsDetail,
            { id: goodsId }
        ));
        // navigation.navigate(Pages.GoodsDetail, { id: goodsId })
    };
    return <RNMasonryScroll>
        {data.map((item, index) => <TouchableOpacity activeOpacity={1}
            key={`goodsFall_${item.goodsId}_${index}`}
            style={styles.item} onPress={() => goDetail(item.goodsId)}
        >
            <Image style={styles.itemImage}
                source={{ uri: item.coverUrl, cache: "force-cache" }}
                width={styles.itemImage.width} resizeMethod="resize" resizeMode="cover" />
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitleTxt} numberOfLines={2}>{item.goodsName}</Text>
            </View>
            {/* <View style={styles.itemTagContainer}>
                <Tag style={[styles.itemTag, styles.itemTag_new]} textStyle={[styles.itemTagTxt, styles.itemTagTxt_new]}>Brand new</Tag>
                <Tag style={[styles.itemTag, styles.itemTag_discout]} textStyle={[styles.itemTagTxt, styles.itemTagTxt_discout]}>Discount</Tag>
            </View> */}
            <View style={styles.itemPriceContainer}>
                <Text style={styles.itemPriceCurrency}>$<Text style={styles.itemPriceAmount}>{item.goodsPrice}</Text></Text>
            </View>
            <View style={styles.itemUser}>
                <View style={styles.itemUserAvatar}>
                    <Avator source={{ uri: item.pushUser?.avatarUrl }} size={getLogicPixel(24)} />
                </View>
                <Text style={styles.itemUserName} numberOfLines={1}>{item.pushUser?.userName}</Text>
            </View>
        </TouchableOpacity>)
        }
    </RNMasonryScroll>;
}

export default memo(goodsFalls) as typeof goodsFalls;
