import { getBaseURL } from "@/apis/baseUrl";
import CommonApi from "@/apis/common";
import SessionApi from "@/apis/session";
import { SessionStorage } from "@/infrastructures/storages";
import { stores } from "@/stores";
import { Session } from "@/types/data/Session";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";

const sessionStorage = new SessionStorage();

export const login = async (phone: string, password?: string, code?: string): Promise<boolean> => {
    const response = await request.get<HttpResponse<Session>>(`${getBaseURL()}${SessionApi.login}`, {
        params: { phone, password, code }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        response.data.timeout = false;
        await sessionStorage.setSession(response.data);
        stores.appState.updateSession(response.data);
        stores.appState.updateUserInfo();
        return true;
    }
    return false;
};


export async function logout(): Promise<boolean> {
    try {
        await request.delete<HttpResponse<Session>>(`${getBaseURL()}${SessionApi.login}`, {});
        await sessionStorage.removeSession();
        stores.appState.updateSession(undefined);
        return true;
    }
    catch {
        return false;
    }
}


export async function refreshToken() {
    const oldToken = (await sessionStorage.getSession())?.accessToken;
    if (!!!oldToken) return;
    const response = await request.get<HttpResponse<Session>>(`${getBaseURL()}${CommonApi.refreshToken}`, {
        params: {
            refreshToken: oldToken
        }
    });
    if (response.code === HttpResponseCode.SUCCESS) {
        await sessionStorage.setSession({
            accessToken: oldToken,
            ...response.data
        });
        stores.appState.updateSession(response.data);
        if (response.data && !response.data.timeout) {
            stores.appState.updateUserInfo();
        }
    }
}

export async function userIsLogin() {
    const session = await sessionStorage.getSession();
    const token = session?.accessToken;
    if (!!!token) return false;
    return !session?.timeout;
}