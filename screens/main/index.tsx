import TabBarItem from "@/components/TabView/TabBarItem";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationState, SceneMap, SceneRendererProps, TabBar, TabView } from 'react-native-tab-view';
import Home from "./home";
import Nearby from "./nearby";
import styles from './styles';

interface TabRoute {
  key: string;
  title: string;
}

enum EnumTabLabel {
  HOME = "HOME",
  NEARBY = "NEARBY"
}

const renderScene = SceneMap({
  [EnumTabLabel.HOME]: Home,
  [EnumTabLabel.NEARBY]: Nearby,
});


const renderTabBar = (props: SceneRendererProps & { navigationState: NavigationState<TabRoute>; }) => <TabBar
  {...props}
  renderIndicator={() => <></>}
  style={[theme.statusBar, styles.tabBar]}
  tabStyle={styles.tab}
  renderTabBarItem={props => {
    return <TabBarItem {...props} />;
  }}
  renderLabel={(sence) => {
    switch (sence.route.key) {
      case EnumTabLabel.HOME:
        return <View style={[styles.tabLabelContainer, sence.focused ? styles.tabLabelContainerFocus : undefined]}>
          <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Home</Text>
        </View>;
      case EnumTabLabel.NEARBY:
        return <View style={[styles.tabLabelContainer, sence.focused ? styles.tabLabelContainerFocus : undefined]}>
          <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Near</Text>
        </View>;
    }
  }}
/>;

export default () => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: EnumTabLabel.HOME, title: EnumTabLabel.HOME },
      { key: EnumTabLabel.NEARBY, title: EnumTabLabel.NEARBY }
    ]
  });
  const navigationState = useStore("navigationState");

  return <><TabView
    navigationState={state}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={(index: number) => {
      setState({ ...state, index });
      navigationState.setHomeFocusTabName(state.routes[index].key);
    }}
    lazy={true}
  />
  </>;
};

