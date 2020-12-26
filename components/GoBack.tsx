import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import IconFont from './Iconfont';
import { getLogicPixel } from '@/utils/pixelRatio';

interface GoBackProps {
    color?: "dark" | "light";
    style?: StyleProp<ViewStyle>;
    size?: number;
}

const GoBack = ({ color = "dark", style, size = getLogicPixel(20) }: GoBackProps) => {
    return <View style={style}>
        {
            color === "light" && <IconFont name="fanhui-baise1x" size={size} />
        }
        {
            color === "dark" && <IconFont name="fanhui-heise1x" size={size} />
        }
    </View>;
}

GoBack.displayName = "GoBack";

export default GoBack;