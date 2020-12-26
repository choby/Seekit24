import React from "react";
import { View,  Text } from "react-native";
import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import theme from "@/theme";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Pages } from "@/navigation/pages";
import { Goods } from "@/types/data/Goods";
import { setGoodsState } from "@/services/goods";


// const Relist = () => {
//     return <View style={theme.bottomBar}>
//         <Button type="default" style={styles.bottomDeleteButton}>Delete</Button>
//         <Button type="primary" style={styles.bottomRelistButton}>Relist</Button>
//     </View>;
// }

interface BottomBarSelfProps {
    goods: Goods;
    onOffshelfGoods?: () => void;
}

export default ({ goods, onOffshelfGoods }: BottomBarSelfProps) => {
    const navigation = useNavigation<Navigation>();

    const offShelfGoods = async (goods: Goods) => {
        const result = await setGoodsState(goods.goodsId, "offshelf");
        if (result) {
            onOffshelfGoods?.();
        }
    }

    return <View style={theme.bottomBar}>
        <View style={styles.bottomFunctionBottoms}>

            <TouchableOpacity style={styles.bottomFunctionItem} onPress={() => offShelfGoods(goods)}>
                <IconFont name="xiajiaicon1x" size={20} />
                <Text style={styles.bottomFunctionName}>Off shelf</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomFunctionItem} onPress={() => navigation.navigate(Pages.GoodsPublish, { id: goods.goodsId })}>
                <IconFont name="bianjiicon1x" size={20} />
                <Text style={styles.bottomFunctionName}>Edit</Text>
            </TouchableOpacity>
        </View>
        <Button type="primary" style={styles.bottomChatButton}>删除</Button>

    </View>;
}