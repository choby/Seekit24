import IconFont from "@/components/Iconfont";
import { SeekitImage } from "@/components/SeekitImage";
import NavigationHelper from "@/navigation/helper";
import { Goods } from "@/types/data/Goods";
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

export default ({ goods }: { goods: Goods; }) => {
    return <TouchableOpacity activeOpacity={1} style={styles.goodsInfo} onPress={() => NavigationHelper.goGoodsDetail(goods.goodsId)}>
        <SeekitImage
            width={styles.goodsImage.width}
            height={styles.goodsImage.height}
            source={{ uri: goods.coverUrl }}
            style={styles.goodsImage}
            resizeMethod="resize"
            resizeMode="cover"
        />
        <View style={styles.goodsDesc}>
            <Text style={styles.goodsName} numberOfLines={1}>{goods.goodsName}</Text>
            <Text style={styles.goodsPrice}><Text style={styles.goodsPriceCurrency}>$</Text>{goods.goodsPrice}</Text>
        </View>
        <IconFont name="lie-jinru1x" size={14} />
    </TouchableOpacity>;
};