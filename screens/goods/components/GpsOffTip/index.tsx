import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import IconFont from '@/components/Iconfont';
import { getLogicPixel } from '@/utils/pixelRatio';
import Button from '@/components/Button';

export default () => {
    return <View style={styles.tipContainer}>
        <View style={styles.notTurnOffContainer}>
            <IconFont name="dingwei-weikaiqi1x" size={getLogicPixel(18)} />
            <Text style={styles.notTurnOffText}>
                Location service is not turned on
        </Text>
        </View>

        <Text style={styles.notTurnOffGuiderText}>
            Set or manually select product location
    </Text>
        <View style={styles.chooseButtonsContainer}>
            <Button size="lg">Choose</Button>
            <Button type="primary" size="lg">To set</Button>
        </View>
    </View>
}