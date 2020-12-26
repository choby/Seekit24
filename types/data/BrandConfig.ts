/**
  * @property `skip` 品牌是否跳过
  * @property `list` 
  * @property `attribute` 是否还有其他属性
  */
 export interface BrandConfig {
    /**
     * 品牌是否跳过
     */
    "skipBrand": boolean;
    currentBrand:string;

    brands: Array<Brand>;
    /**
     * 是否还有其他属性
     */
    "attribute": boolean;
  }

  /**
  * @property `[brandId]` ID
  * @property `[brandLogo]` logo
  * @property `[brandName]` 中
  * @property `[brandNameEn]` 英
  * @property `[brandNameKh]` 柬
  */
export interface Brand {
    /**
     * ID
     */
    brandId: number;
    /**
     * logo
     */
    "brandLogo"?: string;
    /**
     * 中
     */
    "brandName"?: string;
    /**
     * 英
     */
    "brandNameEn"?: string;
    /**
     * 柬
     */
    "brandNameKh"?: string;
  }
  
  