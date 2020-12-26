import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
// import { Brand } from "@/types/data/BrandConfig";
// import { getBrandConfig } from "@/services/brand";
// import { getAttributeConfig } from "@/services/attribute";
// import { AttributeConfig } from "@/types/data/AttributeConfig";
// import { getCategoryConfig } from "@/services/category";
// import { Category } from "@/types/data/CategoryConfig";
import Modal from "@/components/Modal";
import Tip from '@/components/Tip';
import { Pages } from "@/navigation/pages";
import CategorySelectorModal from "@/screens/components/CategorySelectorModal";
import InfoList, { InfoItem } from "@/screens/components/InfoList";
//import BrandSelectorModal from "@/screens/components/BrandSelectorModel";
//import ParamSelectorModel from "@/screens/components/ParamSelectorModel";
import { add } from "@/services/goods";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { Color } from "@/theme/variables";
import { EnumGoodsState } from "@/types/enums";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Asset } from "expo-media-library";
import { observer } from "mobx-react";
import React, { useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationBar } from "reactive";
import GoodsDescribe from "./components/GoodsDescribe";
import GoodsLocation from "./components/GoodsLocation";
import GoodsMediaUploadList from "./components/GoodsMediaUploadList";
import GoodsName from "./components/GoodsName";
import GoodsPrice from "./components/GoodsPrice";
import styles from "./styles/confirm";


export default observer(() => {
    const navigation = useNavigation<Navigation>();
    const categorySelectorModal = useRef<CategorySelectorModal>(null);
    // const brandSelectorModal = useRef<BrandSelectorModal>(null);
    // const paramSelectorModel = useRef<ParamSelectorModel>(null);
    const publishState = useStore("goodsPublishState");
    const [showPriceInput, setShowPriceInput] = useState(false);
    const [publishing, setPublishing] = useState(false);

    // const [brands, setBrands] = useState<Brand[]>([]);
    // const [attributeConfig, setAttributeConfig] = useState<AttributeConfig>({
    //     attributes: [],
    //     relevanceAttributes: []
    // });

    // useEffect(() => {
    //     if (publishState.categories.length > 0) {
    //         fetchBrands();
    //         fetchAttrs();
    //     }
    // }, [publishState.categories])

    // const fetchBrands = async () => {
    //     const categoryIds = publishState.categories?.map(x => x.categoryId)
    //     const data = await getBrandConfig(categoryIds);
    //     if (data) {
    //         setBrands(data.brands)
    //     }
    // }

    // const fetchAttrs = async () => {
    //     const categoryId = publishState.categories[publishState.categories.length - 1].categoryId;
    //     const data = await getAttributeConfig(categoryId);
    //     if (data) setAttributeConfig(data)
    // }

    const infoItems: InfoItem[] = [{
        label: "Price",
        value: publishState.price ? `$${publishState.price}` : '',
        valuePlaceHolder: "Fill in the price",
        onPress: () => setShowPriceInput(true),
        hasIcon: false
    }, {
        label: "Categories",
        value: publishState.categories?.map(c => c.categoryName).join("/"),
        onPress: () => categorySelectorModal.current?.open(),
    }];

    // if (publishState.categories?.length === 3 && publishState.categories[2].checkBrand) {
    //     infoItems.push({
    //         label: "Brand",
    //         value: publishState.brand?.brandName,
    //         onPress: () => brandSelectorModal.current?.open()
    //     });
    // }

    // const showParams = publishState.brand || (publishState.categories?.length === 3 && publishState.categories[2].skipBrand);
    // if (showParams) {
    //     infoItems.push({
    //         label: "Parameter",
    //         value: publishState.attributes?.map(c => c.attrValueName).join(","),
    //         onPress: () => paramSelectorModel.current?.open()
    //     });
    // }

    // const isUrl = (asset: Asset | string): asset is string => {
    //     return typeof asset === "string";
    // }

    const isAsset = (asset: Asset | string): asset is Asset => {
        return typeof asset !== "string";
    };



    //#region 数据实体校验
    const allFieldIsNotEmpty = () => {
        const selectedUris = publishState.selectedAssets.filter<Asset>(isAsset).map(asset => asset.uri);
        const uploadUris = publishState.uploadedAssetsUris.filter(uri => selectedUris.includes(uri)).distinct();
        if (selectedUris.length !== uploadUris.length) {
            Tip.show("There are still pictures being uploaded, please wait for the pictures to be uploaded");
            return false;
        }

        if (!!!publishState.title?.trim()) {
            Tip.show("Please input goods title");
            return false;
        }

        if (!!!publishState.describe?.trim()) {
            Tip.show("Please input goods describe");
            return false;
        }

        if (publishState.uploadedAssetsUris.length === 0) {
            Tip.show("Please at least upload one photo");
            return false;
        }

        if (!!!publishState.price) {
            Tip.show("Please input goods price");
            return false;
        }
        if (publishState.categories.length === 0) {
            Tip.show("Please select goods categories");
            return false;
        }

        if (publishState.place.latitude === undefined || publishState.place.longitude === undefined) {
            Tip.show("Please select goods location");
            return false;
        }
        return true;
    };

    const allFieldIsEmpty = () => {
        const selectedUris = publishState.selectedAssets.filter<Asset>(isAsset).map(asset => asset.uri);
        const uploadUris = publishState.uploadedAssetsUris.filter(uri => selectedUris.includes(uri));

        return uploadUris.length === 0
            && !!!publishState.title?.trim()
            && !!!publishState.describe?.trim()
            && publishState.uploadedAssetsUris.length === 0
            && !!!publishState.price
            && publishState.categories.length === 0
            && publishState.place.latitude === undefined
            && publishState.place.longitude === undefined;
    };

    const getNewGoodsEntiy = (state: EnumGoodsState) => {
        const uploadedUri = publishState.uploadedAssets.map(x => x.url.split("?")[0]).join(",");
        return {
            goodsId: publishState.goodsId,
            goodsName: publishState.title?.trim(),
            goodsPrice: publishState.price,
            imageUrls: uploadedUri,
            goodsDescribe: publishState.describe?.trim(),
            categorys: publishState.categories?.map(c => c.categoryId) ?? [],
            attrJson: [],
            brandId: publishState.brand?.brandId,
            // countryCode: 0,
            // provinceCode: 0,
            // cityCode: 0,
            // districtCode: 0,
            detailedAddress: publishState.place.name,
            longitude: publishState.place.longitude,
            latitude: publishState.place.latitude,
            attributes: publishState.attributes,
            administrativeRegion1: publishState.place.administrativeRegion1,
            administrativeRegion2: publishState.place.administrativeRegion2,
            showStatus: state
        };
    };
    //#endregion

    //#region 保存
    //发布
    const publish = async (state: EnumGoodsState) => {
        if (publishing || !allFieldIsNotEmpty()) return;
        setPublishing(true);
        const result = await add(getNewGoodsEntiy(state));
        if (result) {
            Tip.show("Saved successfully");
            navigation.navigate(Pages.GoodsPublishSuccess, { goods: result, backPage: publishState.backPage });
            publishState.reset();
        }
        setPublishing(false);
    };
    //存草稿
    const saveToDraft = async () => {
        const result = await add(getNewGoodsEntiy(EnumGoodsState.PENDING_PUBLISH));
        if (result) {
            Tip.show("Saved successfully");
            goBack();
            publishState.reset();
        }
    };
    //#endregion

    //#region 按钮功能
    const goBack = () => {
        if (publishState.backPage) {
            if (publishState.backPage === Pages.GoodsDetail && publishState.goodsId) {
                navigation.navigate(publishState.backPage, { id: publishState.goodsId });
                return;
            }
            navigation.navigate(publishState.backPage);
        }
        else
            navigation.dispatch(StackActions.popToTop());
        publishState.reset();
    };

    const onCancel = async () => {
        if (allFieldIsEmpty() || (publishState.goodsId !== undefined && publishState.goodsId)) {
            goBack();
            publishState.reset();
            return;
        }
        Modal.show({
            title: "Are you sure save to drafts?",
            content: "You have not finished publishing yet, save to the list of things to publish and continue publishing later",
            okText: "Save & Exit",
            cancelText: "Cancel & Exit",
            onCancelPress: () => {
                goBack();
            },
            onOkPress: () => {
                saveToDraft();
            }
        });

    };
    //#endregion

    const selectedCategories = publishState.categories.map(x => x.categoryId);
    return <><ScrollView style={[theme.statusBar, theme.screenView]} scrollEnabled={false} keyboardShouldPersistTaps="never">
        <View style={theme.paddingHorizontal}>
            <NavigationBar
                backLabel={(publishState.goodsId ?? 0 > 0) ? <Text style={{ color: Color.SECONDARY_2 }}>Cancel</Text> : <IconFont name="yemianguanbi-hei1x" size={22} />}
                onPressBack={onCancel}
                titleContainer={false}
                forwardLabel={<Button disabled={publishing} type="primary" size="sm" style={styles.buttonContainer}>Publish</Button>}
                onPressForward={() => { publish(EnumGoodsState.ON_THE_SHELF); }}
                style={{ zIndex: 1 }}
            />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={theme.paddingHorizontal}>
                <Text style={styles.pageTitle}>Release goods</Text>
                <GoodsName />
                <GoodsDescribe />
            </View>
            <GoodsMediaUploadList />
            <View style={theme.paddingHorizontal}>
                <GoodsLocation />
                <InfoList style={styles.listContainer} items={infoItems} />
            </View>
        </ScrollView>

        <CategorySelectorModal
            selectedids={selectedCategories}
            ref={categorySelectorModal}
            onItemSelected={values => publishState.setCategories(values)}
        />
        {
            // publishState.categories?.length === 3 && <BrandSelectorModal
            //     ref={brandSelectorModal}
            //     brands={brands}
            //     onItemSelected={value => publishState.setBrand(value)}
            //     canSkip={publishState.categories[2].skipBrand}
            // />
        }
        {
            // showParams && <ParamSelectorModel ref={paramSelectorModel}
            //     attributes={attributeConfig.attributes}
            //     relevanceAttributes={attributeConfig.relevanceAttributes}
            //     onItemSelected={values => {
            //         publishState.setAttributes(Object.keys(values).map(key => ({
            //             attrId: Number(key),
            //             attrValueId: values[Number(key)].attrValId,
            //             attrValueName: values[Number(key)].valueName
            //         })));
            //     }} />
        }

    </ScrollView>
        {
            showPriceInput && <GoodsPrice
                onSubmitEditing={() => {
                    setShowPriceInput(false);
                }}
                onInputBlur={() => setShowPriceInput(false)}
            />
        }
    </>;
});



