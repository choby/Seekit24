import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import Modal from "@/components/Modal";
import Tip from "@/components/Tip";
import NavigationHelper from "@/navigation/helper";
import { Pages } from "@/navigation/pages";
import { setGoodsState } from "@/services/goods";
import theme from "@/theme";
import { Goods } from "@/types/data/Goods";
import { EnumGoodsState } from "@/types/enums";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";


// const Relist = () => {
//     return <View style={theme.bottomBar}>
//         <Button type="default" style={styles.bottomDeleteButton}>Delete</Button>
//         <Button type="primary" style={styles.bottomRelistButton}>Relist</Button>
//     </View>;
// }

interface BottomBarSelfProps {
    goods: Goods;
    onOffshelfGoods?: () => void;
    onDeletedGoods?: () => void;
}

export default ({ goods, onOffshelfGoods, onDeletedGoods }: BottomBarSelfProps) => {



    const deleteGoods = async (goods: Goods) => {
        Modal.show({
            content: "Unable to recover after deletion, are you sure to delete?",
            okText: "Confirm",
            cancelText: "Cancel",
            onCancelPress: () => {

            },
            onOkPress: async () => {
                const result = await setGoodsState(goods.goodsId, "del");
                if (result) {
                    onDeletedGoods?.();
                    Tip.show("Delete Success");
                }
            }
        });

    };

    const offShelfGoods = async (goods: Goods) => {
        Modal.show({
            content: "Are you sure you want to take it off the shelves?",
            okText: "Confirm",
            cancelText: "Cancel",
            onCancelPress: () => {

            },
            onOkPress: async () => {
                const result = await setGoodsState(goods.goodsId, "offshelf");
                if (result) {
                    onOffshelfGoods?.();
                    Tip.show("Off shelf Success");
                }
            }
        });

    };


    return <View style={theme.bottomBar}>
        <View style={styles.bottomFunctionBottoms}>
            {
                goods.state === EnumGoodsState.ON_THE_SHELF && <>
                    <TouchableOpacity onPress={() => NavigationHelper.goPublish(goods.goodsId, Pages.GoodsDetail)} style={styles.bottomFunctionItem}>
                        <IconFont name="bianjiicon1x" size={20} />
                        <Text style={styles.bottomFunctionName}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => offShelfGoods(goods)} style={styles.bottomFunctionItem}>
                        <IconFont name="xiajiaicon1x" size={20} />
                        <Text style={styles.bottomFunctionName}>Off shelf</Text>
                    </TouchableOpacity>
                </>
            }
            {
                goods.state === EnumGoodsState.OFF_THE_SHELF && <Button type="primary" style={styles.bottomRelistButton} onPress={() => NavigationHelper.goPublish(goods.goodsId, Pages.GoodsDetail)}>Relist</Button>

            }

        </View>
        <Button type="default" style={styles.bottomChatButton} onPress={() => deleteGoods(goods)}>Delete</Button>

    </View>;
};