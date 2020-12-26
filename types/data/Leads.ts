import { EnumLeadsType } from "../enums";
import { Goods } from "./Goods";
import { LeadsComment } from "./LeadsComment";

export type Leads = {
    demandId: string;
    description: string;
    images: string[];
    createTime: string;
    userId: string;
    userName: string;
    avatarUrl: string;
    detailAddress: string;
    commentCount: number;
    hotComments?: LeadsComment[];
} & ({
    typed: EnumLeadsType.BUYING;
} | {
    typed: EnumLeadsType.ADS;
    goodsInfo: Goods;
});
