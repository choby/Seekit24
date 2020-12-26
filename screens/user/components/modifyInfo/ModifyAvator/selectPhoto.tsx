import AlbumPicker from "@/components/AlbumPicker";
import IconFont from "@/components/Iconfont";
import MediaPicker, { Options } from "@/components/MediaPicker";
import PlaceHolder from "@/components/Placeholder";
import Tip from "@/components/Tip";
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from "@/navigation/pages";
import { uploadFile } from "@/services/awsS3";
import { setAvator } from "@/services/user";
import { stores } from "@/stores";
import theme from "@/theme";
import { EnumMediaType } from "@/types/enums";
import { useNavigation } from "@react-navigation/native";
import { Album, Asset } from "expo-media-library";
import React, { useState } from "react";
import { View } from 'react-native';
import { NavigationBar } from "reactive";




const options = new Options();
options.maxSelectQty = 1;

export default () => {
    const navigation = useNavigation<Navigation>();
    const [album, setAlbum] = useState<Album>();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();


    useNetworkEffect(() => {

    }, true);


    const onSelectAsset = async (asset: Asset | string) => {
        if (!asset || typeof asset === "string") return;
        Tip.show("uploading...", 10000000, false);
        const result = await uploadFile(asset.mediaType === "photo" ? EnumMediaType.IMAGE : EnumMediaType.VIDEO, asset.uri);
        if (result && result.key) {
            const success = await setAvator(result.key);
            Tip.hide();
            if (success) {
                stores.appState.updateUserInfo();
                navigation.goBack();
            }
        }

    };

    const onCancelAsset = () => {

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

            <View style={[theme.statusBar, theme.screenView, theme.container]}>
                <View style={{ flex: 1 }}>
                    <NavigationBar
                        backLabel={<IconFont name="yemianguanbi-hei1x" />}
                        onPressBack={() => navigation.goBack()}
                        titleContainer={<AlbumPicker onSelect={album => setAlbum(album)} album={album} />}
                        title="Select Image"
                        forwardLabel={undefined}
                        style={{ zIndex: 1 }}
                    />
                    <MediaPicker album={album}
                        options={options}
                        onSelectAsset={onSelectAsset}
                        onCancelAsset={onCancelAsset}
                        selectedAssets={[]}
                        onNextPress={() => navigation.navigate(Pages.GoodsPublishConfirm)} />
                </View>
            </View>

        </PlaceHolder.NoNetworkView>
    </View>;
};