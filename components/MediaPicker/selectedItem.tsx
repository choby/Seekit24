import React, { memo } from "react";
import { View, Image,  TouchableOpacity, StyleProp, ViewStyle, ImageStyle } from "react-native";
import styles from "./styles/selectedItem";
import IconFont from "@/components/Iconfont";
import { Asset } from "expo-media-library";

interface SelectedItemProps {
    asset: Asset | string;
    onDelete?: (asset: Asset | string) => void;
    onPress?: (asset: Asset | string) => void;
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    deleteIconStyle?: StyleProp<ViewStyle>;
    deleteIconSize?: number;
}

const isUrl = (asset: Asset | string): asset is string => {
    return typeof asset === "string";
}

function selectedItem({
    asset,
    onDelete,
    onPress,
    style,
    imageStyle,
    deleteIconStyle,
    deleteIconSize = 20
}: SelectedItemProps) {
    return <><TouchableOpacity onPress={() => onPress?.(asset)}>
        <View style={[styles.selectedItemContainer, style]}>
            <Image
                source={{ uri: isUrl(asset) ? asset : asset.uri, width: styles.selectedItem.width, height: styles.selectedItem.height }}
                style={[styles.selectedItem, imageStyle]}
            />
            <TouchableOpacity
                style={[styles.selectedItemDeleteIcon, deleteIconStyle]}
                onPress={() => onDelete?.(asset)}
                // 增加点击热区
                hitSlop={{
                    top: 10,
                    left: 10,
                    right: 10,
                    bottom: 10
                }}
            >
                <View >
                    <IconFont name="shanchuzhaopian1x" size={deleteIconSize} />
                </View>
            </TouchableOpacity>
        </View>
    </TouchableOpacity></>;
}

export default memo(selectedItem) as typeof selectedItem;