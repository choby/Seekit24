import IconFont from "@/components/Iconfont";
import { Color } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import React from 'react';
import { Text, View } from "react-native";
import styles from './styles';

export default () => {
    return <View style={styles.imageTipsContainer}>
        <IconFont name="tishi1x" color={Color.SECONDARY_4} size={getLogicPixel(14)} style={{ marginTop: 3 }} />
        <Text style={styles.imageTipsText}>The first three photos of the promotion products have been added automatically</Text>
    </View>;
};