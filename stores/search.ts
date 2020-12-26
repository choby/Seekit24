import { SearchTagsStorage } from '@/infrastructures/storages';
import { searchFilter, SearchQueryParams } from "@/services/goods";
import { Attribute, AttributeValue, RelevanceAttribute } from '@/types/data/AttributeConfig';
import { Brand } from '@/types/data/BrandConfig';
import { Category } from '@/types/data/CategoryConfig';
import { Region } from '@/types/data/Region';
import { action, observable, runInAction } from 'mobx';

const searchTagsStorage = new SearchTagsStorage();

export type SearchQueryParamsType = Omit<SearchQueryParams, "keyword">;
interface FilterParamsType {
    relevanceAttributes: RelevanceAttribute[];
    attributes: Attribute[];
    categorys: Category[];
    brands: Brand[];
    categoryTree: Category[];
}

interface SelectedAttributeValues {
    [key: number]: AttributeValue;
}

class SearchState {
    /**
     *
     */
    constructor() {
        (async () => {
            const tags = await searchTagsStorage.getTags();
            runInAction(() => {
                this.tags = tags;
            });
        })();

    }
    @observable
    queryParams: SearchQueryParamsType = {};

    @observable
    filterParams: FilterParamsType = {
        relevanceAttributes: [],
        attributes: [],
        categorys: [],
        brands: [],
        categoryTree: []
    };

    @observable
    selectedRegion: {
        level1?: Region;
        level2?: Region;
    } = {};

    @observable
    selectedAttributeValues: SelectedAttributeValues = {};

    @observable
    selectedCategories: Category[] = [];

    @observable
    tags: string[] = [];

    @action
    clearParams() {
        this.queryParams = {};
        this.selectedAttributeValues = [];
        this.selectedCategories = [];
        this.selectedRegion = {};
    }

    @action
    setParams<K extends keyof SearchQueryParamsType>(key: K, value: SearchQueryParamsType[K]) {
        this.queryParams[key] = value;
    }

    @action
    async getFilter(keyword?: string, categoryId?: number) {
        if (keyword)
            await searchTagsStorage.addTag(keyword);
        const data = await searchFilter(keyword, categoryId);
        runInAction(async () => {
            if (data) {
                this.filterParams.relevanceAttributes = data.defaultAttribute.relevanceAttributes;
                this.filterParams.attributes = data.defaultAttribute.attributes;
                this.filterParams.categorys = data.categorys;
                this.filterParams.categoryTree = data.categoryTree;
                // if (Array.isArray(data.categorys) && data.categorys.length > 0) {
                //     const brandData = await getBrandConfig(data.categorys[0].categoryId);
                //     runInAction(() => {
                //         if (brandData) {
                //             this.filterParams.brands = brandData.brands;
                //         }
                //     });
                // }
            }
        });
        const tags = await searchTagsStorage.getTags();
        runInAction(() => {
            this.tags = tags;
        });
    }

    @action
    clearTags() {
        searchTagsStorage.clearTags();
        this.tags = [];
    }

    @action
    setSelectedAttributeValues(attributeValues: SelectedAttributeValues) {
        this.selectedAttributeValues = attributeValues;
    }

    @action
    setSelectedCategories(categories: Category[]) {
        this.selectedCategories = categories;
    }

    @action.bound
    setSelectedRegion(regions: {
        level1?: Region;
        level2?: Region;
    }) {
        this.selectedRegion = regions;
    }
}

export default SearchState;