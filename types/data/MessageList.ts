import { EnumMsgReadState, EnumMsgType } from "../enums";


export interface Message {
  readState: EnumMsgReadState;
  msgType: EnumMsgType;
  userName: string;
  userId: number;
  avatarUrl: string;
  msgId: number;
  coverUrl: string;
  objectKey: string;
  createTime: string;
  msgContent: string;
  description?: string;
}



