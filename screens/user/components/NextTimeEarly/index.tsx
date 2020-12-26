import React from 'react';
import { View, ImageBackground, Text, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import { EnumGoodsState } from '@/types/enums';




interface NextTimeEarlyProps {
    state: EnumGoodsState;
    style?: StyleProp<ViewStyle>;
}

const getText = (state: EnumGoodsState) => {
    switch (state) {
        case EnumGoodsState.OFF_THE_SHELF:
        case EnumGoodsState.DRAFT:
            return "已下架";
        case EnumGoodsState.DELETED:
            return "已删除";
        // case EnumGoodsState.SALED:
        //     return "已售出";
    }
}

export default ({
    state,
    style
}: NextTimeEarlyProps) => {

    return state !== EnumGoodsState.ON_THE_SHELF ? <View style={[styles.container, style]}>
        <ImageBackground source={require("@/assets/images/nextTimeEarly.png")} style={styles.imageBackground} />
        <Text style={styles.text}>{getText(state)}</Text>
    </View> : <></>;
}