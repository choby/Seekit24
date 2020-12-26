import { ExpoConfig } from '@expo/config';
import moment from "moment";

export default (): ExpoConfig => {
    const buildNumber = moment().format("YYMMDDHHmm");
    const version = "1.1.0";
    return {
        name: "Seekit24",
        slug: "seekit24",
        version,
        packagerOpts: {
            config: "metro.config.js",
            sourceExts: [
                "expo.ts",
                "expo.tsx",
                "expo.js",
                "expo.jsx",
                "ts",
                "tsx",
                "js",
                "jsx",
                "json",
                "wasm",
                "svg"
            ]
        },
        ios: {
            bundleIdentifier: "com.ultronnet.seekit24",
            buildNumber: buildNumber,
            supportsTablet: false,
            config: {
                googleMapsApiKey: "AIzaSyBVKRCMzY3CUI9ELBwGdlvRU5mag-xW2_U"
            },
            infoPlist: {
                NSLocationWhenInUseUsageDescription: "Seekit24 needs to get your geographic location so that we can recommend nearby products",
                NSCameraUsageDescription: "Seekit24 needs to access your camera so that you can take photos and videos of products",
                NSPhotoLibraryAddUsageDescription: "Seekit24 needs to access your album so that you can upload and send product photos",
                NSPhotoLibraryUsageDescription: "Seekit24 needs to access your album so that you can upload and send product photos",
                //CFBundleAllowMixedLocalizations: true
            }
        },
        android: {
            config: {
                googleMaps: {
                    apiKey: "AIzaSyDVHuGHmFK-Rr1hsaQX5kViGPnGMpj3Xi8",

                },
                googleMobileAdsAutoInit: false
            },
            package: "com.ultronnet.seekit24",
            versionCode: Number(buildNumber),
            permissions: [
                "CAMERA",
                "ACCESS_COARSE_LOCATION",
                "ACCESS_FINE_LOCATION",
                "READ_EXTERNAL_STORAGE",
                "WRITE_EXTERNAL_STORAGE",
                "BIND_NOTIFICATION_LISTENER_SERVICE",
                "ACCESS_NOTIFICATION_POLICY",
            ],
            useNextNotificationsApi: true,
            googleServicesFile: "./google-services.json",
            softwareKeyboardLayoutMode: "pan"
        },
        platforms: [
            "ios",
            "android",
            "web"
        ],
        orientation: "portrait",
        icon: "./assets/icon.png",
        splash: {
            image: "./assets/images/splash@3x.png",
            resizeMode: "cover",
            backgroundColor: "#ffffff"
        },
        updates: {
            fallbackToCacheTimeout: 0
        },
        // androidStatusBar: {
        //     backgroundColor: "#C2185B",
        //     barStyle: "light-content"
        // },
        assetBundlePatterns: [
            "**/*"
        ],
        androidStatusBar: {
            barStyle: "light-content",
            backgroundColor: "#ffffff"
        },
        extra: {
            version: `${version}(${buildNumber})`
        },
        hooks: {
            postPublish: [
                {
                    file: "sentry-expo/upload-sourcemaps",
                    config: {
                        organization: "ultron",
                        project: "seekit24",
                        url: "http://sentry.aoidc.net/",
                        authToken: "1ef544d9190442888629fd873cb762589a4e298ef6bf43cfbe389b0d27a2add3"
                    }
                }
            ]
        }
    } as ExpoConfig;
};