import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface LinearGradientProps {
    children?: React.ReactChild | React.ReactChild[];
    style?: StyleProp<ViewStyle>;
}

export default ({ children, style }: LinearGradientProps) => {
    return <LinearGradient
        colors={["#FFFFFF", "#F9FAFB", '#F9FAFB']}
        style={[{
            flex: 1, position: "absolute",
            zIndex: -1,
            height: getLogicPixel(150),
            width: pixelRatio.screenSize.width
        }, style]}>
        {children}
    </LinearGradient>;
};

