import { EnumApiVersion, getBaseURL } from "@/apis/baseUrl";
import LeadsApi from "@/apis/leads";
import { Leads } from "@/types/data/Leads";
import { LeadsComment, LeadsSubComment } from "@/types/data/LeadsComment";
import { PagedList } from "@/types/data/PagedList";
import { EnumLeadsType } from "@/types/enums";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";



type AddLeadsParams = {
    description: string;
    imageUrls: string;
    longitude: number;
    latitude: number;
    detailAddress: string;
    categorys: number[];
} & ({
    /**
     * buying
     */
    typed: EnumLeadsType.BUYING;
} | {
    /**
     * ads
     */
    typed: EnumLeadsType.ADS;
    goodsId: string;
});

export const addLeads: (leads: AddLeadsParams) => Promise<PagedList<Leads> | undefined> = async (leads: AddLeadsParams) => {
    const res = await request.post<HttpResponse<PagedList<Leads>>>(`${getBaseURL(EnumApiVersion["v1.0.2"])}${LeadsApi.demands}`, {
        data: {
            ...leads
        }
    });
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};

export interface LeadsSearchQueryParams {
    keyword?: string,
    categoryId?: number,
    longitude?: number,
    latitude?: number,
    pageNum?: number | string;
    typed?: EnumLeadsType;
}

export const getLeadsList: (params: LeadsSearchQueryParams) => Promise<PagedList<Leads> | undefined> = async (params: LeadsSearchQueryParams) => {
    const res = await request.get<HttpResponse<PagedList<Leads>>>(`${getBaseURL(EnumApiVersion["v1.0.2"])}${LeadsApi.demands}`, {
        params: {
            ...params
        }
    });
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};

export const getLeads: (id: string) => Promise<Leads | undefined> = async (id: string) => {
    const res = await request.get<HttpResponse<Leads>>(`${getBaseURL()}${LeadsApi.demands}/${id}`, {});
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};

export const deleteLeads: (id: string) => Promise<boolean | undefined> = async (id: string) => {
    const res = await request.delete<HttpResponse<never>>(`${getBaseURL()}${LeadsApi.demands}/${id}`, {});

    return res.code === HttpResponseCode.SUCCESS;
};

export const getCommentList: (id: string, pageNum?: number | string) => Promise<PagedList<LeadsComment> | undefined> = async (id: string, pageNum?: number | string) => {
    const res = await request.get<HttpResponse<PagedList<LeadsComment>>>(`${getBaseURL()}${LeadsApi.comments}`.replace("{id}", `${id}`), {
        params: {
            pageNum
        }
    });
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};

export const addComment: (leadId: string, content: string, replyId?: number | string) => Promise<LeadsComment | LeadsSubComment | undefined> = async (leadId: string, content: string, replyId?: number | string) => {
    const res = await request.post<HttpResponse<LeadsComment | LeadsSubComment | undefined>>(`${getBaseURL()}${LeadsApi.comments}`.replace("{id}", `${leadId}`), {
        data: {
            content,
            replyId
        }
    });
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};

interface UserLeadsQueryParams {
    userId: number;
    pageNum?: number | string;
    typed?: EnumLeadsType;
}

export const getUserLeadsList: (params: UserLeadsQueryParams) => Promise<PagedList<Leads> | undefined> = async (params: UserLeadsQueryParams) => {
    const res = await request.get<HttpResponse<PagedList<Leads>>>(`${getBaseURL(EnumApiVersion["v1.0.2"])}${LeadsApi.userDemands}`.replace("{userId}", `${params.userId}`), {
        params: {
            pageNum: params.pageNum,
            typed: params.typed
        }
    });
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};

export const getAdsPostRule: () => Promise<boolean> = async () => {
    const res = await request.get<HttpResponse<unknown>>(`${getBaseURL()}${LeadsApi.adsPostRule}`);
    return res.code === HttpResponseCode.SUCCESS;
};