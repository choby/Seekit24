import type { CategoryRouteParams } from "@/screens/categories/category";
import type { GoodsRouteParams } from "@/screens/goods";
import type { GoodsPublishIndexRouteParams } from "@/screens/goods/publish";
import type { PublishSuccessRouteParams } from "@/screens/goods/publish/success";
import type { LeadsIndexRouteParams } from "@/screens/leads";
import type { LeadsDetailRouteParams } from "@/screens/leads/detail";
import type { LeadsPublishIndexRouteParams } from "@/screens/leads/publish";
import type { LeadsPublishConfirmRouteParams } from "@/screens/leads/publish/confirm";
import type { LoginByPhone_CodeRouteParams } from "@/screens/login/components/verifyCode";
import type { LoginByPasswordRouteParams } from "@/screens/login/password";
import type { LoginByPhoneRouteParams } from "@/screens/login/phone";
import type { ReportRouteParams } from "@/screens/report";
import type { ReportScreenshotRouteParams } from "@/screens/report/screenshot";
import type { SearchRouteParams } from "@/screens/search";
import type { WebviewRouteParams } from "@/screens/setting/webviewPage";
import type { UserProfileRouteParams } from "@/screens/user/profile";
import type { UserRecoverPasswordParams } from "@/screens/user/recoverPassword";
import type { RootTabRouteParams } from "./rootTab";

export enum Pages {
    RootTab = "RootTab",
    Blank = "Blank",

    AllCategories = "AllCategories",
    Category = "Category",

    Search = "Search",
    SearchUser = "SearchUser",
    SearchGoods = "SearchGoods",

    GoodsPublishConfirmPlace = "GoodsPublishConfirmPlace",
    GoodsDetail = "GoodsDetail",
    GoodsPublish = "GoodsPublish",
    GoodsPublishConfirm = "GoodsPublishConfirm",
    GoodsPublishSuccess = "GoodsPublishSuccess",
    GoodsPublished = "GoodsPublished",
    GoodsPending = "GoodsPending",
    GoodsOffTheShelf = "GoodsOffTheShelf",

    UserInfo = "UserInfo",
    UserCollection = "UserCollection",
    UserFollow = "UserFollow",
    UserHistory = "UserHistory",
    UserProfile = "UserProfile",
    UserRecoverPassword = "UserRecoverPassword",
    UserInfoSelectPhoto = "UserInfoSelectPhoto",
    UserInfoTakePhoto = "UserInfoTakePhoto",

    Setting = "Setting",
    SettingLang = "SettingLang",
    SettingAbout = "SettingAbout",
    SettingBlackList = "SettingBlackList",
    SettingNotification = "SettingNotification",
    SettingPermission = "SettingPermission",
    SettingWebviewPage = "SettingWebviewPage",

    LeadsIndex = "LeadsIndex",
    LeadsDetail = "LeadsDetail",
    LeadsPublish = "LeadsPublish",
    LeadsPublishConfirm = "LeadsPublishConfirm",
    LeadsPublishConfirmPlace = "LeadsPublishConfirmPlace",
    LeadsMy = "LeadsMy",

    MessageIndex = "UserMessageCenter",

    Report = "Report",
    ReportScreenshot = "ReportScreenshot",

    LoginByPhone = "LoginByPhone",
    LoginByPhone_Code = "LoginByPhone_Code",
    LoginByPassword = "LoginByPassword",
}


export type PageParamsList<K extends Pages> = {
    [P in K]: P extends Pages.RootTab ? (RootTabRouteParams | undefined)
    : P extends Pages.GoodsDetail ? GoodsRouteParams
    : P extends Pages.GoodsPublish ? GoodsPublishIndexRouteParams
    : P extends Pages.GoodsPublishSuccess ? PublishSuccessRouteParams
    : P extends Pages.Search ? SearchRouteParams
    : P extends Pages.Category ? CategoryRouteParams
    : P extends Pages.UserProfile ? UserProfileRouteParams
    : P extends Pages.SettingWebviewPage ? WebviewRouteParams
    : P extends Pages.LeadsIndex ? LeadsIndexRouteParams
    : P extends Pages.LeadsDetail ? LeadsDetailRouteParams
    : P extends Pages.LeadsPublish ? LeadsPublishIndexRouteParams
    : P extends Pages.LeadsPublishConfirm ? LeadsPublishConfirmRouteParams
    : P extends Pages.Report ? ReportRouteParams
    : P extends Pages.ReportScreenshot ? ReportScreenshotRouteParams
    : P extends Pages.LoginByPhone ? LoginByPhoneRouteParams
    : P extends Pages.LoginByPhone_Code ? LoginByPhone_CodeRouteParams
    : P extends Pages.LoginByPassword ? LoginByPasswordRouteParams
    : P extends Pages.UserRecoverPassword ? UserRecoverPasswordParams
    : undefined;
};
