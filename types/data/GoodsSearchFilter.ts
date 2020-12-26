import type { RelevanceAttribute, Attribute } from "./AttributeConfig";
import { Category } from "./CategoryConfig";

export interface GoodsSearchFilter {
  defaultAttribute: {
    relevanceAttributes: RelevanceAttribute[];
    attributes: Attribute[];
  };
  categorys: Category[];
  categoryTree: Category[];
}








