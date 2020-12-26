import Blank from "@/components/Placeholder";
import AllCategories from "@/screens/categories/all";
import Category from "@/screens/categories/category";
import GoodsDetail from "@/screens/goods";
import GoodsPublish from "@/screens/goods/publish";
import GoodsPublishConfirm from "@/screens/goods/publish/confirm";
import GoodsPublishConfirmPlace from "@/screens/goods/publish/confirmPlace";
import GoodsOffTheShelf from "@/screens/goods/publish/offTheShelf";
import GoodsPending from "@/screens/goods/publish/pending";
import GoodsPublished from "@/screens/goods/publish/published";
import GoodsPublishSuccess from "@/screens/goods/publish/success";
import LeadsIndex from '@/screens/leads';
import LeadsDetail from "@/screens/leads/detail";
import LeadsMy from "@/screens/leads/my";
import LeadsPublish from "@/screens/leads/publish";
import LeadsPublishConfirm from "@/screens/leads/publish/confirm";
import LeadsPublishConfirmPlace from "@/screens/leads/publish/confirmPlace";
import LoginByPhone_Code from "@/screens/login/components/verifyCode";
import LoginByPassword from "@/screens/login/password";
import LoginByPhone from "@/screens/login/phone";
import MessageIndex from "@/screens/messages";
import Report from "@/screens/report";
import ReportScreenshot from "@/screens/report/screenshot";
import Search from "@/screens/search";
import SearchGoods from "@/screens/search/goods";
import SearchUser from "@/screens/search/user";
import Setting from "@/screens/setting";
import SettingAbout from "@/screens/setting/about";
import SettingBlackList from "@/screens/setting/blackList";
import SettingLang from "@/screens/setting/lang";
import SettingNotification from "@/screens/setting/notification";
import SettingPermission from "@/screens/setting/permission";
import SettingWebviewPage from "@/screens/setting/webviewPage";
import UserCollection from "@/screens/user/collection";
import UserInfoSelectPhoto from '@/screens/user/components/modifyInfo/ModifyAvator/selectPhoto';
import UserInfoTakePhoto from '@/screens/user/components/modifyInfo/ModifyAvator/takePhoto';
import UserFollow from "@/screens/user/follow";
import UserHistory from "@/screens/user/history";
import UserInfo from "@/screens/user/info";
import UserProfile from "@/screens/user/profile";
import UserRecoverPassword from "@/screens/user/recoverPassword";
import { StoreProvider } from "@/stores";
import { DarkTheme, DefaultTheme, NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import NavigationHelper from './helper';
import { PageParamsList, Pages } from "./pages";
import RootTab from "./rootTab";


const Stack = createStackNavigator<PageParamsList<Pages>>();


export default ({ colorScheme }: { colorScheme: ColorSchemeName; }) => {
    return <StoreProvider>
        <NavigationContainer
            theme={colorScheme !== 'dark' ? DarkTheme : DefaultTheme}
            ref={ref => {
                if (ref) {
                    //@ts-expect-error
                    NavigationHelper.Navigation = ref;
                    NavigationHelper.Navigation.push = (name: string, params?: Record<string, unknown> | undefined) => NavigationHelper.Navigation.dispatch(StackActions.push(name, params));
                }
            }}
        >
            <RootNavigator />
        </NavigationContainer>
    </StoreProvider>;
};

function RootNavigator() {
    return <Stack.Navigator initialRouteName={Pages.RootTab} screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >
        <Stack.Screen name={Pages.RootTab} component={RootTab} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.Blank} component={Blank} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.AllCategories} component={AllCategories} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.Category} component={Category} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.Search} component={Search} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SearchUser} component={SearchUser} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SearchGoods} component={SearchGoods} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.GoodsDetail} component={GoodsDetail} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.GoodsPublish} component={GoodsPublish} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.GoodsPublishConfirm} component={GoodsPublishConfirm} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.GoodsPublishConfirmPlace} component={GoodsPublishConfirmPlace} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.GoodsPublishSuccess} component={GoodsPublishSuccess} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.GoodsPublished} component={GoodsPublished} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.GoodsPending} component={GoodsPending} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.GoodsOffTheShelf} component={GoodsOffTheShelf} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.UserInfo} component={UserInfo} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.UserCollection} component={UserCollection} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.UserFollow} component={UserFollow} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.UserHistory} component={UserHistory} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.MessageIndex} component={MessageIndex} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.UserProfile} component={UserProfile} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.UserRecoverPassword} component={UserRecoverPassword} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.UserInfoSelectPhoto} component={UserInfoSelectPhoto} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.UserInfoTakePhoto} component={UserInfoTakePhoto} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.Setting} component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SettingLang} component={SettingLang} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SettingAbout} component={SettingAbout} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SettingBlackList} component={SettingBlackList} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SettingNotification} component={SettingNotification} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SettingPermission} component={SettingPermission} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.SettingWebviewPage} component={SettingWebviewPage} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.LeadsIndex} component={LeadsIndex} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.LeadsDetail} component={LeadsDetail} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.LeadsPublish} component={LeadsPublish} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.LeadsPublishConfirm} component={LeadsPublishConfirm} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.LeadsPublishConfirmPlace} component={LeadsPublishConfirmPlace} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.LeadsMy} component={LeadsMy} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.Report} component={Report} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.ReportScreenshot} component={ReportScreenshot} options={{ headerShown: false }} />

        <Stack.Screen name={Pages.LoginByPhone} component={LoginByPhone} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.LoginByPassword} component={LoginByPassword} options={{ headerShown: false }} />
        <Stack.Screen name={Pages.LoginByPhone_Code} component={LoginByPhone_Code} options={{ headerShown: false }} />


    </Stack.Navigator>;
}