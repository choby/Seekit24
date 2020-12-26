import { EnumFollowState, EnumGender } from "../enums";

export interface UserFollows {
    followTotal: number;
    followmeTotal: number;
    pageInfo: UserFollowPageInfo;
}

export interface UserFollowPageInfo {
    total: number;
    list: UserFollowItem[];
    pageNum: number;
    pageSize: number;

    size: number;

    startRow: number;

    endRow: number;

    pages: number;

    prePage: number;

    nextPage: number;

    isFirstPage: boolean;

    isLastPage: boolean;

    hasPreviousPage: boolean;

    hasNextPage: boolean;

    navigatePages: number;

    navigatepageNums: number[];


    navigateFirstPage: number;

    navigateLastPage: number;
}

export interface UserFollowItem {
    followId: number;
    formUser: number;

    toUser: number;

    createTime: string;

    nickName: string;

    avatarUrl: string;

    signature?: string;

    state: EnumFollowState;

    stateText: string;
    pushTotal: number;
    gender: EnumGender;

}