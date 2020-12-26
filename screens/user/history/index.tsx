import React, { useState } from "react";
import { View, Text, } from "react-native";
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import { NavigationBar } from "reactive";
import theme from "@/theme/index";
import IconFont from "@/components/Iconfont";
import styles from "./styles";
import myBrowsing from "./myBrowsing";
import MyMessage from "./myMessage";
import { useNavigation } from "@react-navigation/native";

interface TabRoute {
  key: string;
  title: string;
}

export default () => {
  const navigation = useNavigation<Navigation>();
  const [state, setState] = useState({
    index: 1,
    routes: [
      { key: 'myBrowsing', title: 'MyBrowsing' },
      { key: 'myMessage', title: 'MyMessage' }]
  });
  const renderScene = SceneMap({
    myBrowsing: myBrowsing,
    myMessage: MyMessage,
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
      renderLabel={(sence) => {
        switch (sence.route.key) {
          case "myBrowsing":
            return <View style={styles.tabLabelContainer}>
              <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>My Browsing<Text style={styles.tabLabelQuantity}>4</Text></Text>
            </View>;
          case "myMessage":
            return <View style={styles.tabLabelContainer}>
              <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>My Message<Text style={styles.tabLabelQuantity}>4</Text></Text>
            </View>;
        }
      }}

    />
  };

  return <View style={[theme.statusBar, theme.screenView]}>
    <View style={[theme.container, { flex: 0 }]}>
      <NavigationBar
        backLabel={<IconFont name="fanhui-heise1x" />}
        onPressBack={() => navigation.goBack()}
        titleContainer={false}
        forwardLabel={<Text>Empty</Text>}
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
        })
      }}
      lazy={true}
    />


  </View>;
}



