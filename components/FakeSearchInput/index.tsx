import Iconfont from '@/components/Iconfont';
import { Color } from "@/theme/variables";
import { getLogicPixel } from '@/utils/pixelRatio';
import React from 'react';
import { StyleProp, Text, View, ViewProps } from 'react-native';
import styles from './styles';

export default ({ style }: { style?: StyleProp<ViewProps>; }) => {
    return <View style={[styles.searchInputContainer, style]}>
        <View style={styles.searchIcon}>
            <Iconfont name="sousuo1x" size={getLogicPixel(19)} color={Color.SECONDARY_3} />
            <Text style={styles.searchPlaceholderText}>Please input keyword</Text>
        </View>
    </View>;
};