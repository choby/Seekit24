import React from "react";
import { View, ScrollView, Text } from "react-native";
import { NavigationBar } from "reactive";
import theme from "@/theme/index";
import IconFont from "@/components/Iconfont";
import styles from "./styles/permission";
import InfoList from "../components/InfoList";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation<Navigation>();
    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            onPressBack={() => navigation.goBack()}
            titleContainer={false}
            style={{ zIndex: 1 }}
        />
        <ScrollView>
            <Text style={styles.pageTitle}>System Authority</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                    To provide you with a better user experience, you may need toYou apply for the following mobile phone system permissions.
                </Text>
            </View>
            <InfoList items={[]} />
        </ScrollView>
    </View>;
}



