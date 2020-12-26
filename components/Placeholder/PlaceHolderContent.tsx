import React from 'react';
import { Image, Text, View } from 'react-native';
import Divider from "../Divider";
import styles from "./styles";

export const tipImages = {
    info: require("@/assets/images/blank_info.png"),
    processing: require("@/assets/images/blank_info.png"),
    failed: require("@/assets/images/blank_failed.png"),
    success: require("@/assets/images/blank_success.png"),
    empty: require("@/assets/images/blank_empty.png"),
    nonetwork: require("@/assets/images/blank_nonetwork.png"),
    nosearchdata: require("@/assets/images/blank_nosearchdata.png"),
    nomsg: require("@/assets/images/blank_nomsg.png"),
    notfoundgoods: require("@/assets/images/notFoundGoods.png"),
};


export interface BlankProps {
    type: keyof typeof tipImages;
    text: string | false;
}
export default ({ type, text }: BlankProps) => {
    return <View style={styles.tipContainer}>
        <Image source={tipImages[type]} style={styles.tipImage} />
        {
            text !== false && <Text style={styles.tipText}>{text}</Text>
        }
        <Divider height={60} />
    </View>;
};