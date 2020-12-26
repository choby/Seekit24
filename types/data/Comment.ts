
/**
  * @property `id` ID
  * @property `userId` 留言用户ID
  * @property `nickName` 留言用户昵称
  * @property `avatarUrl` 留言用户头像
  * @property `[replyId]` 
  * @property `[parentId]` 
  * @property `createTime` 留言时间
  * @property `master` 是否楼主
  * @property `content` 留言内容
  * @property `goodsId` 商品ID
  * @property `subComments` 回复集合
  * @property `showDelete` 是否显示删除按钮
  */
export interface Comment {
  /**
   * ID
   */
  "id": number;
  /**
   * 留言用户ID
   */
  "userId": number;
  /**
   * 留言用户昵称
   */
  "userName": string;
  /**
   * 留言用户头像
   */
  "avatarUrl": string;
  "replyId": 0;
  "parentId"?: number;
  /**
   * 留言时间
   */
  "createTime": string;
  /**
   * 是否楼主
   */
  "master": number;
  /**
   * 留言内容
   */
  "content": string;
  /**
   * 商品ID
   */
  "goodsId": number;
  /**
   * 回复集合
   */
  "subComments": Array<SubComment>;
  /**
   * 是否显示删除按钮
   */
  "showDelete": boolean;
}



/**
  * @description 二级留言
  * @property `id` ID
  * @property `userId` 回复用户ID
  * @property `nickName` 昵称
  * @property `avatarUrl` 头像
  * @property `replyNickName` 被回复用户昵称
  * @property `replyAvatarUrl` 被回复用户头像
  * @property `replyUserId` 被回复用户ID
  * @property `createTime` 回复时间
  * @property `master` 是否楼主
  * @property `content` 内容
  * @property `showDelete` 是否显示删除按钮
  */
export interface SubComment {
  /**
   * ID
   */
  "id": number;
  /**
   * 回复用户ID
   */
  "userId": number;
  /**
   * 昵称
   */
  "userName": string;
  /**
   * 头像
   */
  "avatarUrl": string;
  replyId: number;
  /**
   * 被回复用户昵称
   */
  "replyUserName": string;
  /**
   * 被回复用户头像
   */
  "replyAvatarUrl": string;
  /**
   * 被回复用户ID
   */
  "replyUserId": number;
  /**
   * 回复时间
   */
  "createTime": string;
  /**
   * 是否楼主
   */
  "master": boolean;
  /**
   * 内容
   */
  "content": string;
  /**
   * 是否显示删除按钮
   */
  "showDelete": boolean;
}
