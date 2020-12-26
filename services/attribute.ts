import attributeApi from "@/apis/attribute";
import { getBaseURL } from "@/apis/baseUrl";
import { AttributeConfig } from "@/types/data/AttributeConfig";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";


export async function getAttributeConfig(categoryId: number): Promise<AttributeConfig | undefined> {
    const response = await request.get<HttpResponse<AttributeConfig>>(`${getBaseURL()}${attributeApi.config}`, { data: { categoryId } });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
}


