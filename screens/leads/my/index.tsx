import IconFont from "@/components/Iconfont";
import TabBarItem from "@/components/TabView/TabBarItem";
import theme from "@/theme/index";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationState, SceneMap, SceneRendererProps, TabBar, TabView } from "react-native-tab-view";
import { NavigationBar } from "reactive";
import Ads from './ads';
import Buying from './buying';
import styles from "./styles";

interface TabRoute {
    key: string;
    title: string;
}

enum PageTab {
    Buying = "Buying",
    Ads = "Ads"
}

export default () => {
    const navigation = useNavigation<Navigation>();
    const [state, setState] = useState({
        index: 0,
        routes: [
            { key: PageTab.Buying, title: PageTab.Buying },
            { key: PageTab.Ads, title: PageTab.Ads }]
    });


    const renderScene = SceneMap({
        [PageTab.Buying]: Buying,
        [PageTab.Ads]: Ads,
    });

    const renderTabBar = (props: SceneRendererProps & {
        navigationState: NavigationState<TabRoute>;
    }) => {
        //TODO: tab的样式需要调整
        return <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={[styles.tabBar]}
            tabStyle={styles.tab}
            renderTabBarItem={props => {
                return <TabBarItem {...props} />;
            }}
            renderLabel={(sence) => {
                switch (sence.route.key) {
                    case PageTab.Buying:
                        return <View style={styles.tabLabelContainer}>
                            <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Buying</Text>
                        </View>;
                    case PageTab.Ads:
                        return <View style={styles.tabLabelContainer}>
                            <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Ads</Text>
                        </View>;
                }
            }}

        />;
    };

    return <View style={[theme.screenView]}>
        <View style={[theme.statusBar]}></View>
        <View style={theme.navigationBar}>
            <NavigationBar
                backLabel={<IconFont name="fanhui-heise1x" />}
                onPressBack={() => navigation.goBack()}
                titleContainer={false}
                style={{ zIndex: 1 }}
            />
        </View>
        <TabView
            navigationState={state}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={(index: number) => {
                setState({
                    ...state,
                    index
                });
            }}
            lazy={true}
        />

    </View>;
};



