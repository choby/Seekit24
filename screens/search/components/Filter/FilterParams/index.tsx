import Button from '@/components/Button';
import GoMore from '@/components/GoMore';
import CategorySelectorModal from '@/screens/components/CategorySelectorModal';
import { useStore } from '@/stores';
//import { getBrandConfig } from '@/services/brand';
//import { Brand } from '@/types/data/BrandConfig';
// import _ from "lodash";
//import BrandSelectorModel from '@/screens/components/BrandSelectorModel';
//import ParamSelectorModel from "@/screens/components/ParamSelectorModel";
//import { RelevanceAttribute, Attribute, AttributeValue } from '@/types/data/AttributeConfig';
import { Category } from '@/types/data/CategoryConfig';
//import { searchFilter } from '@/services/goods';
import { EnumSearchReleaseTimeType } from '@/types/enums';
import { observer } from 'mobx-react';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Tag, TagProps } from 'reactive';
import styles from './styles/index';

interface FilterParamsProps {
    onConfirm?: () => void;
}

export default observer(({ onConfirm }: FilterParamsProps) => {
    //const brandSelectorModel = useRef<BrandSelectorModel>(null);
    const categorySelectorModal = useRef<CategorySelectorModal>(null);
    //const paramSelectorModel = useRef<ParamSelectorModel>(null);
    const searchState = useStore("searchState");
    const [selectedReleaseTime, setSelectedReleaseTime] = useState<EnumSearchReleaseTimeType | undefined>(searchState.queryParams.releaseTime);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>(searchState.selectedCategories ?? []);
    // const [selectedBrandId, setSelectedBrandId] = useState<number | undefined>(searchState.queryParams.brandId);
    // const [selectedAttributeValues, setSelectedAttributeValues] = useState<{
    //     [key: number]: AttributeValue;
    // }>(searchState.selectedAttributeValues);

    //#region  方法
    const releaseTimeIsSelected = (value: EnumSearchReleaseTimeType) => {
        return value === selectedReleaseTime;
    };

    const getTagProps = (type: EnumSearchReleaseTimeType) => {
        return {
            style: [styles.paramTag, releaseTimeIsSelected(type) && styles.paramTagSelected],
            textStyle: releaseTimeIsSelected(type) && styles.paramTagTxtSelected
        } as TagProps;
    };

    // const brandIsSelected = (brandId: number) => {
    //     return selectedBrandId === brandId;
    // };

    // const getBrandProps = (brandId: number) => {
    //     return {
    //         style: [styles.paramTag, brandIsSelected(brandId) && styles.paramTagSelected],
    //         textStyle: brandIsSelected(brandId) && styles.paramTagTxtSelected
    //     } as TagProps;
    // };

    const categoryIsSelected = (categoryId: number) => {
        return selectedCategories.map(x => x.categoryId).includes(categoryId);
    };

    const getCategoryProps = (categoryId: number) => {
        return {
            style: [styles.paramTag, categoryIsSelected(categoryId) && styles.paramTagSelected],
            textStyle: categoryIsSelected(categoryId) && styles.paramTagTxtSelected
        } as TagProps;
    };

    const changeSelectReleaseTime = (time: EnumSearchReleaseTimeType) => {
        return time === selectedReleaseTime ? undefined : time;
    };

    const changeSelectCategory = (cate: Category) => {
        return selectedCategories.some(x => x.categoryId === cate.categoryId) ? [] : [cate];
    };

    //#endregion

    //#region 事件
    const onDetermine = () => {
        searchState.setParams("releaseTime", selectedReleaseTime);
        //searchState.setParams("brandId", selectedBrandId);
        if (Array.isArray(selectedCategories) && selectedCategories.length > 0) {
            searchState.setParams("categoryId", selectedCategories[selectedCategories.length - 1]?.categoryId);
        }
        else {
            searchState.setParams("categoryId", undefined);
        }
        searchState.setSelectedCategories(selectedCategories);
        // if (Array.isArray(selectedAttributeValues) && selectedAttributeValues.length > 0) {
        //     searchState.setParams("attrValueIds", Object.values(selectedAttributeValues).map(v => v.attrValId).join(","));
        // }
        // else {
        //     searchState.setParams("attrValueIds", undefined);
        // }
        // searchState.setSelectedAttributeValues(selectedAttributeValues);
        onConfirm?.();
    };

    const onReset = () => {
        searchState.setParams("releaseTime", undefined);
        searchState.setParams("brandId", undefined);
        searchState.setParams("categoryId", undefined);
        searchState.setSelectedCategories([]);
        searchState.setParams("attrValueIds", undefined);
        searchState.setSelectedAttributeValues([]);
        onConfirm?.();
    };
    //#endregion

    return <View style={styles.paramsContainer}>
        <View style={styles.paramCateTitleContainer}>
            <Text style={styles.paramCateTitleText}>
                Release time
            </Text>
        </View>
        <View style={styles.paramCateContentContainer}>
            <TouchableOpacity onPress={() => setSelectedReleaseTime(changeSelectReleaseTime(EnumSearchReleaseTimeType.ONE))}>
                <Tag {...getTagProps(EnumSearchReleaseTimeType.ONE)}>1 Day</Tag>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedReleaseTime(changeSelectReleaseTime(EnumSearchReleaseTimeType.SEVEN))}>
                <Tag {...getTagProps(EnumSearchReleaseTimeType.SEVEN)}>7 Days</Tag>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedReleaseTime(changeSelectReleaseTime(EnumSearchReleaseTimeType.THIRTY))}>
                <Tag {...getTagProps(EnumSearchReleaseTimeType.THIRTY)}>30 Days</Tag>
            </TouchableOpacity>
        </View>

        <View style={styles.paramCateTitleContainer}>
            <Text style={styles.paramCateTitleText}>
                Category screening
            </Text>
            <GoMore onPress={() => categorySelectorModal.current?.open()} text={selectedCategories?.[selectedCategories?.length - 1]?.categoryName} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.paramCateContentContainer}>
            {
                searchState.filterParams.categorys.map(cate => <TouchableOpacity
                    key={`cate_${cate.categoryId}`}
                    onPress={() => setSelectedCategories(changeSelectCategory(cate))}
                >
                    <Tag {...getCategoryProps(cate.categoryId)}>{cate.categoryName}</Tag>
                </TouchableOpacity>)
            }
        </ScrollView>

        {/* <View style={styles.paramCateTitleContainer}>
            <Text style={styles.paramCateTitleText}>
                Brand
            </Text>
            <GoMore onPress={() => brandSelectorModel.current?.open()} />
        </View> */}

        {/* <View style={styles.paramCateContentContainer}>
            {
                _.take(searchState.filterParams.brands, 4).map(brand => <TouchableOpacity
                    key={`brand_${brand.brandId}`}
                    onPress={() => setSelectedBrandId(brand.brandId)}
                >
                    <Tag {...getBrandProps(brand.brandId)}>{brand.brandName}  </Tag>
                </TouchableOpacity>)
            }
        </View> */}

        <View style={styles.paramSubmitContainer}>
            <Button size="lg" style={styles.paramRest} onPress={onReset}>Reset</Button>
            <Button type="primary" size="lg" style={styles.paramDetermine} onPress={onDetermine}>Determine</Button>
        </View>

        <CategorySelectorModal
            ref={categorySelectorModal}
            categories={searchState.filterParams.categoryTree}
            onItemSelected={values => {
                setSelectedCategories(values);
            }}
            selectedids={selectedCategories.map(x => x.categoryId)}
        />
        {/* <BrandSelectorModel
            ref={brandSelectorModel}
            brands={searchState.filterParams.brands}
            onItemSelected={value => setSelectedBrandId(value.brandId)}
            selected={{ brandId: selectedBrandId ?? -1 }}
        />
        <ParamSelectorModel
            ref={paramSelectorModel}
            attributes={searchState.filterParams.attributes}
            relevanceAttributes={searchState.filterParams.relevanceAttributes}
            onItemSelected={values => {
                setSelectedAttributeValues(values);
            }}
            selected={selectedAttributeValues}
        /> */}
    </View>;
});
