import { Options } from '@/components/MediaPicker';
import { Pages } from '@/navigation/pages';
import { uploadFile } from '@/services/awsS3';
import { searchDetails } from '@/services/googleMapService';
import { Brand } from '@/types/data/BrandConfig';
import { Category } from '@/types/data/CategoryConfig';
import { Goods } from '@/types/data/Goods';
import { EnumMediaType } from '@/types/enums';
import * as MediaLibrary from 'expo-media-library';
import { Asset } from 'expo-media-library';
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

    @observable
    public attributes: {
        attrId: number;
        attrValueId: number;
        attrValueName: string;
    }[] = observable.array([]);

    @observable
    public goodsId?: string;

    @observable
    public brand?: Brand;

    @observable
    public categories: Category[] = observable.array([]);

    @observable
    public title?: string;

    @observable
    public describe?: string;

    @observable
    public price?: string;

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

    @action
    public async uploadAsset(asset: Asset) {
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

    @action.bound
    setPrice(price?: string) {
        this.price = price;
    }

    @action
    setTitle(title?: string) {
        this.title = title;
    }

    @action
    setCategories(categories?: Category[]) {
        this.categories = observable.array(categories);
    }

    @action
    setBrand(brand?: Brand) {
        this.brand = brand;
    }

    @action
    setAttributes(attributes?: {
        attrId: number;
        attrValueId: number;
        attrValueName: string;
    }[]) {
        this.attributes = observable.array(attributes);
    }

    @action
    setDescribe(describe: string) {
        this.describe = describe;
    }

    @action
    setGoodsId(goodsId?: string) {
        this.goodsId = goodsId;
    }

    @action
    setGoods(goods: Goods) {
        this.setGoodsId(goods.goodsId);
        this.setTitle(goods.goodsName);
        this.setDescribe(goods.goodsDescribe);
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
        this.setLocation({
            name: goods.location,
            longitude: Number(goods.longitude),
            latitude: Number(goods.latitude),
            administrativeRegion1: goods.administrativeRegion1,
            administrativeRegion2: goods.administrativeRegion2
        });
        this.setPrice(goods.goodsPrice);
        this.setSelectedAssets(goods.imageUrls);
        this.setUploadedAssets(goods.imageUrls.map(image => ({ url: image, assetUri: "", key: image })));
    }

    @action
    setBackPage(page?: Pages) {
        this.backPage = page;
    }

    @action
    reset() {
        this.attributes = observable.array([]);
        this.brand = undefined;
        this.categories = [];
        this.title = undefined;
        this.describe = undefined;
        this.price = undefined;
        this.place = {} as Place;
        this.album = undefined;
        this.selectedAssets = [];
        this.uploadedAssets = [];
        this.goodsId = undefined;
        this.backPage = undefined;
    }

    @computed
    get canAddAsset() {
        return this.uploadedAssets.length < this.options.maxSelectQty;
    }
}

export default PublishState;