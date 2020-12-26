import { postNotificationToken } from "@/services/common";
import { EnumDevicePlatform } from "@/types/enums";
import { SystemUtils } from "@/utils";
import { Subscription } from '@unimodules/core';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useEffect, useRef, useState } from 'react';
import { Platform } from "react-native";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

// test push
// async function sendPushNotification(expoPushToken: string) {
//     await Notifications.scheduleNotificationAsync({
//         content: {
//             title: "You've got mail! 📬",
//             body: 'Here is the notification body',
//             data: { data: 'goes here' },
//         },
//         trigger: { seconds: 2 },
//     });
// }

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getDevicePushTokenAsync()).data;
        postNotificationToken(SystemUtils.isIos ? EnumDevicePlatform.IOS : EnumDevicePlatform.ANDROID, token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

export const useNotification = (): [Notifications.Notification | undefined, string] => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState<Notifications.Notification>();
    const notificationListener = useRef<Subscription>();
    const responseListener = useRef<Subscription>();
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            if (notificationListener.current)
                Notifications.removeNotificationSubscription(notificationListener.current);
            if (responseListener.current)
                Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    return [notification, expoPushToken];
};