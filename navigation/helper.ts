import AnimationBase from "@/components/animations/animationBase";
import { LoadingScrollView } from "@/components/animations/Loading";
import { UserInfoStorage } from "@/infrastructures/storages";
import { debounce, SystemUtils, Verification } from "@/utils";
import { EventConsumer, NavigationContainerEventMap, NavigationHelpers, NavigationState, PartialState, Route } from "@react-navigation/native";
import type { PageParamsList } from "./pages";
import { Pages } from "./pages";


declare type NavigationContainerRef = NavigationHelpers<PageParamsList<Pages>> & EventConsumer<NavigationContainerEventMap> & {
    /**
     * Reset the navigation state of the root navigator to the provided state.
     *
     * @param state Navigation state object.
     */
    resetRoot(state?: PartialState<NavigationState> | NavigationState): void;
    /**
     * Get the rehydrated navigation state of the navigation tree.
     */
    getRootState(): NavigationState;
    /**
     * Get the currently focused navigation route.
     */
    getCurrentRoute(): Route<string> | undefined;
    /**
     * Get the currently focused route's options.
     */
    getCurrentOptions(): any | undefined;
    push(name: string, params?: Record<string, unknown> | undefined): void;
};

export default class NavigationHelper {
    public static Navigation: NavigationContainerRef;
    public static HomeScrollView?: LoadingScrollView | null;
    public static NearbyScrollView?: LoadingScrollView | null;
    public static HomeButtonAnimation?: AnimationBase | null;


    public static goLogin = debounce(async () => {
        const current = NavigationHelper.Navigation.getCurrentRoute();
        const userInfoStorage = new UserInfoStorage();
        const user = await userInfoStorage.getUserInfo();
        if (user
            && user.phone
            && Verification.phoneIsValid(user.phone)) {
            NavigationHelper.Navigation.push(Pages.LoginByPassword, { prevRoute: current });
            return;
        }
        NavigationHelper.Navigation.push(Pages.LoginByPhone, { prevRoute: current });
    });
    public static goPublish = async (goodsId?: string, backPage?: Pages) => {
        await SystemUtils.permissions.checkCameraRoll();
        NavigationHelper.Navigation.navigate(Pages.GoodsPublish, { id: goodsId, backPage });
    };
    public static goPostLeads = async (backPage?: Pages) => {
        NavigationHelper.Navigation.navigate(Pages.LeadsPublishConfirm, { backPage });
    };
    public static goPostLeadsPickPhoto = async () => {
        await SystemUtils.permissions.checkCameraRoll();
        NavigationHelper.Navigation.navigate(Pages.LeadsPublish, {});
    };
    public static goReportPickPhoto = async () => {
        await SystemUtils.permissions.checkCameraRoll();
        NavigationHelper.Navigation.navigate(Pages.ReportScreenshot, {});
    };
    public static goGoodsDetail = async (goodsId: string) => {
        NavigationHelper.Navigation.navigate(Pages.GoodsDetail, { id: goodsId });
    };
    public static goSelectSinglePhoto = async () => {
        await SystemUtils.permissions.checkCameraRoll();
        NavigationHelper.Navigation.navigate(Pages.UserInfoSelectPhoto);
    };
    public static goTakeSinglePhoto = async () => {
        await SystemUtils.permissions.checkCamera();
        NavigationHelper.Navigation.navigate(Pages.UserInfoTakePhoto);
    };
}

