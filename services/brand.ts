import { getBaseURL } from "@/apis/baseUrl";
import brandApi from "@/apis/brand";
import { BrandConfig } from "@/types/data/BrandConfig";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";

export async function getBrandConfig(categoryId: number): Promise<BrandConfig | undefined> {
    const response = await request.get<HttpResponse<BrandConfig>>(`${getBaseURL()}${brandApi.config}`, { data: { categoryId } });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
}
