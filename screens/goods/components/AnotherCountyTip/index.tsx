import React from "react";
import { View, Text } from "react-native";
import IconFont from "@/components/Iconfont";
import styles from "./styles";

export default () => {
    return <View style={styles.container}>
        <Text style={styles.currentPosition}>
            Current position
                </Text>
        <View style={styles.tipContent}>
            <IconFont name="dingwei-weikaiqi1x" />
            <Text style={styles.tipContentText}>
                Currently targeting a non-Cambodia country,
                please switch to another location manually
            </Text>
        </View>
        <Text style={styles.currentPosition}>
            Other location
        </Text>
        <View style={styles.addressListContainer}>
        <View  style={styles.addressItemContainer}>
                <Text style={styles.addressText}>All Cambodia</Text>
            </View>
            <View  style={styles.addressItemContainer}>
                <Text style={styles.addressText}>New Jane</Text>
            </View>
        </View>
    </View>;
}