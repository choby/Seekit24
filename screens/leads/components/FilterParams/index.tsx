import Button from '@/components/Button';
import GoMore from '@/components/GoMore';
import CategorySelectorModal from '@/screens/components/CategorySelectorModal';
import { useStore } from '@/stores';
import { Category } from '@/types/data/CategoryConfig';
import { EnumLeadsSort, EnumLeadsType } from '@/types/enums';
import { SystemUtils } from "@/utils";
import { observer } from 'mobx-react';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Tag, TagProps } from 'reactive';
import styles from './styles/index';

interface FilterParamsProps {
    onConfirm?: () => void;
}

export default observer(({ onConfirm }: FilterParamsProps) => {
    const categorySelectorModal = useRef<CategorySelectorModal>(null);
    const searchState = useStore("leadsSearchState");
    const [sort, setSort] = useState<EnumLeadsSort | undefined>(searchState.queryParams.sort);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>(searchState.selectedCategories ?? []);
    const [type, setType] = useState<EnumLeadsType | undefined>(searchState.queryParams.typed);

    //#region  方法
    const sortIsSelected = (value: EnumLeadsSort) => {
        return value === sort;
    };

    const getSortProps = (type: EnumLeadsSort) => {
        return {
            style: [styles.paramTag, sortIsSelected(type) && styles.paramTagSelected],
            textStyle: sortIsSelected(type) && styles.paramTagTxtSelected
        } as TagProps;
    };

    const changeSort = async (value: EnumLeadsSort) => {
        if (value === EnumLeadsSort.NEAR) {
            const permission = await SystemUtils.permissions.checkLocation();
            if (permission !== "granted")
                return undefined;
        }
        return sort === value ? undefined : value;
    };

    const typeIsSelected = (value: number) => {
        return type === value;
    };

    const getTypeProps = (value: number) => {
        return {
            style: [styles.paramTag, typeIsSelected(value) && styles.paramTagSelected],
            textStyle: typeIsSelected(value) && styles.paramTagTxtSelected
        } as TagProps;
    };

    const changeType = (value: EnumLeadsType) => {
        return type === value ? undefined : value;
    };
    //#endregion

    //#region 事件
    const onDetermine = () => {
        searchState.setParams("sort", sort);
        searchState.setParams("typed", type);
        if (Array.isArray(selectedCategories) && selectedCategories.length > 0) {
            searchState.setParams("categoryId", selectedCategories[selectedCategories.length - 1]?.categoryId);
        }
        else {
            searchState.setParams("categoryId", undefined);
        }
        searchState.setSelectedCategories(selectedCategories);

        onConfirm?.();
    };

    const onReset = () => {
        searchState.setParams("sort", undefined);
        searchState.setParams("categoryId", undefined);
        searchState.setSelectedCategories([]);
        onConfirm?.();
    };
    //#endregion

    return <View style={styles.paramsContainer}>
        <View style={styles.paramCateTitleContainer}>
            <Text style={styles.paramCateTitleText}>
                Sort
            </Text>
        </View>
        <View style={styles.paramCateContentContainer}>
            <TouchableOpacity onPress={async () => setSort(await changeSort(EnumLeadsSort.NEAR))}>
                <Tag {...getSortProps(EnumLeadsSort.NEAR)}>Nearest to me</Tag>
            </TouchableOpacity>
        </View>

        <View style={styles.paramCateTitleContainer}>
            <Text style={styles.paramCateTitleText}>
                Leads
            </Text>
        </View>

        <View style={styles.paramCateContentContainer}>
            <TouchableOpacity onPress={() => setType(changeType(EnumLeadsType.BUYING))}                >
                <Tag {...getTypeProps(EnumLeadsType.BUYING)}>Buying</Tag>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setType(changeType(EnumLeadsType.ADS))}                >
                <Tag {...getTypeProps(EnumLeadsType.ADS)}>Ads</Tag>
            </TouchableOpacity>
        </View>

        <View style={styles.paramCateTitleContainer}>
            <Text style={styles.paramCateTitleText}>
                Category screening
            </Text>
            <GoMore onPress={() => categorySelectorModal.current?.open()} text={selectedCategories?.[selectedCategories?.length - 1]?.categoryName} />
        </View>


        <View style={styles.paramSubmitContainer}>
            <Button size="lg" style={styles.paramRest} onPress={onReset}>Reset</Button>
            <Button type="primary" size="lg" style={styles.paramDetermine} onPress={onDetermine}>Determine</Button>
        </View>

        <CategorySelectorModal
            ref={categorySelectorModal}
            onItemSelected={values => {

                setSelectedCategories(values);

            }}
            selectedids={selectedCategories.map(x => x.categoryId)}
        />

    </View>;
});
