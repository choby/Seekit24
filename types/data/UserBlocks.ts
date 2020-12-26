import { EnumGender } from "../enums";

/**
  * @property `[blackId]` ID
  * @property `[avatarUrl]` 头像
  * @property `[nickName]` 昵称
  */
export interface UserBlock {
  /**
   * ID
   */
  "blackId": number;
  /**
   * 头像
   */
  "avatarUrl"?: string;
  /**
   * 昵称
   */
  "nickName"?: string;
  pushTotal: number;
  gender: EnumGender;
}

