import { getBaseURL } from "@/apis/baseUrl";
import MessageApi from "@/apis/message";
import { Message } from "@/types/data/MessageList";
import { PagedList } from "@/types/data/PagedList";
import { EnumMsgReadState, EnumMsgType } from "@/types/enums";
import { HttpResponse, HttpResponseCode } from "@/types/RESTful";
import request from "@/utils/request";


export const getMessageList: (msgType: EnumMsgType, pageNum?: number | string) => Promise<PagedList<Message> | undefined> = async (msgType: EnumMsgType, pageNum?: number | string) => {
    const res = await request.get<HttpResponse<PagedList<Message>>>(`${getBaseURL()}${MessageApi.messages}`, {
        params: {
            msgType,
            pageNum
        }
    });
    if (res.code === HttpResponseCode.SUCCESS)
        return res.data;
};


export const deleteMessage: (messageId: number) => Promise<boolean | undefined> = async (messageId: number) => {
    const res = await request.delete<HttpResponse<never>>(`${getBaseURL()}${MessageApi.message}`.replace("{id}", `${messageId}`), {});
    return res.code === HttpResponseCode.SUCCESS;
};

export const updateMessageState: (messageId: number, state: EnumMsgReadState) => Promise<boolean | undefined> = async (messageId: number, state: EnumMsgReadState) => {
    const res = await request.put<HttpResponse<never>>(`${getBaseURL()}${MessageApi.message}`.replace("{id}", `${messageId}`), {
        data: {
            readState: state
        }
    });
    return res.code === HttpResponseCode.SUCCESS;
};
