// #region
import AddPhotoButton from "@/components/AddPhotoButton";
import DeleteIcon from "@/components/DeleteIcon";
import { Viewer } from "@/components/MediaPicker/viewer";
import NavigationHelper from "@/navigation/helper";
import { useStore } from '@/stores';
import { Asset } from 'expo-media-library';
import { observer } from 'mobx-react';
import React, { useRef } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

//#endregion

export default observer(() => {
    // #region hooks
    const reportState = useStore("reportState");
    const viewer = useRef<Viewer>(null);
    // #endregion

    // #region 事件/方法
    const onDelete = (asset: Asset | string) => {
        let arr: (Asset | string)[] = [];
        if (isUrl(asset)) {
            reportState.setUploadedAssets(reportState.uploadedAssets.filter(uploaded => uploaded.url !== asset));
            arr = reportState.selectedAssets.filter(p => isUrl(p) ? p !== asset : true);
        }
        else {
            reportState.setUploadedAssets(reportState.uploadedAssets.filter(uploaded => uploaded.assetUri !== asset.uri));
            arr = reportState.selectedAssets.filter(p => !isUrl(p) ? p.id !== asset.id : true);
        }
        reportState.setSelectedAssets(arr);
    };

    const isUrl = (asset: Asset | string): asset is string => {
        return typeof asset === "string";
    };

    const onSelectAsset = (asset: Asset | string) => {
        const arr: (Asset | string)[] = [...reportState?.selectedAssets ?? [], asset];
        if (!isUrl(asset))
            reportState?.uploadAsset(asset);
        reportState?.setSelectedAssets(arr);

    };

    const onCancelAsset = (asset: Asset | string) => {
        const arr: (Asset | string)[] = reportState.selectedAssets.filter(p => isUrl(p) || isUrl(asset) ? p !== asset : p.id !== asset.id) ?? [];
        reportState?.setSelectedAssets(arr);
        if (isUrl(asset)) {
            const urls = reportState.uploadedAssets.filter(u => u.url !== asset);
            reportState.setUploadedAssets(urls);
        } else {
            const urls = reportState.uploadedAssets.filter(u => u.assetUri !== asset.uri);
            reportState.setUploadedAssets(urls);
        }
    };

    const uploadedUri = reportState.uploadedAssets.map(x => x.assetUri);
    // #endregion

    const getUploadStatus = (item: Asset | string) => {
        if (isUrl(item) || uploadedUri.includes(item.uri))
            return undefined;
        if (reportState.uploadFailedAssets.includes(item))
            return <View style={[styles.selectedItemUploadStatusContainer, styles.selectedItemUploadFailedContainer]}>
                <Text style={styles.selectedItemUploadStatusText}>Upload failed</Text>
            </View>;
        if (reportState.uploadingAssets.includes(item))
            return <View style={styles.selectedItemUploadStatusContainer}>
                <Text style={styles.selectedItemUploadStatusText}>Uploading</Text>
            </View>;
    };


    return <View style={styles.photosContainer}>
        <AddPhotoButton icon="shangchuanzhaopian" onPress={() => NavigationHelper.goReportPickPhoto()} disabled={!reportState.canAddAsset} />
        <FlatList
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.selectedItemSeparator}></View>}
            horizontal
            data={reportState.selectedAssets}
            renderItem={({ item, index }) => <TouchableOpacity
                key={isUrl(item) ? `url_${index}` : item.id}
                onPress={() => viewer.current?.open(reportState.selectedAssets, item)}
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
            selectedAssets={reportState.selectedAssets}
            onSelectAsset={onSelectAsset}
            onCancelAsset={onCancelAsset}
            onNextPress={() => viewer.current?.close()}
            options={reportState.options}
        />
    </View>;
});