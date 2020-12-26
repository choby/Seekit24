import IconFont from "@/components/Iconfont";
import LeadsIndex from '@/screens/leads';
import Main from "@/screens/main";
import MessageIndex from "@/screens/messages";
import UserIndex from "@/screens/user/";
import { useStore } from '@/stores';
import { SystemUtils } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { withAuthDelegate } from '@/utils/withAuth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { observer } from 'mobx-react';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HomeAnimation from "./components/homeAnimation";
import NavigationHelper from './helper';
import styles from './styles/rootTab';

type RootTabNames = "Home" | "Release" | "Me" | "Leads" | "Message";
export interface RootTabRouteParams {
    screen: RootTabNames;
}
type RootTabsParamsList<K extends RootTabNames> = {
    [P in K]: Record<string, unknown>;
};

const blankComponent = () => <></>;
const Tab = createBottomTabNavigator<RootTabsParamsList<RootTabNames>>();


type TabBarLabel<K extends RootTabNames> = {
    [P in K]: P extends "Home" ? (focused: boolean, tabName: string) => React.ReactElement : (focused: boolean) => React.ReactElement;
};

const tabBarLabels: TabBarLabel<RootTabNames> = {
    Home: (focused: boolean, tabName: string) => {
        const content = <>
            {SystemUtils.isAndroid && focused && <IconFont name="111" size={getLogicPixel(28)} />}
            {SystemUtils.isIos && focused && <HomeAnimation ref={ref => NavigationHelper.HomeButtonAnimation = ref} />}
            {!focused && <IconFont name="11" size={getLogicPixel(28)} />}
            <Text style={[styles.bottomTabsItemName]}>Home</Text>
        </>;

        return focused ? <TouchableOpacity style={styles.bottomTabsItem}
            activeOpacity={1} hitSlop={{
                top: 20,
                left: 20,
                right: 20,
                bottom: 30
            }}
            onPress={focused ? (() => tabName === "HOME" ? NavigationHelper.HomeScrollView?.scrollToTop() : NavigationHelper.NearbyScrollView?.scrollToTop()) : undefined}
        >
            {content}
        </TouchableOpacity> : <View style={styles.bottomTabsItem}>
                {content}
            </View>;
    },
    Leads: (focused: boolean) => <View style={styles.bottomTabsItem}>
        {focused && <IconFont name="qiugouicon21" size={getLogicPixel(28)} />}
        {!focused && <IconFont name="qiugouicon1" size={getLogicPixel(28)} />}
        <Text style={[styles.bottomTabsItemName]}>Leads</Text>
    </View>,
    Release: () => <View style={[styles.bottomTabsItem, styles.bottomTabsItemMiddle]}>
        <View style={styles.bottomTabsItemMiddleIcon}>
            <IconFont name="bianzu9" size={getLogicPixel(27)} />
        </View>
    </View>,
    Message: (focused: boolean) => <View style={styles.bottomTabsItem}>
        {focused && <IconFont name="333" size={getLogicPixel(28)} />}
        {!focused && <IconFont name="33" size={getLogicPixel(28)} />}
        <Text style={[styles.bottomTabsItemName]}>Message</Text>
    </View>,
    Me: (focused: boolean) => <View style={styles.bottomTabsItem}>
        {focused && <IconFont name="444" size={getLogicPixel(28)} />}
        {!focused && <IconFont name="44" size={getLogicPixel(28)} />}
        <Text style={[styles.bottomTabsItemName]}>Me</Text>
    </View>,
};



export default observer(() => {
    const appState = useStore("appState");
    const userIsLogin = appState.userIsLogin;
    const navigationState = useStore("navigationState");
    const tabName = navigationState.homeFocusTabName;
    return <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{ style: styles.bottomTabs }}
        screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => {
                if (route.name === "Home") {
                    return tabBarLabels["Home"](focused, tabName);
                }
                if (route.name === "Release")
                    return <TouchableOpacity activeOpacity={1} onPress={withAuthDelegate(() => NavigationHelper.goPublish())}
                        hitSlop={{ top: 10, left: 10, right: 10, bottom: 20 }}>
                        {tabBarLabels[route.name](focused)}
                    </TouchableOpacity>;
                if (!userIsLogin && route.name === "Me")
                    return <TouchableOpacity activeOpacity={1} onPress={() => NavigationHelper.goLogin()} hitSlop={{ top: 10, left: 10, right: 10, bottom: 20 }}>
                        {tabBarLabels[route.name](false)}
                    </TouchableOpacity>;
                if (!userIsLogin && route.name === "Message")
                    return <TouchableOpacity activeOpacity={1} onPress={() => NavigationHelper.goLogin()} hitSlop={{ top: 10, left: 10, right: 10, bottom: 20 }}>
                        {tabBarLabels[route.name](false)}
                    </TouchableOpacity>;
                //@ts-expect-error
                return tabBarLabels[route.name](focused);
            }
        })}
        lazy
    >
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Leads" component={LeadsIndex} />
        <Tab.Screen name="Release" component={blankComponent} />
        <Tab.Screen name="Message" component={MessageIndex} />
        <Tab.Screen name="Me" component={UserIndex} />
    </Tab.Navigator>;
});