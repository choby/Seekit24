import { Options } from '@/components/MediaPicker';
import { uploadFile } from '@/services/awsS3';
import { EnumMediaType } from '@/types/enums';
import * as ImageManipulator from "expo-image-manipulator";
import * as MediaLibrary from 'expo-media-library';
import { Asset, AssetInfo } from 'expo-media-library';
import { action, computed, observable, runInAction } from 'mobx';



class ReportState {

    constructor() {
        runInAction(() => {
            this.options = new Options();
            this.options.maxSelectQty = 3;
        });
    }



    @observable
    public album?: MediaLibrary.Album = undefined;

    @observable
    public selectedAssets: (Asset | string)[] = [];


    @computed
    public get uploadedAssetsUris() {
        return this.uploadedAssets.slice().map(x => x.assetUri);
    }

    @observable
    public uploadedAssets: {
        assetUri: string;
        url: string;
        key: string;
    }[] = [];

    @observable
    public uploadingAssets: Asset[] = [];

    @observable
    public uploadFailedAssets: Asset[] = [];

    @observable
    public options: Options = new Options();


    @action
    public async uploadAsset(asset: AssetInfo) {
        let fileUri = asset.uri;
        this.addUploadingAssets(asset);
        try {
            if (asset.mediaType === "photo") {
                const image = await ImageManipulator.manipulateAsync(fileUri, undefined, { compress: 1, format: ImageManipulator.SaveFormat.JPEG });
                fileUri = image.uri;
            }
            const result = await uploadFile(asset.mediaType === "photo" ? EnumMediaType.IMAGE : EnumMediaType.VIDEO, fileUri);
            if (this.selectedAssets.some(x => (x as Asset).uri === asset.uri)) {
                if (result && result.thumbnail) {
                    this.addUploadedAssets({
                        assetUri: asset.uri,
                        url: result.thumbnail,
                        key: result.key
                    });
                } else
                    this.addUploadFailedAssets(asset);
            }
        } catch {
            this.addUploadFailedAssets(asset);
        }
    }

    @action
    public setSelectedAssets(assets: (Asset | string)[]) {
        this.selectedAssets = assets;
    }

    @action.bound
    public setUploadedAssets(assetUris: {
        assetUri: string;
        url: string;
        key: string;
    }[]) {
        this.uploadedAssets = [...assetUris];
    }

    @action.bound
    public addUploadedAssets(assetUri: {
        assetUri: string;
        url: string;
        key: string;
    }) {
        this.uploadedAssets = [...this.uploadedAssets.concat([assetUri])];
    }

    @action.bound
    public addUploadingAssets(asset: Asset) {
        this.uploadingAssets = [...this.uploadingAssets.concat(asset)];
    }

    @action.bound
    public addUploadFailedAssets(asset: Asset) {
        this.uploadFailedAssets = [...this.uploadFailedAssets.concat([asset])];
    }

    @action.bound
    changeAlbum(album?: MediaLibrary.Album) {
        this.album = album;
    }

    @computed
    get canAddAsset() {
        return this.uploadedAssets.length < this.options.maxSelectQty;
    }

    @action
    reset() {
        this.album = undefined;
        this.selectedAssets = [];
        this.uploadedAssets = [];

    }
}

export default ReportState;