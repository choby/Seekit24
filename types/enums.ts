export enum EnumErrorType {
    NOPERMISSIONS = 1,
    GPSISOFF = 2
}

export enum EnumRecordType {
    HISTORY = 1,
    COLLECTION = 2,
    MESSAGE = 3
}

export enum EnumFollowState {
    FOLLOWING = 1,
    FOLLOWER = 2,
    BOTH = 3
}

export enum EnumGender {
    FEMALE = 0,
    MALE = 1
}

export enum EnumGoodsState {
    DRAFT = 1,
    PENDING_PUBLISH = 2,
    ON_THE_SHELF = 3,
    OFF_THE_SHELF = 4,
    // VIOLATION = 5,
    DELETED = 5,
}

export enum EnumSearchReleaseTimeType {
    ONE = 1,
    SEVEN = 7,
    THIRTY = 30
}

export enum EnumSearchSortType {
    PRICE = 1,
    DISTANCE = 2
}

export enum EnumMediaType {
    IMAGE = "image",
    VIDEO = "video"
}

export enum EnumFanState {
    UnFollow = 1,
    Following = 2,
    BOTH = 3
}

export enum EnumQuoteUri {
    AGREEMENT_EN = "https://dl.aoidc.net/seekit24/agreement_en.html",
    PRIVACYPOLICY_EN = "https://dl.aoidc.net/seekit24/privacy_en.html"
}

export enum EnumMsgType {
    REPLY = 1,
    LEADS = 2
}

export enum EnumMsgReadState {
    UNREAD = 1,
    READED = 2
}


export enum EnumLeadsType {
    BUYING = 1,
    ADS = 2
}

export enum EnumLeadsSort {
    NEAR = 1,
}

export enum EnumBusinessType {
    GOODS = 1,
    LEADS = 2
}

export enum EnumLoginType {
    PASSWORD = 1,
    VERIFICATIONCODE = 2
}

export enum EnumDevicePlatform {
    IOS = 1,
    ANDROID = 2
}