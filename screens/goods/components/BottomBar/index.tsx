import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import { collect } from "@/services/goods";
import theme from "@/theme";
import { Color } from "@/theme/variables";
import { Goods } from "@/types/data/Goods";
import { EnumGoodsState } from "@/types/enums";
import { withAuthDelegate } from "@/utils/withAuth";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";



interface BottomBarProps {
    goods: Goods;
    onStartMessage?: () => void;
    onCollect?: () => void;
    onCancelCollect?: () => void;
    onStartChat?: () => void;

}
export const BottomBar = ({ goods, onStartMessage, onCollect, onCancelCollect, //onStartChat 
}: BottomBarProps) => {
    const [collected, setCollected] = useState(goods.collect);
    const setCollect = async () => {
        const result = await collect(goods.goodsId);
        if (result) {
            setCollected(true);
            onCollect?.();
        }
    };
    const cancelCollect = async () => {
        const result = await collect(goods.goodsId);
        if (result) {
            setCollected(false);
            onCancelCollect?.();
        }
    };

    const goodsIsOffshelf = (): boolean => {
        return goods.state === EnumGoodsState.OFF_THE_SHELF;
    };

    return <View style={theme.bottomBar}>
        <View style={styles.bottomFunctionBottoms}>
            <TouchableOpacity onPress={withAuthDelegate(onStartMessage)} disabled={goodsIsOffshelf()} style={styles.bottomFunctionItem}>
                <IconFont name="jinru1x" size={20} color={goodsIsOffshelf() ? Color.SECONDARY_4 : undefined} />
                <Text style={[styles.bottomFunctionName, goodsIsOffshelf() ? styles.disabled : undefined]}>Message</Text>
            </TouchableOpacity>
            {!goods.master && <>
                {
                    //未收藏
                    !collected && <TouchableOpacity onPress={withAuthDelegate(setCollect)} disabled={goodsIsOffshelf()} style={styles.bottomFunctionItem}>
                        <IconFont name="shoucangicon" size={20} color={goodsIsOffshelf() ? Color.SECONDARY_4 : undefined} />
                        <Text style={[styles.bottomFunctionName, goodsIsOffshelf() ? styles.disabled : undefined]}>Collection</Text>
                    </TouchableOpacity>
                }
                {
                    //已收藏
                    collected && <TouchableOpacity onPress={withAuthDelegate(cancelCollect)} disabled={goodsIsOffshelf()} style={styles.bottomFunctionItem}>
                        <View style={styles.bottomFunctionItem}>
                            <IconFont name="shoucangicon-liang" size={20} color={goodsIsOffshelf() ? Color.SECONDARY_4 : undefined} />
                            <Text style={[styles.bottomFunctionName, goodsIsOffshelf() ? styles.disabled : undefined]}>Collected</Text>
                        </View>
                    </TouchableOpacity>
                }
            </>
            }
        </View>
        {
            //  !goodsIsOffshelf() && <Button type="primary" style={styles.bottomChatButton} onPress={withAuthDelegate(onStartChat)}>Chat</Button>
        }
        {
            goodsIsOffshelf() && <Button type="primary" disabled style={styles.bottomRemovedButton}>Stop selling</Button>
        }
    </View>;
};
