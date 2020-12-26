import Checkbox from "@/components/Checkbox";
import { Asset } from "expo-media-library";
import React from "react";
import { Image, ImageStyle, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./styles/pendingItem";


interface PendingItemProps {
    asset: Asset;
    checkboxDisabled?: boolean;
    checked?: boolean;
    onCheckboxChange?: (asset: Asset) => void;
    onPress?: (asset: Asset) => void;
    style?: StyleProp<ViewStyle>;
    checkboxIconStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    checkboxIconSize?: number;
    multi?: boolean;
}

export default ({
    asset,
    checkboxDisabled,
    checked,
    onCheckboxChange,
    onPress,
    style,
    checkboxIconStyle,
    imageStyle,
    checkboxIconSize,
    multi
}: PendingItemProps) => {
    return <TouchableOpacity onPress={() => onPress?.(asset)}>
        <View style={[styles.photoLibImage, style]}>
            {multi !== false && <Checkbox style={[styles.photoLibCheckbox, checkboxIconStyle]}
                disabled={checkboxDisabled}
                checked={checked}
                onChange={() => onCheckboxChange?.(asset)}
                size={checkboxIconSize}
            />}
            <Image source={{ uri: asset.uri, width: styles.photoLibImage.width, height: styles.photoLibImage.height }} style={[styles.photoLibImage, imageStyle]} />
        </View>
    </TouchableOpacity>;
};