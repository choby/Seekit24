import { Options } from '@/components/MediaPicker';
import { Pages } from '@/navigation/pages';
import { uploadFile } from '@/services/awsS3';
import { get } from "@/services/goods";
import { searchDetails } from '@/services/googleMapService';
import { Category } from '@/types/data/CategoryConfig';
import { Goods } from "@/types/data/Goods";
import { EnumMediaType } from '@/types/enums';
import * as MediaLibrary from 'expo-media-library';
import { Asset, AssetInfo } from 'expo-media-library';
import { action, computed, observable, runInAction } from 'mobx';

interface Place {
    plcaceId?: string;
    name: string;
    longitude: number;
    latitude: number;
    administrativeRegion1?: string;
    administrativeRegion2?: string;
}

class PublishState {

    /**
     *
     */
    constructor() {
        runInAction(() => {
            this.options = new Options();
            this.options.maxSelectQty = 3;
        });
    }



    @observable
    public demandId?: number;



    @observable
    public categories: Category[] = observable.array([]);



    @observable
    public description?: string;



    @observable
    public place: Place = {} as Place;

    @observable
    public album?: MediaLibrary.Album = undefined;

    @observable
    public selectedAssets: (Asset | string)[] = [];

    @observable
    public backPage?: Pages = undefined;

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

    @observable
    public goods?: Goods = undefined;

    @action
    public async uploadAsset(asset: AssetInfo) {
        const fileUri = asset.uri;
        this.addUploadingAssets(asset);
        try {
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

    @action.bound
    setPlace(placeId?: string) {
        this.place.plcaceId = placeId;
        if (!placeId) {
            this.place = {} as Place;
            return;
        }
        searchDetails(placeId, {
            language: "en",
            types: "address",
        }).then(detail => {
            if (!!!detail || detail.status !== "OK") return;
            runInAction(() => {
                this.place = {
                    name: detail.result.name,
                    plcaceId: placeId,
                    longitude: detail.result.geometry.location.lng,
                    latitude: detail.result.geometry.location.lat,
                    administrativeRegion1: detail.result.getAdministrative_Area_Level_1(),
                    administrativeRegion2: detail.result.getAdministrative_Area_Level_2()
                };
            });
        });
    }

    @action.bound
    setLocation({
        name,
        longitude,
        latitude,
        administrativeRegion1,
        administrativeRegion2
    }: {
        name: string;
        longitude: number;
        latitude: number;
        administrativeRegion1: string;
        administrativeRegion2: string;
    }) {

        this.place = {
            name,
            longitude,
            latitude,
            administrativeRegion1,
            administrativeRegion2
        };
    }


    @action
    setCategories(categories?: Category[]) {
        this.categories = observable.array(categories);
    }



    @action
    setDescribe(describe: string) {
        this.description = describe;
    }




    @action
    setBackPage(page?: Pages) {
        this.backPage = page;
    }

    @action
    reset() {
        this.categories = [];
        this.description = undefined;
        this.place = {} as Place;
        this.album = undefined;
        this.selectedAssets = [];
        this.uploadedAssets = [];
        this.demandId = undefined;
        this.backPage = undefined;
        this.setGoods(undefined);
    }

    @action
    async setGoods(g?: Goods) {
        if (!g) {
            this.setCategories([]);
            this.setSelectedAssets(this.selectedAssets.filter(a => typeof a === "string" ? !this.goods?.imageUrls.includes(a) : true));
            this.setUploadedAssets(this.uploadedAssets.filter(a => !this.goods?.imageUrls.includes(a.url)));

            this.goods = undefined;
            return;
        }
        const goods = await get(g.goodsId, "show");
        if (!goods) return;
        runInAction(() => {
            this.goods = goods;
            const categories = [];
            if (goods.oldCategorys?.[0]) {
                categories.push(goods.oldCategorys[0]);
                if (goods.oldCategorys?.[0].children?.[0]) {
                    categories.push(goods.oldCategorys[0].children[0]);
                    if (goods.oldCategorys?.[0].children?.[0].children?.[0]) {
                        categories.push(goods.oldCategorys[0].children[0].children[0]);
                    }
                }


            }
            this.setCategories(categories);

            if (this.selectedAssets.length === 0)
                this.setSelectedAssets(goods.imageUrls.filter((_i, index) => index < 3));
            if (this.uploadedAssets.length === 0)
                this.setUploadedAssets(goods.imageUrls.map(image => ({ url: image, assetUri: "", key: image })).filter((_i, index) => index < 3));
        });

    }

    @computed
    get canAddAsset() {
        return this.uploadedAssets.length < this.options.maxSelectQty;
    }
}

export default PublishState;