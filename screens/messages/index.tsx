import TabBarItem from "@/components/TabView/TabBarItem";
import theme from "@/theme/index";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationState, SceneMap, SceneRendererProps, TabBar, TabView } from "react-native-tab-view";
import Commodity from './goods';
import Demand from './leads';
import styles from "./styles";

interface TabRoute {
    key: string;
    title: string;
}

enum PageTab {
    Product = "Product",
    Leads = "Leads"
}

export default () => {
    const [state, setState] = useState({
        index: 0,
        routes: [
            { key: PageTab.Product, title: PageTab.Product },
            { key: PageTab.Leads, title: PageTab.Leads }]
    });


    const renderScene = SceneMap({
        [PageTab.Product]: Commodity,
        [PageTab.Leads]: Demand,
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
                    case PageTab.Product:
                        return <View style={styles.tabLabelContainer}>
                            <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Goods</Text>
                        </View>;
                    case PageTab.Leads:
                        return <View style={styles.tabLabelContainer}>
                            <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Leads</Text>
                        </View>;
                }
            }}

        />;
    };

    return <View style={[theme.screenView]}>
        <View style={[theme.statusBar]}></View>
        <View style={theme.paddingHorizontal}>
            <View style={[styles.pageTitleContainer]}>
                <Text style={styles.pageTitle}>Message</Text>
            </View>
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



