import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import PlaceHolder from "@/components/Placeholder";
import SwitchSelector from "@/components/SwitchSelector";
import Tip from '@/components/Tip';
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from "@/navigation/pages";
import CategorySelectorModal from "@/screens/components/CategorySelectorModal";
import InfoList, { InfoItem } from "@/screens/components/InfoList";
import { addLeads, getAdsPostRule } from "@/services/leads";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { EnumLeadsType } from "@/types/enums";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StackActions, useNavigation, useRoute } from "@react-navigation/native";
import { Asset } from "expo-media-library";
import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, ScrollView, StatusBar, Text, View } from "react-native";
import { NavigationBar } from "reactive";
import GoodsDescribe from "./components/LeadsDescribe";
import GoodsLocation from "./components/LeadsLocation";
import LeadsMediaUploadList from "./components/LeadsMediaUploadList";
import LeadsRelevance from "./components/LeadsRelevance";
import ImageTips from "./components/LeadsRelevance/imageTips";
import LeadsRelevanceModal from "./components/LeadsRelevance/modal";
import styles from "./styles/confirm";



export type LeadsPublishConfirmRouteParams = {
    backPage?: Pages;
};

export default observer(() => {

    const navigation = useNavigation<Navigation>();
    const categorySelectorModal = useRef<CategorySelectorModal>(null);
    const leadsRelevanceModal = useRef<LeadsRelevanceModal>(null);
    const publishState = useStore("leadsPublishState");
    const [postType, setPostType] = useState(EnumLeadsType.BUYING);
    const route = useRoute<Route<Pages.LeadsPublishConfirm>>();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const [canPostAds, setCanPostAds] = useState(true);
    const [publishing, setPublishing] = useState(false);

    useNetworkEffect(() => {
        publishState.setBackPage(route.params?.backPage);
    }, true);

    useEffect(() => {
        return () => StatusBar.setBarStyle("dark-content");
    }, []);

    const infoItems: InfoItem[] = [{
        label: "Categories",
        value: publishState.categories?.map(c => c.categoryName).join("/"),
        onPress: () => categorySelectorModal.current?.open()
    }];


    const isUrl = (asset: Asset | string): asset is string => {
        return typeof asset === "string";
    };
    const isAsset = (asset: Asset | string): asset is Asset => {
        return typeof asset !== "string";
    };

    const hasNoLocalImage = () => {
        return publishState.selectedAssets.every(p => isUrl(p));
    };

    //#region 数据实体校验
    const allFieldIsNotEmpty = () => {
        const selectedUris = publishState.selectedAssets.filter<Asset>(isAsset).map(asset => asset.uri);
        const uploadUris = publishState.uploadedAssetsUris.filter(uri => selectedUris.includes(uri)).distinct();
        if (selectedUris.length !== uploadUris.length) {
            Tip.show("There are still pictures being uploaded, please wait for the pictures to be uploaded");
            return false;
        }
        if (!!!publishState.description?.trim()) {
            Tip.show("Please input goods describe");
            return false;
        }
        return true;
    };



    const getNewLeadsEntiy = () => {
        const uploadedUri = publishState.uploadedAssets.map(x => x.url.split("?")[0]).join(",");
        return {
            imageUrls: uploadedUri,
            description: publishState.description!.trim(),
            categorys: publishState.categories?.map(c => c.categoryId) ?? [],
            typed: postType,
            goodsId: publishState.goods?.goodsId!,
            // countryCode: 0,
            // provinceCode: 0,
            // cityCode: 0,
            // districtCode: 0,
            detailAddress: publishState.place.name,
            longitude: publishState.place.longitude,
            latitude: publishState.place.latitude,
            administrativeRegion1: publishState.place.administrativeRegion1,
            administrativeRegion2: publishState.place.administrativeRegion2,
        };
    };

    const checkAdsPostRule = async () => {
        const canPost = await getAdsPostRule();
        setCanPostAds(canPost);
    };
    //#endregion

    //#region 保存
    //发布
    const publish = async () => {
        if (publishing || !canPostAds || !allFieldIsNotEmpty()) return;
        setPublishing(true);
        const result = await addLeads(getNewLeadsEntiy());
        if (result) {
            Tip.show("Saved successfully");
            goBack();
        }
        setPublishing(false);
    };

    //#endregion

    //#region 按钮功能
    const goBack = () => {
        if (publishState.backPage) {
            if (publishState.backPage === Pages.LeadsIndex)
                navigation.navigate(publishState.backPage, { reload: true });
            else
                navigation.navigate(publishState.backPage);
        }
        else
            navigation.dispatch(StackActions.popToTop());
        publishState.reset();
    };

    const changePostType = (value: EnumLeadsType) => {
        setPostType(value);
        if (value === EnumLeadsType.BUYING) {
            setCanPostAds(true);

        } else {
            checkAdsPostRule();
        }
    };

    //#endregion
    const options = [
        { label: "Buying", value: EnumLeadsType.BUYING },
        { label: "Ads", value: EnumLeadsType.ADS },
    ];
    const selectedCategories = publishState.categories.map(x => x.categoryId);

    return <>
        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <ImageBackground source={require("@/assets/images/leadsPostBackground.png")} style={styles.imageBackground} />
            <StatusBar barStyle="light-content" />
            <ScrollView
                style={[theme.statusBar, { height: pixelRatio.screenSize.height }]}
                contentContainerStyle={{ flex: 1 }}
                scrollEnabled={false} keyboardShouldPersistTaps="never">
                <View style={theme.paddingHorizontal}>
                    <NavigationBar
                        backLabel={<IconFont name="yemianguanbi-bai1x" size={22} />}
                        onPressBack={goBack}
                        titleContainer={false}
                        forwardLabel={<Button disabled={publishing || !canPostAds} type="primary" size="md" style={styles.buttonContainer} textStyle={styles.buutonText} underlayColor={Color.WHITE}>Publish</Button>}
                        onPressForward={() => { publish(); }}
                        style={styles.navigationBar}
                    />
                </View>

                <View style={[theme.screenView, styles.content]}>
                    <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                        <View style={[styles.titleContainer, theme.paddingHorizontal]}>
                            <Text style={styles.pageTitle}>Post</Text>
                            <SwitchSelector
                                options={options}
                                initial={0}
                                buttonMargin={3}
                                selectedColor={Color.PRIMARY}
                                buttonColor={Color.WHITE}
                                buttonBorderWidth={1}
                                buttonBorderColor={Color.PRIMARY}
                                backgroundColor={Color.SEARCHBACK}
                                borderColor={Color.PRIMARY}
                                textColor={Color.SECONDARY_4}
                                textStyle={{ fontFamily: FontFamily.MEDIUM, fontSize: FontSize.TEXT_SIZE_4 }}
                                selectedButtonStyle={{}}
                                selectedTextStyle={{ fontFamily: FontFamily.MEDIUM, fontSize: FontSize.TEXT_SIZE_4 }}
                                style={{ width: getLogicPixel(156) }}
                                onPress={changePostType}
                                height={32}
                                animationDuration={175}
                            />
                        </View>
                        {
                            postType === EnumLeadsType.ADS && <LeadsRelevance
                                goods={publishState.goods}
                                onPress={() => leadsRelevanceModal.current?.open()}
                                onCancel={() => publishState.setGoods(undefined)}
                                canPost={canPostAds}
                            />
                        }

                        <View style={theme.paddingHorizontal}>
                            <GoodsDescribe />
                            <LeadsMediaUploadList />
                            {
                                postType === EnumLeadsType.ADS && hasNoLocalImage() && <ImageTips />
                            }
                            <GoodsLocation />
                            {
                                postType === EnumLeadsType.BUYING && <InfoList style={styles.listContainer} items={infoItems} />
                            }
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
            {
                postType === EnumLeadsType.BUYING && <CategorySelectorModal
                    selectedids={selectedCategories}
                    ref={categorySelectorModal}
                    onItemSelected={values => publishState.setCategories(values)}
                />
            }
            {
                postType === EnumLeadsType.ADS && <LeadsRelevanceModal ref={leadsRelevanceModal} onItemSelected={goods => publishState.setGoods(goods)} />
            }
        </PlaceHolder.NoNetworkView>
    </>;
});



