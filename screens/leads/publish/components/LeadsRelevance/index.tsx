import DeleteIcon from "@/components/DeleteIcon";
import IconFont from "@/components/Iconfont";
import { Color } from "@/theme/variables";
import { Goods } from "@/types/data/Goods";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './styles';

interface LeadsRelevancePros {
    goods?: Goods;
    onPress: () => void;
    onCancel: () => void;
    canPost?: boolean;
}

export default ({ onPress, goods, onCancel }: LeadsRelevancePros) => {

    const renderAddBtn = goods === undefined && <TouchableOpacity activeOpacity={1} style={styles.addButton} onPress={onPress}>
        <IconFont name="fabuhao1x" size={56} color={Color.SEPARATOR} />
        <Text style={styles.addButtonText} numberOfLines={2}>
            Please add promotional products
        </Text>
    </TouchableOpacity>;

    const renderGoods = goods !== undefined && <View style={styles.addButton}>
        <Image
            source={{ uri: goods.coverUrl }}
            resizeMode="cover"
            style={styles.relGoodsImage}
            width={styles.relGoodsImage.width}
            height={styles.relGoodsImage.height}
        />
        <View style={styles.relGoodsInfo}>
            <Text style={styles.relGoodsName} numberOfLines={1}>
                {goods.goodsName}
            </Text>
            <Text style={styles.relPriceCurrency}>$<Text style={styles.relPriceAmount}>{goods.goodsPrice}</Text></Text>
        </View>
        <DeleteIcon onPress={() => onCancel()} style={styles.relCancelIcon} />
    </View>;

    return <View style={styles.container}>
        <Text style={styles.limitText}>Only one ads can be published per day</Text>
        {renderAddBtn}
        {renderGoods}
    </View>;
};
