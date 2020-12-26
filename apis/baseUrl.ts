import { ConfigHub } from '@/types/apiConfig';
import { SystemUtils } from '@/utils';

export enum EnumApiVersion {
    "v1.0.1" = "v1.0.1",
    "v1.0.2" = "v1.0.2"
}

const hub: ConfigHub = {
    dev: {
        host: "https://yapi.aoidc.net/mock/123",
        version: "v1.0.1"
    },
    //内网测试
    test: {
        host: "http://api1.seekit24.com",//"http://192.168.10.249:30050",
        version: "v1.0.1"
    },
    //外网测试
    staging: {
        host: "https://testapi.seekit24.com",
        version: "v1.0.1"
    },
    prod: {
        host: "https://api.seekit24.com",
        version: "v1.0.1"
    }
};



function getBaseURL(version?: EnumApiVersion) {
    const config = hub[SystemUtils.expoEnv] ?? hub.dev;
    const baseURL = `${config.host}/${version ?? config.version}`;
    return baseURL;
}



export {
    getBaseURL
};
