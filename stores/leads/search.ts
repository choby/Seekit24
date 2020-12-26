import { LeadsSearchQueryParams } from "@/services/leads";
import { Category } from '@/types/data/CategoryConfig';
import { EnumLeadsSort } from "@/types/enums";
import { action, computed, observable } from 'mobx';


export type SearchQueryParamsType = Omit<LeadsSearchQueryParams, "keyword"> & {
    sort?: EnumLeadsSort;
};
interface FilterParamsType {
    categorys: Category[];
    categoryTree: Category[];
}


class LeadsSearchState {
    constructor() { }

    @observable
    queryParams: SearchQueryParamsType = {};

    @observable
    filterParams: FilterParamsType = {
        categorys: [],
        categoryTree: []
    };

    @observable
    selectedCategories: Category[] = [];

    @observable
    tags: string[] = [];

    @action
    clearParams() {
        this.queryParams = {};
        this.selectedCategories = [];
    }

    @action
    setParams<K extends keyof SearchQueryParamsType>(key: K, value?: SearchQueryParamsType[K]) {
        this.queryParams[key] = value;
    }


    @action
    setSelectedCategories(categories: Category[]) {
        this.selectedCategories = categories;
    }
    @computed
    get hasFilterParams() {
        return this.queryParams.sort || this.queryParams.typed || this.selectedCategories.length > 0;
    }

}

export default LeadsSearchState;