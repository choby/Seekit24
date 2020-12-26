export type HttpResponse<T> = {
    code: HttpResponseCode.SUCCESS;
    data: T;
} | {
    code: HttpResponseCode.FIALED
    | HttpResponseCode.UNAUTHORIZED
    | HttpResponseCode.NOT_FOUND
    | HttpResponseCode.INTERNAL_SERVER_ERROR
    | HttpResponseCode.PARAMETERE_RROR
    | HttpResponseCode.METHOD_NOT_SUPPORT
    | HttpResponseCode.UNKNOW_MEDIA_TYPE
    | HttpResponseCode.DATA_ERROR
    | HttpResponseCode.SYSTEM_BUSY;
    message: string;
};

export enum HttpResponseCode {
    SUCCESS = 0,
    /**
     * 业务失败
     */
    FIALED = -1,
    /**
     * 未授权
     */
    UNAUTHORIZED = 401,
    /**
     * 接口不存在
     */
    NOT_FOUND = 404,
    /**
     * 服务器未知错误
     */
    INTERNAL_SERVER_ERROR = 500,
    /**
     * 参数验证失败
     */
    PARAMETERE_RROR = 100001,
    /**
     * 不支持的请求方法
     */
    METHOD_NOT_SUPPORT = 100002,
    /**
     * 不支持的媒体类型
     */
    UNKNOW_MEDIA_TYPE = 100003,
    /**
     * 请求数据非法
     */
    DATA_ERROR = 100004,
    /**
     * 系统繁忙
     */
    SYSTEM_BUSY = 100005
}

export type PageableQuery<T> = {
    pageNum?: number | string;
} & T;