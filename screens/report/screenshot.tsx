import AlbumPicker from "@/components/AlbumPicker";
import IconFont from "@/components/Iconfont";
import { Pages } from "@/navigation/pages";
import { useStore } from "@/stores";
import theme from "@/theme";
import { SystemUtils } from "@/utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Asset } from "expo-media-library";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationBar } from "reactive";
import MediaPicker from "../../components/MediaPicker";
import styles from "./styles/screenshot";

export enum Mode {
    ALBUM = 1,
    PICTURE = 2,
    VIDEO = 3
}

export type ReportScreenshotRouteParams = {
    type?: Mode;
};


export default observer(() => {
    const publishState = useStore("reportState");
    const [mode, setMode] = useState<Mode>(Mode.ALBUM);
    const navigation = useNavigation<Navigation>();
    const route = useRoute<Route<Pages.LeadsPublish>>();


    useEffect(() => {
        if (route.params?.type !== undefined)
            setMode(route.params.type);
    }, [route.params?.type]);

    const isUrl = (asset: Asset | string): asset is string => {
        return typeof asset === "string";
    };

    const onSelectAsset = (asset: Asset | string) => {
        const arr: (Asset | string)[] = [...publishState?.selectedAssets ?? [], asset];
        if (!isUrl(asset))
            publishState?.uploadAsset(asset);
        publishState?.setSelectedAssets(arr);

    };

    const onCancelAsset = (asset?: Asset | string) => {
        if (!asset) return;
        const arr: (Asset | string)[] = publishState.selectedAssets.filter(p => isUrl(p) || isUrl(asset) ? p !== asset : p.id !== asset.id) ?? [];
        publishState?.setSelectedAssets(arr);
        if (isUrl(asset)) {
            const urls = publishState.uploadedAssets.filter(u => u.url !== asset);
            publishState.setUploadedAssets(urls);
        } else {
            const urls = publishState.uploadedAssets.filter(u => u.assetUri !== asset.uri);
            publishState.setUploadedAssets(urls);
        }
    };


    // 相机模式上半部分不需要padding
    return <View style={theme.screenView}>
        {/* 相机模式 */}
        {
            (mode === Mode.PICTURE || mode === Mode.VIDEO) && <View style={{ flex: 1 }}>
                <MediaPicker.Camera
                    mode={mode === Mode.PICTURE ? 1 : 2}
                    options={publishState.options}
                    onSelectAsset={onSelectAsset}
                    onCancelAsset={onCancelAsset}
                    selectedAssets={publishState.selectedAssets ?? []}
                    onNextPress={() => navigation.goBack()}
                />
            </View>
        }

        {/* 相册模式;padding正常显示 */}
        <View style={mode === Mode.ALBUM ? [theme.statusBar, theme.screenView, theme.container] : [theme.container, { flex: 0 }]}>
            {
                mode === Mode.ALBUM && <View style={{ flex: 1 }}>
                    <NavigationBar
                        backLabel={<IconFont name="yemianguanbi-hei1x" />}
                        onPressBack={() => navigation.goBack()}
                        titleContainer={<AlbumPicker album={publishState.album} onSelect={album => publishState.changeAlbum(album)} />}
                        title="Select Image"
                        forwardLabel={undefined}
                        style={{ zIndex: 1 }}
                    />
                    <MediaPicker
                        album={publishState.album}
                        options={publishState.options}
                        onSelectAsset={onSelectAsset}
                        onCancelAsset={onCancelAsset}
                        selectedAssets={publishState.selectedAssets ?? []}
                        onNextPress={() => navigation.goBack()}
                    />
                </View>
            }

            <View style={styles.mediaTypeBottoms}>
                <TouchableOpacity style={styles.mediaTypeBottom} onPress={() => setMode(Mode.ALBUM)}>
                    <Text style={[styles.mediaTypeBottomText, mode === Mode.ALBUM ? styles.mediaTypeBottomTextFocused : undefined]}>Photos</Text>
                    {mode === Mode.ALBUM && <View style={styles.mediaTypeFocusIndicator}></View>}
                </TouchableOpacity>


                <TouchableOpacity style={styles.mediaTypeBottom} onPress={async () => {
                    await SystemUtils.permissions.checkCamera();
                    setMode(Mode.PICTURE);
                }}>
                    <Text style={[styles.mediaTypeBottomText, mode === Mode.PICTURE ? styles.mediaTypeBottomTextFocused : undefined]}>Photograph</Text>
                    {mode === Mode.PICTURE && <View style={styles.mediaTypeFocusIndicator}></View>}
                </TouchableOpacity>

                {/* 
                        <TouchableOpacity style={styles.mediaTypeBottom} onPress={() => setMode(Mode.VIDEO)}>
                             <Text style={[styles.mediaTypeBottomText]}>Video</Text>
                        </TouchableOpacity>
                     */}

            </View>
        </View>
    </View>;
});