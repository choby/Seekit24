import { EnumGoodsState } from "../enums";

/**
  * @property `key` 时间线
  * @property `total` 总数
  * @property `list` items
  */
export interface GoodsRecordsDateline {
  /**
   * 时间线
   */
  "key": string;
  /**
   * 总数
   */
  "total": number;
  /**
   * items
   */
  "list": Array<GoodsRecordsDatelineItem>;
}

/**
* @property `goodsId` 商品ID
* @property `goodsName` 商品名称
* @property `goodsPrice` 商品价格
* @property `coverUrl` 商品封面
* @property `pageViewCount` 浏览量
* @property `chatCount` 聊天数
* @property `dateline` 时间
*/
export interface GoodsRecordsDatelineItem {
  /**
   * 商品ID
   */
  "goodsId": number;
  /**
   * 商品名称
   */
  "goodsName": string;
  /**
   * 商品价格
   */
  "goodsPrice": number;
  /**
   * 商品封面
   */
  "coverUrl": string;
  /**
   * 浏览量
   */
  "pageViewCount": number;
  /**
   * 聊天数
   */
  "chatCount": number;
  /**
   * 时间
   */
  "dateline": string;
  collectionCount: number;
  state: EnumGoodsState;
}
