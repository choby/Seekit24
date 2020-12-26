import { EnumGoodsState } from "../enums";
import { Category } from "./CategoryConfig";
import { User } from "./User";

/**
  * @property `goodsId` ID
  * @property `goodsName` 名称
  * @property `goodsPrice` 价格
  * @property `coverUrls` 视频/图片
  * @property `pushUser` 
  * @property `location` 视频位置
  * @property `master` 是否主人
  */
export interface Goods {
  /**
   * ID
   */
  "goodsId": string;
  /**
   * 名称
   */
  "goodsName": string;
  /**
   * 商品描述
   */
  goodsDescribe: string;
  /**
   * 价格
   */
  "goodsPrice": string;
  /**
   * 封面图
   */
  coverUrl: string;
  /**
   * 视频/图片
   */
  "imageUrls": string[];
  videoUrls: string[];
  "pushUser"?: User;
  /**
   * 视频位置
   */
  "location": string;
  longitude: string;
  latitude: string;
  administrativeRegion1: string;
  administrativeRegion2: string;
  /**
   * 是否主人
   */
  "master": boolean;
  pageViewCount?: number;
  chatCount?: number;
  collectionCount?: number;
  collect: boolean;
  state: EnumGoodsState;
  oldCategorys?: Category[];
}



/**
  * @description 发布者信息
  * @property `userId` ID
  * @property `nickName` 昵称
  * @property `gender` 性别
  * @property `genderText` 性别
  * @property `avatarUrl` 头像
  * @property `pushTotal` 发布数
  * @property `location` 位置
  * @property `fansState` 关系
  * @property `fansStateText` 与发布者关系
  */




