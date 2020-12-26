import { getLogicPixel } from "@/utils/pixelRatio";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import IconFont, { IconNames } from "../Iconfont";
import styles from './styles';

interface AddPhotoButtonProps {
    onPress: () => void;
    disabled?: boolean;
    icon?: IconNames;
}

export default (props: AddPhotoButtonProps) => {
    return <TouchableOpacity style={styles.camera} onPress={props.onPress} disabled={props.disabled}>
        <IconFont name={props.icon ?? "tianjiazhaopian1x"} size={getLogicPixel(32)} />
        <Text style={styles.cameraText}>Add photo</Text>
    </TouchableOpacity>;
};