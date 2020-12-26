/**
  * 通用分页列表
  * @property `[pageNum]` 
  * @property `[pageSize]` 
  * @property `[size]` 
  * @property `[startRow]` 
  * @property `[endRow]` 
  * @property `[total]` 
  * @property `[pages]` 
  * @property `[list]` 
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
export interface PagedList<T> {
  pageNum?: number | string;
  pageSize?: number;
  size?: number;
  startRow?: number;
  endRow?: number;
  total: number;
  pages?: number;
  list: Array<T>;
  firstPage?: number;
  prePage?: number;
  nextPage?: number | string;
  lastPage?: number;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  navigatePages?: number;
  navigatepageNums?: Array<number>;
}




