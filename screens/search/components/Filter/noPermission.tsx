import IconFont from "@/components/Iconfont";
import { SystemUtils } from "@/utils";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/noPermission";

export default () => {
    return <TouchableOpacity onPress={() => SystemUtils.linkSetting()}>
        <View style={styles.noPermissionContainer}>
            <Text style={styles.noPermissionText}>
                <IconFont name="tishi1x" size={16} /> 开启定位权限可自动定位哦，点击设置
            </Text>
            <IconFont name="jinru-mianbaoxie1x" />
        </View>
    </TouchableOpacity>;
};