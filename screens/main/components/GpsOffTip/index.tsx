import IconFont from '@/components/Iconfont';
import { SystemUtils } from "@/utils";
import { getLogicPixel } from '@/utils/pixelRatio';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default ({ display }: { display: boolean; }) => {
    const [displayState, setDisplayState] = useState(display);
    const openSettings = () => {
        SystemUtils.linkSetting();
    };
    return displayState ? <View style={styles.tipContainer}>
        <View style={styles.notTurnOffContainer}>
            <IconFont name="dingwei-weikaiqi1x" size={getLogicPixel(24)} />
            <Text style={styles.notTurnOffText} numberOfLines={2}>
                Turn on positioning, recommend  more accurate
            </Text>
        </View>

        <TouchableOpacity style={styles.setButton} onPress={openSettings}>
            <Text style={styles.setButtonText}>Set</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.close} activeOpacity={1} onPress={() => setDisplayState(false)}>
            <IconFont name="guanbi-huangse1x" size={getLogicPixel(20)} />
        </TouchableOpacity>

    </View> : <></>;
};