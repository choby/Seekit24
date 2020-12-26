import IconFont from "@/components/Iconfont";
import MediaPicker, { Options } from "@/components/MediaPicker";
import PlaceHolder from "@/components/Placeholder";
import useMount from "@/hooks/useMount";
import useNetworkListener from "@/hooks/useNetworkListener";
import { uploadFile } from "@/services/awsS3";
import { setAvator } from "@/services/user";
import { stores } from "@/stores";
import theme from "@/theme";
import { EnumMediaType } from "@/types/enums";
import { useNavigation } from "@react-navigation/native";
import { Asset } from "expo-media-library";
import React, { useState } from "react";
import { StatusBar, View } from 'react-native';
import { NavigationBar } from "reactive";


const options = new Options();
options.maxSelectQty = 1;

export default () => {
    const navigation = useNavigation<Navigation>();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const [photo, setPhoto] = useState<Asset>();

    useNetworkEffect(() => {

    }, true);

    useMount(() => {
        StatusBar.setBarStyle("light-content");
        return () => StatusBar.setBarStyle("dark-content");
    });

    const onSelectAsset = (asset: Asset | string) => {
        //@ts-ignore
        setPhoto(asset);

    };

    const onCancelAsset = () => {
        setPhoto(undefined);
    };

    const onNextPress = async () => {
        if (!photo) return;
        const result = await uploadFile(photo.mediaType === "photo" ? EnumMediaType.IMAGE : EnumMediaType.VIDEO, photo.uri);
        if (result && result.key) {
            const success = await setAvator(result.key);
            if (success) {
                stores.appState.updateUserInfo();
                navigation.goBack();
            }
        }
    };

    return <View style={theme.screenView}>
        {
            !isConnected && <View style={theme.paddingHorizontal}>
                <NavigationBar
                    backLabel={<IconFont name="yemianguanbi-hei1x" />}
                    onPressBack={() => navigation.goBack()}
                    titleContainer={false}
                    forwardLabel={undefined}
                    style={{ zIndex: 1 }}
                />
            </View>
        }
        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>

            <View style={[theme.screenView]}>
                <View style={{ flex: 1 }}>
                    <MediaPicker.Camera
                        mode={1}
                        options={options}
                        onSelectAsset={onSelectAsset}
                        onCancelAsset={onCancelAsset}
                        selectedAssets={photo ? [photo] : []}
                        onNextPress={onNextPress} />
                </View>
            </View>
        </PlaceHolder.NoNetworkView>
    </View>;
};