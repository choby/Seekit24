import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import IconFont from "../Iconfont";
import styles from './styles';

interface DeleteIconProps { onPress: () => void, style?: StyleProp<ViewStyle>; }

export default ({ onPress, style }: DeleteIconProps) => {
    return <TouchableOpacity
        style={[styles.deleteIcon, style]}
        onPress={() => onPress()}
        // 增加点击热区
        hitSlop={{
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        }}
    >
        <View>
            <IconFont name="shanchuzhaopian1x" size={20} />
        </View>
    </TouchableOpacity>;
};