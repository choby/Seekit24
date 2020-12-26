import { getLogicPixel } from '@/utils/pixelRatio';
import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import IconFont from '../Iconfont';
import styles from './styles';

interface GoMoreProps {
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    text?: string | false;
    color?: string;
}

export default ({
    onPress,
    style,
    text,
    color,
    textStyle
}: GoMoreProps) => {
    const Icon =
        <Text style={[styles.paramMore, color ? { color } : undefined, textStyle]}>
            {
                text !== false && <> {text ?? "All"} &nbsp;</>
            }
            <IconFont name="lie-jinru1x" size={getLogicPixel(14)} color={color} />
        </Text>;
    return onPress ? <TouchableOpacity onPress={onPress} style={style}>

        {Icon}

    </TouchableOpacity> : Icon;
};