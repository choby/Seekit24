import Modal from "@/components/Modal";
import { ConfigHub } from "@/types/apiConfig";
import Constants from "expo-constants";
import * as IntentLauncher from 'expo-intent-launcher';
import * as Location from 'expo-location';
import * as Permissions from "expo-permissions";
import { PermissionType } from "expo-permissions";
import * as Random from 'expo-random';
import * as _ from "lodash";
import { Image, Linking, NativeScrollEvent, NativeSyntheticEvent, Platform } from "react-native";
import { v4 as uuidv4 } from 'uuid';
import { PermissionsStorage } from "../infrastructures/storages/PermissionsStorage";

export function debounce(func: () => void) {
    return _.debounce(func, 1000, {
        leading: true,
        trailing: false,
    });
}
/**
 * scrollview 通用顶部加载方法
 * @param e scrollview滚动事件
 * @param loadFunc 数据加载函数
 */
export const scrollViewTopLoad = async (e: NativeSyntheticEvent<NativeScrollEvent>, loadFunc: () => void) => {
    const offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    if (offsetY <= 0) await loadFunc();
};

/**
 * scrollview 通用底部加载方法
 * @param e scrollview滚动事件
 * @param loadFunc 数据加载函数
 */
export const scrollViewEndLoad = async (e: NativeSyntheticEvent<NativeScrollEvent>, loadFunc: () => void) => {
    const offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    const contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
    const oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
    if (offsetY <= 0) return;
    if (offsetY + oriageScrollHeight >= contentSizeHeight - 300) {
        await loadFunc();
    }
};

export const base64ToBlob = (b64Data: string, contentType: string, sliceSize = 512) => {

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;

};

export const getNetworkImageSource = (imageUri: string) => {
    const assetSource = Image.resolveAssetSource({ uri: imageUri });

    // if (width && height) {
    //     assetSource.width = width;
    //     assetSource.height = height;
    // }
    // else {
    //     if (width) {
    //         assetSource.height =  width /(assetSource.width / assetSource.height);
    //         assetSource.width = width;

    //     } else if (height) {
    //         assetSource.width = assetSource.width / assetSource.height * height;
    //         assetSource.height = height;
    //     }
    // }
    return assetSource;
};



export const uuid = async () => {
    //由于rn不支持crypto.getRandomValues(),需要先使用expo-random生成随机数,再由uuid生成guid
    return uuidv4({
        random: await Random.getRandomBytesAsync(16)
    });
};

const permissionStorage = new PermissionsStorage();
export class SystemUtils {
    public static get isIos() {
        return Platform.OS === "ios";
    }
    public static get isAndroid() {
        return Platform.OS === "android";
    }
    private static _expoEnv: keyof ConfigHub;

    public static get expoEnv(): keyof ConfigHub {
        if (SystemUtils._expoEnv === undefined) {
            SystemUtils.changeEnv(__DEV__ ? Constants.manifest.env.EXPO_ENV : Constants.manifest.releaseChannel);
        }
        return SystemUtils._expoEnv;
    }

    /**
     * 切换环境
     * @param env 环境变量
     */
    public static changeEnv(env: keyof ConfigHub) {
        SystemUtils._expoEnv = env;
    }
    public static get version() {
        return Constants.manifest.version;
    }
    public static get buildNumber() {
        return SystemUtils.isIos ? Constants.platform?.ios?.buildNumber : Constants.platform?.android?.versionCode;
    }
    public static get versionBuildNumber() {
        return Constants.manifest.extra.version;
    }
    public static linkSetting() {
        if (SystemUtils.isAndroid)
            IntentLauncher.startActivityAsync(IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS, {
                packageName: "com.ultronnet.seekit24",
                data: 'package:com.ultronnet.seekit24'
            });
        else
            Linking.openURL('app-settings:');
    }
    private static async askPermission(KEY: PermissionType) {
        let status = await permissionStorage.getPermission(KEY);
        if (status === undefined) {
            const response = await Permissions.askAsync(KEY);
            status = response.status;
            permissionStorage.updatePermission(KEY, status);
        } else {
            let response = await Permissions.getAsync(KEY);
            status = response.status;
            if (status !== "granted") {
                if (response.canAskAgain)
                    response = await Permissions.askAsync(KEY);
                status = response.status;
            }
            permissionStorage.updatePermission(KEY, status);
        }
        return status;
    }
    public static permissions = {
        async checkCamera() {
            const KEY: PermissionType = "camera";
            const status = await SystemUtils.askPermission(KEY);

            if (status !== "granted")
                Modal.show({
                    content: "You must allow SeeKIT24 access to the camera to take product photos and videos",
                    title: "Please authorize seekit24 to use the camera",
                    cancelText: "Cancel",
                    okText: "Setting",
                    onOkPress: async () => {
                        await permissionStorage.updatePermission(KEY, undefined);
                        SystemUtils.linkSetting();
                    }
                });

            return status;
        },

        async checkCameraRoll() {
            const KEY: PermissionType = "cameraRoll";
            const status = await SystemUtils.askPermission(KEY);
            if (status !== "granted")
                Modal.show({
                    content: "You must allow SeeKit24 access to albums before you can upload and send product photos",
                    title: "Please authorize seekit24 to use the album",
                    cancelText: "Cancel",
                    okText: "Setting",
                    onOkPress: async () => {
                        await permissionStorage.updatePermission(KEY, undefined);
                        SystemUtils.linkSetting();
                    }
                });

            return status;
        },

        async checkLocation(openModal?: boolean) {
            const KEY: PermissionType = "location";
            const showModal = () => Modal.show({
                content: "You must allow SeeKit24 to use the location-based service to locate goods and recommend nearby goods to you",
                title: "Please authorize SeeKIT24 to use location services",
                cancelText: "Cancel",
                okText: "Setting",
                onOkPress: async () => {
                    await permissionStorage.updatePermission(KEY, undefined);
                    SystemUtils.linkSetting();
                }
            });

            const enabled = await Location.hasServicesEnabledAsync();
            if (!enabled) {
                if (openModal !== false)
                    showModal();
                return;
            }

            const status = await SystemUtils.askPermission(KEY);
            if (status !== "granted" && openModal !== false)
                showModal();

            return status;
        }
    };
}

export class Verification {
    public static phoneIsValid = (phone?: string) => {
        return phone ? phone.length >= 8 && phone.length <= 10 : false;
    };
    public static moneyIsValid = (value: string) => {
        if (value?.indexOf(".") === 0) value = "0" + value;
        const patten = /^\d{1,8}(\.\d{0,2})?$/;
        return !!!value || patten.test(value);
    };
}