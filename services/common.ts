import { getBaseURL } from "@/apis/baseUrl";
import commonApi from "@/apis/common";
import { Region } from "@/types/data/Region";
import { EnumDevicePlatform } from "@/types/enums";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";

export const getRegions = async (region_code?: string) => {
    const response = await request.get<HttpResponse<Region[]>>(`${getBaseURL()}${commonApi.region}`, {
        params: { region_code }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};

export const postNotificationToken = async (type: EnumDevicePlatform, token: string) => {
    const response = await request.post<HttpResponse<boolean>>(`${getBaseURL()}${commonApi.notificationToken}`, {
        data: { type, deviceToken: token }
    });
    return response.code === HttpResponseCode.SUCCESS;
};