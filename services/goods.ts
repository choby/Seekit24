import { getBaseURL } from "@/apis/baseUrl";
import GoodsApi from "@/apis/goods";
import { Comment, SubComment } from "@/types/data/Comment";
import { Goods } from "@/types/data/Goods";
import { GoodsRecommend } from "@/types/data/GoodsRecommend";
import { GoodsRecords } from "@/types/data/GoodsRecords";
import { GoodsRecordsDateline } from "@/types/data/GoodsRecordsDateline";
import { GoodsSearch } from "@/types/data/GoodsSearch";
import { GoodsSearchFilter } from "@/types/data/GoodsSearchFilter";
import { PagedList } from "@/types/data/PagedList";
import { EnumGoodsState, EnumRecordType, EnumSearchReleaseTimeType, EnumSearchSortType } from "@/types/enums";
import { HttpResponse, HttpResponseCode, PageableQuery } from "@/types/RESTful";
import request from "@/utils/request";

export async function add(goods: {
    goodsId?: string;
    goodsName?: string;
    goodsPrice?: string;
    imageUrls?: string;
    goodsDescribe?: string;
    categorys?: number[];
    attrJson?: any[];
    brandId?: number;
    countryCode?: number;
    provinceCode?: number;
    cityCode?: number;
    districtCode?: number;
    detailedAddress?: string;
    longitude?: number;
    latitude?: number;
    attributes?: {
        attrId: number;
        attrValueId: number;
    }[];
    administrativeRegion1?: string;
    administrativeRegion2?: string;
    showStatus?: EnumGoodsState;
}): Promise<Goods | undefined> {
    const response = await request<HttpResponse<Goods>>(`${getBaseURL()}${GoodsApi.goods}`, {
        method: goods.goodsId ? "PUT" : "POST", //编辑和新增
        data: { ...goods }
    });
    if (response.code === HttpResponseCode.SUCCESS)
        return response.data;
}

export async function get(goodsId: string, type: "show" | "config"): Promise<Goods | undefined> {
    const response = await request.get<HttpResponse<Goods>>(`${getBaseURL()}${GoodsApi.goods}`, {
        params: {
            goodsId, type
        }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
}

export async function getComments({
    pageNum,
    goodsId
}: PageableQuery<{
    goodsId: string;
}>): Promise<PagedList<Comment> | undefined> {
    const response = await request.get<HttpResponse<PagedList<Comment>>>(`${getBaseURL()}${GoodsApi.comments}`, {
        params: {
            goodsId,
            pageNum
        }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
}

export async function sendComment(goodsId: string, content: string, replyId: number = 0): Promise<Comment | SubComment | void> {
    const response = await request.post<HttpResponse<SubComment>>(`${getBaseURL()}${GoodsApi.comments}`, {
        data: { goodsId, content, replyId }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
}

export async function getRecords(type: EnumRecordType, dateline?: string): Promise<GoodsRecords | undefined> {
    const response = await request.get<HttpResponse<GoodsRecords>>(`${getBaseURL()}${GoodsApi.records}`, {
        params: { type, dateline }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
}

type DatelineType = Exclude<EnumRecordType, EnumRecordType.COLLECTION>;
export const getDatelines: (type: DatelineType) => Promise<GoodsRecordsDateline[] | undefined> = async (type: DatelineType) => {
    const response = await request.get<HttpResponse<GoodsRecordsDateline[]>>(`${getBaseURL()}${GoodsApi.dateline}`, {
        params: { type }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};

type RecommendType = "index" | "near" | "guess" | "new";
type RecommendQueryParams = PageableQuery<{
    cityCode?: string;
    countryCode?: string;
} & ({
    type: Exclude<RecommendType, "guess" | "near">;
} | {
    type: Exclude<RecommendType, "guess" | "index" | "new">;
    location: string;
} | {
    type: Exclude<RecommendType, Exclude<RecommendType, "guess">>;
    goodsId: string;
})>;
export const getRecommend: (params: RecommendQueryParams) => Promise<GoodsRecommend | undefined> = async (params: RecommendQueryParams) => {
    const response = await request.get<HttpResponse<GoodsRecommend>>(`${getBaseURL()}${GoodsApi.recommend}`, {
        params: params
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};


export interface SearchQueryParams {
    keyword?: string;
    categoryId?: number;
    /**
     * 属性值id,多个属性值逗号分隔
     */
    attrValueIds?: string;
    brandId?: number;
    releaseTime?: EnumSearchReleaseTimeType;
    price?: string;
    cityCode?: string;
    location?: string;
    sort?: EnumSearchSortType;
}

export const searchGoods: (params: PageableQuery<SearchQueryParams>) => Promise<GoodsSearch | undefined> = async (params: PageableQuery<SearchQueryParams>) => {
    const response = await request.get<HttpResponse<GoodsSearch>>(`${getBaseURL()}${GoodsApi.search}`, {
        params: { ...params }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};

export const searchFilter: (keyword?: string, categoryId?: number) => Promise<GoodsSearchFilter | undefined> = async (keyword?: string, categoryId?: number) => {
    const response = await request.get<HttpResponse<GoodsSearchFilter>>(`${getBaseURL()}${GoodsApi.searchFilter}`, {
        params: { keyword, categoryId }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};

/**
 * 
 * @param states 状态 ()多个状态逗号组合查询 如 1,2,3
1草稿、 
2待发布、 
3已上架、 
4已下架、  
5已删除
 * @param userId 
 */
export const getUserGoodsList: (states: string, pageNum?: number | string, userId?: string) => Promise<PagedList<Goods> | undefined> = async (states: string, pageNum?: number | string, userId?: string) => {
    const response = await request.get<HttpResponse<PagedList<Goods>>>(`${getBaseURL()}${GoodsApi.userGoodsList}`, {
        params: { states, userId, pageNum }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};


export const setGoodsState: (goodsId: string, type: "onshelf" | "offshelf" | "del") => Promise<boolean> = async (goodsId: string, type: "onshelf" | "offshelf" | "del") => {
    const response = await request.delete<HttpResponse<never>>(`${getBaseURL()}${GoodsApi.goods}`, {
        params: { goodsId, type }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const collect: (goodsId: string) => Promise<boolean> = async (goodsId: string) => {
    const response = await request.post<HttpResponse<never>>(`${getBaseURL()}${GoodsApi.records}`, {
        data: { goodsId }
    });
    return response.code === HttpResponseCode.SUCCESS;
};