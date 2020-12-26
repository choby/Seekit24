/**
  * @property `userId` ID
  * @property `nickName` 昵称
  * @property `phone` 手机
  * @property `accessToken` token
  */
export interface Session {
  /**
   * ID
   */
  "userId"?: number;
  /**
   * 昵称
   */
  "nickName"?: string;
  /**
   * token
   */
  "accessToken"?: string;
  timeout: boolean;
}