import { EnumFanState } from "../enums";
import { Interest } from "./Interests";

/**
  * @property `userId` id
  * @property `nickName` 昵称
  * @property `countryCode` 电话区号（+86）
  * @property `phone` 手机号
  * @property `gender` 性别code
  * @property `genderText` 性别
  * @property `avatarUrl` 头像
  * @property `birthdate` 出生日期
  * @property `signature` 个性签名
  * @property `pushTotal` 发布商品数
  * @property `userInterests` 用户兴趣/爱好
  */
export interface User {
  /**
   * id
   */
  "userId": string;
  /**
   * 昵称
   */
  "userName": string;
  /**
   * 电话区号（+86）
   */
  "countryCode": string;
  /**
   * 手机号
   */
  "phone": string;
  /**
   * 性别code
   */
  "gender": number;
  /**
   * 性别
   */
  "genderText": string;
  /**
   * 头像
   */
  "avatarUrl": string;
  /**
   * 出生日期
   */
  "birthdate": string;
  /**
   * 个性签名
   */
  "signature": string;
  /**
   * 发布商品数
   */
  "pushTotal": number;
  /**
   * 用户兴趣/爱好
   */
  "userInterests": Array<Interest>;
  fansState?: EnumFanState;
  region: {
    province: {
      id: number;
      cnName: string;
      enName: string;
      khName: string;
    };
    city: {
      id: number;
      cnName: string;
      enName: string;
      khName: string;
    };
    detailedAddress: string;
  };
  interactiveSwitch?: boolean;
}
