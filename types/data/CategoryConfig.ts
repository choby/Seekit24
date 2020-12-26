
export interface CategoryConfig {
  categoryData: Category[];
  expandNodes: number[];
}
/**
  * @property `id` ID
  * @property `parentId` pid
  * @property `name` 中文名称
  * @property `enName` 英文名称
  * @property `khName` 柬名称
  * @property `image` 图标
  * @property `checkBrand`  是否勾选品牌
  * @property `skipBrand` 是否跳过品牌
  * @property `children` 同上，下级
  */
export interface Category {
  /**
   * ID
   */
  categoryId: number;
  /**
   * pid
   */
  parentId: string;
  /**
   * 中文名称
   */
  categoryName: string;
  /**
   * 英文名称
   */
  categoryNameEn: string;
  /**
   * 柬名称
   */
  categoryNameKh: string;
  /**
   * 图标
   */
  iconImage: string;
  checkBrand: boolean;
  skipBrand: boolean;
  /**
   * 同上，下级
   */
  "children"?: Array<Category>;
}

