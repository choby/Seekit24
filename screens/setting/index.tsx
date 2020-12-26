import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import { Pages } from "@/navigation/pages";
import { logout } from "@/services/session";
import theme from "@/theme/index";
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants';
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationBar } from "reactive";
import InfoList, { InfoItem } from "../components/InfoList";
import styles from "./styles";

const listItems: InfoItem[] = [
    {
        label: "Personal data",
        nextPage: Pages.UserInfo,
    },
    // {
    //     label: "Log in to set",
    //     nextPage: "allcategories",
    // }, 
    // {
    //     label: "Message notification",
    //     nextPage: Pages.SettingNotification,
    // },
    // {
    //     label: "Privacy set",
    //     nextPage: "settingPermission",
    // }, 
    // {
    //     label: "Blacklist",
    //     nextPage: Pages.SettingBlackList,
    // },
    // {
    //     label: "Language",
    //     value: "Simplified Chinese",
    //     nextPage: "settingLang",
    // }, 
    {
        label: "About APP",
        value: Constants.manifest.version,
        nextPage: Pages.SettingAbout,
    }];

export default () => {
    const navigation = useNavigation<Navigation>();
    // const navigationState = useNavigationState(state => state);
    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            onPressBack={() => navigation.goBack()}
            titleContainer={false}
            style={{ zIndex: 1 }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>Set</Text>
            <InfoList items={listItems} />
            <View style={styles.buttonContainer}>
                <Button type="secondary" size="lg" onPress={async () => {
                    logout();
                    navigation.navigate(Pages.RootTab, { screen: "Home" });
                }}>Sign out</Button>
            </View>
        </ScrollView>
    </View>;
};



