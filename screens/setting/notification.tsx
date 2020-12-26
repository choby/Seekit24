import IconFont from "@/components/Iconfont";
import Modal from "@/components/Modal";
import Switch from "@/components/Switch";
import { setInteractiveNotice } from "@/services/user";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { SystemUtils } from "@/utils";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as Notifications from 'expo-notifications';
import { observer } from "mobx-react";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationBar } from "reactive";
import styles from "./styles/notification";

async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return (
        settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
}

export default observer(() => {
    const navigation = useNavigation<Navigation>();
    const [allowNotification, setAllowNotification] = useState(false);
    const appState = useStore("appState");


    useFocusEffect(() => {
        (async () => {
            const allow = await allowsNotificationsAsync();
            setAllowNotification(allow);
        })();
    });

    const goSetting = async () => {
        Modal.show({
            content: "Please go to settings to change notifications",
            title: "New message notification settings",
            cancelText: "I know",
            okText: "Set",
            onOkPress: () => {
                SystemUtils.linkSetting();
            }
        });
    };

    const onChangeSwitch = async () => {
        const success = await setInteractiveNotice((appState.userInfo?.interactiveSwitch ?? true) ? false : true);
        if (success)
            appState.updateUserInfo();
    };

    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            onPressBack={() => navigation.goBack()}
            backLabel={<IconFont name="fanhui-heise1x" />}
            titleContainer={false}
            style={{ zIndex: 1 }}
        />
        <View>
            <Text style={styles.pageTitle}>Notification</Text>
            <View style={styles.listContainer}>
                <View style={styles.listItemContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.listItemLabel}>New message notification</Text>
                        <Text numberOfLines={1} style={styles.listItemLabelDesc}>Including system,chat,message notification</Text>
                    </View>
                    <View style={styles.listItemRightContainer}>
                        <Switch value={allowNotification} onChange={goSetting} />
                    </View>
                </View>

                <View style={styles.listItemContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.listItemLabel}>Interactive message</Text>
                        <Text numberOfLines={1} style={styles.listItemLabelDesc}>Interactive message</Text>

                    </View>
                    <View style={styles.listItemRightContainer}>
                        <Switch disabled={!allowNotification} value={(appState.userInfo?.interactiveSwitch ?? true)} onChange={onChangeSwitch} />
                    </View>
                </View>
            </View>
        </View>
    </View>;
});



