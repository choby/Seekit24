import { getBaseURL } from "@/apis/baseUrl";
import categoryApi from "@/apis/category";
import { CategoryConfig } from "@/types/data/CategoryConfig";
import { CategoryRule } from "@/types/data/CategoryRule";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";

export async function getCategoryConfig(): Promise<CategoryConfig | undefined> {
    const response = await request.get<HttpResponse<CategoryConfig>>(`${getBaseURL()}${categoryApi.config}`);
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
}


export async function getCategoryRules(type: "index" | "near"): Promise<CategoryRule[] | undefined> {
    const response = await request.get<HttpResponse<CategoryRule[]>>(`${getBaseURL()}${categoryApi.rule}`, {
        params: { type }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
}
