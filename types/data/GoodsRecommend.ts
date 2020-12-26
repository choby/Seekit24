import { Goods } from "./Goods";

export interface GoodsRecommend {
  total?: number;
  nextPage?: number;
  list: Goods[];
  isLastPage?: boolean;
}








