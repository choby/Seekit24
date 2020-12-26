
export default class LeadsApi {
    public static readonly demands: string = `/app/demands`;
    public static readonly comments: string = `/app/demands/{id}/comments`;
    public static readonly userDemands: string = `/app/user/{userId}/demands`;
    public static readonly adsPostRule: string = "/app/user/demands/rule";
}