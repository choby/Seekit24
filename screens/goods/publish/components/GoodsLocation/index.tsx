import IconFont from "@/components/Iconfont";
import { Pages } from '@/navigation/pages';
import { useStore } from '@/stores';
import { SystemUtils } from "@/utils";
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default observer(() => {
    const navigation = useNavigation<Navigation>();
    const publishState = useStore("goodsPublishState");

    return <TouchableOpacity style={styles.locationContainer} onPress={async () => {
        await SystemUtils.permissions.checkLocation();
        navigation.navigate(Pages.GoodsPublishConfirmPlace);
    }}>
        <IconFont name="dingwei1x" />
        <Text style={styles.locationText}>{publishState.place.name ? publishState.place.name : "Please select location"}</Text>
    </TouchableOpacity>;
});