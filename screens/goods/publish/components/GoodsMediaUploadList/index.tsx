// #region
import AddPhotoButton from "@/components/AddPhotoButton";
import DeleteIcon from "@/components/DeleteIcon";
import { Viewer } from "@/components/MediaPicker/viewer";
import { Pages } from '@/navigation/pages';
import { useStore } from '@/stores';
import { useNavigation } from '@react-navigation/native';
import { Asset } from 'expo-media-library';
import { observer } from 'mobx-react';
import React, { useRef } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Mode } from '../..';
import styles from './styles';
//#endregion

export default observer(() => {
    // #region hooks
    const navigation = useNavigation<Navigation>();
    const publishState = useStore("goodsPublishState");
    const viewer = useRef<Viewer>(null);
    // #endregion

    // #region 事件/方法
    const onDelete = (asset: Asset | string) => {
        let arr: (Asset | string)[] = [];
        if (isUrl(asset)) {
            publishState.setUploadedAssets(publishState.uploadedAssets.filter(uploaded => uploaded.url !== asset));
            arr = publishState.selectedAssets.filter(p => isUrl(p) ? p !== asset : true);
        }
        else {
            publishState.setUploadedAssets(publishState.uploadedAssets.filter(uploaded => uploaded.assetUri !== asset.uri));
            arr = publishState.selectedAssets.filter(p => !isUrl(p) ? p.id !== asset.id : true);
        }
        publishState.setSelectedAssets(arr);
    };

    const isUrl = (asset: Asset | string): asset is string => {
        return typeof asset === "string";
    };

    const onSelectAsset = (asset: Asset | string) => {
        const arr: (Asset | string)[] = [...publishState?.selectedAssets ?? [], asset];
        if (!isUrl(asset))
            publishState?.uploadAsset(asset);
        publishState?.setSelectedAssets(arr);

    };

    const onCancelAsset = (asset: Asset | string) => {
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
    const uploadedUri = publishState.uploadedAssets.map(x => x.assetUri);

    // #endregion


    const getUploadStatus = (item: Asset | string) => {
        if (isUrl(item) || uploadedUri.includes(item.uri))
            return undefined;
        if (publishState.uploadFailedAssets.includes(item))
            return <View style={[styles.selectedItemUploadStatusContainer, styles.selectedItemUploadFailedContainer]}>
                <Text style={styles.selectedItemUploadStatusText}>Upload failed</Text>
            </View>;
        if (publishState.uploadingAssets.includes(item))
            return <View style={styles.selectedItemUploadStatusContainer}>
                <Text style={styles.selectedItemUploadStatusText}>Uploading</Text>
            </View>;
    };


    return <View style={styles.photosContainer}>
        <AddPhotoButton onPress={() => {
            navigation.navigate(Pages.GoodsPublish, { type: Mode.ALBUM, reserveState: true, backPage: publishState.backPage });
        }} disabled={!publishState.canAddAsset} />
        <FlatList
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.selectedItemSeparator}></View>}
            horizontal
            data={publishState.selectedAssets}
            renderItem={({ item, index }) => <TouchableOpacity
                key={isUrl(item) ? `url_${index}` : item.id}
                onPress={() => viewer.current?.open(publishState.selectedAssets, item)}
            >
                <View style={[styles.selectedItemContainer]}>
                    <Image
                        source={{ uri: isUrl(item) ? item : item.uri }}
                        style={[styles.selectedItem]}
                    />
                    {getUploadStatus(item)}
                    <DeleteIcon onPress={() => onDelete(item)} style={styles.selectedItemDeleteIcon} />
                </View>
            </TouchableOpacity>} />

        <Viewer ref={viewer}
            selectedAssets={publishState.selectedAssets}
            onSelectAsset={onSelectAsset}
            onCancelAsset={onCancelAsset}
            onNextPress={() => viewer.current?.close()}
            options={publishState.options}
        />
    </View>;
});