/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import Tip from '@/components/Tip';
import { SessionStorage } from "@/infrastructures/storages";
import NavigationHelper from "@/navigation/helper";
import * as Network from 'expo-network';
import { extend, RequestOptionsInit } from "umi-request";
import { HttpResponse, HttpResponseCode } from "../types/RESTful";

const sessionStorage = new SessionStorage();

const codeMessage = {
    200: "服务器成功返回请求的数据。",
    201: "新建或修改数据成功。",
    202: "一个请求已经进入后台排队（异步任务）。",
    204: "删除数据成功。",
    400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
    401: "用户没有权限（令牌、用户名、密码错误）。",
    403: "用户得到授权，但是访问是被禁止的。",
    404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
    406: "请求的格式不可得。",
    410: "请求的资源被永久删除，且不会再得到的。",
    422: "当创建一个对象时，发生一个验证错误。",
    500: "服务器发生错误，请检查服务器。",
    502: "网关错误。",
    503: "服务不可用，服务器暂时过载或维护。",
    504: "网关超时。",
} as { [index: number]: string; };

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response; }): Response => {
    const { response } = error;
    // 处理response为null的错误，比如失去连接等

    if (!!!response) {
        (async () => {
            const networkState = await Network.getNetworkStateAsync();
            if (!networkState.isConnected)
                Tip.show(Tip.getIconBody({
                    message: "Please check your internet connection",
                    icon: "tishi1x"
                }));
            Tip.show("Network Timeout or Unkown error");
        })();
        return {} as Response;
    }
    if (response && response.status) {
        const errorText = codeMessage[response.status] || response.statusText;
        //const { status, url } = response;
        (async () => {
            const json: HttpResponse<any> = await response.json();
            if (json)
                Tip.show(json.code !== HttpResponseCode.SUCCESS ? json.message : errorText);
        })();
    }
    return response;
};




/**
 * 附加token
 * @param request 
 */
const additionToken = async function (request: {
    url: string;
    options: RequestOptionsInit;
}) {

    request.options.headers = {
        "timestamp": `${new Date().valueOf()}`,
        "X-Access-Token": (await sessionStorage.getSession())?.accessToken ?? "",
    };

    // request.options.data = {
    //     ...request.options.data,

    //     token: await storage.getToken(),
    // }
};



// 统一处理一些code
const responseCodeHandler = function (response: HttpResponse<any>) {

    switch (response.code) {
        case HttpResponseCode.SUCCESS:
            return;
        case HttpResponseCode.UNAUTHORIZED:// 未登录
            NavigationHelper.goLogin();
            return;
        default:
            // 后端通用错误
            Tip.show(response.message);
            break;
    }
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
    //prefix: getBaseURL(),
    errorHandler, // 默认错误处理
    requestType: "form",
    timeout: 10000,//  10s无响应就超时
});

// 中间件
request.use(async (ctx, next) => {
    const { req } = ctx;
    // 为每次请求附加token
    await additionToken(req);

    await next();

    const { res } = ctx as {
        res: HttpResponse<any>;
    };
    // 统一处理code
    responseCodeHandler(res);
});


export default request;
