import { getBaseURL } from "@/apis/baseUrl";
import UserApi from "@/apis/user";
import { User } from "@/types/data/User";
import { UserBlock } from "@/types/data/UserBlocks";
import { UserFollows } from "@/types/data/UserFollows";
import { EnumGender } from "@/types/enums";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";

export const getUserInfo: (userId?: string) => Promise<User | undefined> = async (userId?: string) => {
    const res = await request.get<HttpResponse<User>>(`${getBaseURL()}${UserApi.user}`, {
        params: {
            userId
        }
    });
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};

type FollowType = "follow" | "followme";
export const getFollows: (type: FollowType) => Promise<UserFollows | undefined> = async (type: FollowType) => {
    const response = await request.get<HttpResponse<UserFollows>>(`${getBaseURL()}${UserApi.follows}`, {
        data: { type }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};

export const getBlocks: () => Promise<UserBlock[] | undefined> = async () => {
    const response = await request.get<HttpResponse<UserBlock[]>>(`${getBaseURL()}${UserApi.blocks}`, {
        params: {}
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        return response.data;
    }
    return undefined;
};

export const removeBlack: (id: number) => Promise<boolean> = async (id: number) => {
    const response = await request.delete<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.blocks}`, {
        data: { id }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setNickName: (nickName: string) => Promise<boolean> = async (nickName: string) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.username}`, {
        data: { userName: nickName }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setBirthDate: (birthDate: string) => Promise<boolean> = async (birthDate: string) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.birthdate}`, {
        data: { birthDate }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setGender: (gender: EnumGender) => Promise<boolean> = async (gender: EnumGender) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.gender}`, {
        data: { gender }
    });
    return response.code === HttpResponseCode.SUCCESS;
};


export const sendPhoneCode: (phone: string, unique: boolean) => Promise<boolean> = async (phone: string, unique: boolean) => {
    const response = await request.get<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.phoneCode}`, {
        params: { phone, sendCode: true, unique }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setPassword: (phone: string, code: string, password: string) => Promise<boolean> = async (phone: string, code: string, password: string) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.password}`, {
        data: { phone, code, password }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setAvator: (avatarUrl: string) => Promise<boolean> = async (avatarUrl: string) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.avator}`, {
        data: { avatarUrl }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setAddress: (detailedAddress: string) => Promise<boolean> = async (detailedAddress: string) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.address}`, {
        data: { detailedAddress }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setRegion: (provinceId?: number, cityId?: number, districtId?: number) => Promise<boolean> = async (provinceId?: number, cityId?: number, districtId?: number) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.address}`, {
        data: { provinceCode: provinceId, cityCode: cityId, districtCode: districtId }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setSignature: (signature?: string) => Promise<boolean> = async (signature?: string) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.signature}`, {
        data: { signature }
    });
    return response.code === HttpResponseCode.SUCCESS;
};

export const setInteractiveNotice: (open: boolean) => Promise<boolean> = async (open: boolean) => {
    const response = await request.put<HttpResponse<boolean>>(`${getBaseURL()}${UserApi.interactiveNotice}`, {
        data: {
            interactiveSwitch: open ? 1 : 0
        }
    });
    return response.code === HttpResponseCode.SUCCESS;
};