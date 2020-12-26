import React from 'react';
import { ImageSourcePropType, ImageStyle, ImageURISource, StyleProp } from "react-native";
import { SeekitImage } from "./SeekitImage";

interface AvatorProps {
    size: number;
    style?: StyleProp<ImageStyle>;
    source?: ImageSourcePropType;
}

const sourdeIsImageURISource = (source: ImageSourcePropType): source is ImageURISource => {
    const uri = (source as ImageURISource).uri;
    return uri !== undefined && uri !== "";
};

const Avator = ({ size, style, source }: AvatorProps) => {

    const sizeStyle = {
        width: size,
        height: size,
        borderRadius: size,
    };
    return source && sourdeIsImageURISource(source) ? <SeekitImage style={[sizeStyle, style]} source={source} width={sizeStyle.width} height={sizeStyle.height} resizeMethod="resize" resizeMode="cover" />
        : <SeekitImage source={require("@/assets/images/avator.png")} width={size} height={size} style={[sizeStyle, style]} />;

};

Avator.dispayName = "Avator";

export default React.memo(Avator);