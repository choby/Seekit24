import { EnumGoodsState } from "../enums";

/**
  * @property `pageNum` 
  * @property `pageSize` 
  * @property `size` 
  * @property `[startRow]` 
  * @property `[endRow]` 
  * @property `[total]` 
  * @property `[pages]` 
  * @property `list` 
  * @property `[firstPage]` 
  * @property `[prePage]` 
  * @property `[nextPage]` 
  * @property `[lastPage]` 
  * @property `[isFirstPage]` 
  * @property `[isLastPage]` 
  * @property `[hasPreviousPage]` 
  * @property `[hasNextPage]` 
  * @property `[navigatePages]` 
  * @property `[navigatepageNums]` 
  */
export interface GoodsRecords {
  "pageNum": number;
  "pageSize": number;
  "size": number;
  "startRow"?: number;
  "endRow"?: number;
  "total"?: number;
  "pages"?: number;
  "list": Array<GoodsRecordsItem>;
  "firstPage"?: number;
  "prePage"?: number;
  "nextPage"?: number;
  "lastPage"?: number;
  "isFirstPage"?: boolean;
  "isLastPage"?: boolean;
  "hasPreviousPage"?: boolean;
  "hasNextPage"?: boolean;
  "navigatePages"?: number;
  "navigatepageNums"?: Array<number>;
}



/**
  * @property `goodsId` 商品ID
  * @property `goodsName` 商品名称
  * @property `goodsPrice` 商品价格
  * @property `coverUrl` 商品封面
  * @property `pageViewCount` 浏览量
  * @property `chatCount` 想要数量
  * @property `dateline` 操作时间
  */
export interface GoodsRecordsItem {
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
   * 想要数量
   */
  "chatCount": number;
  /**
   * 操作时间
   */
  "dateline": string;
  "collectionCount": number;
  state: EnumGoodsState;
}