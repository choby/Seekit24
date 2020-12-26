import React from "react";
import IconFont from "../Iconfont";
import { View, StyleProp, ViewStyle, TouchableOpacity } from "react-native";

type CheckboxValueType = string | number | boolean;

interface CheckboxProps {
    checked?: boolean;
    value?: CheckboxValueType
    onChange?: (value?: CheckboxValueType) => void;
    size?: number;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
}

export default (props: CheckboxProps) => {
    const { value, onChange, size = 22, style, checked = false, disabled } = props;
    const iconName = checked ? "daxuanze1x" : "daxuanze-weixuan1x";

    return <TouchableOpacity disabled={disabled}
        onPress={(e) => {
            e.stopPropagation();
            onChange?.(value);
        }} style={style}
        // 增加点击热区
        hitSlop={{
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
        }}
    >
        <View pointerEvents="box-only" >
            <IconFont name={iconName} size={size} pointerEvents="none" />
        </View>
    </TouchableOpacity>;
}