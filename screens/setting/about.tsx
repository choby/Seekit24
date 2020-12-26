import IconFont from "@/components/Iconfont";
import { Pages } from "@/navigation/pages";
import theme from "@/theme/index";
import { EnumQuoteUri } from "@/types/enums";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
import React from "react";
import { Image, Text, View } from "react-native";
import { NavigationBar } from "reactive";
import InfoList, { InfoItem } from "../components/InfoList";
import styles from "./styles/about";

export default () => {
    const navigation = useNavigation<Navigation>();
    const listItems: InfoItem[] = [{
        label: "Software license agreement",
        onPress: () => navigation.navigate(Pages.SettingWebviewPage, { url: EnumQuoteUri.AGREEMENT_EN }),
    }, {
        label: "Seekit24 Privacy policy",
        onPress: () => navigation.navigate(Pages.SettingWebviewPage, { url: EnumQuoteUri.PRIVACYPOLICY_EN }),
    }];
    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            onPressBack={() => navigation.goBack()}
            titleContainer={false}
            style={{ zIndex: 1 }}
        />
        <View>
            <Text style={styles.pageTitle}>About APP</Text>
            <View style={styles.aboutLogoContainer}>
                <Image style={styles.aboutLogo} source={require("@/assets/images/appicon.png")} />
                <Text style={styles.aboutVersionText}>Current version V{Constants.manifest.version}</Text>
            </View>
            <InfoList items={listItems} />
        </View>
    </View>;
};



