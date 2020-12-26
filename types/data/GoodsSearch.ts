import { Goods } from "./Goods";

export interface GoodsSearch {
  total: number;
  nextPage: number;
  list: Goods[];
  isLastPage?:boolean;
}








