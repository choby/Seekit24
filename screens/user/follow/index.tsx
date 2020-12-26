import React, { useState, useEffect } from "react";
import { View, Text, } from "react-native";
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import { NavigationBar } from "reactive";
import theme from "@/theme/index";
import IconFont from "@/components/Iconfont";
import styles from "./styles";
import MyFollow from "./myFollow";
import FollowMe from "./followMe";
import { useNavigation } from "@react-navigation/native";
import { getFollows } from "@/services/user";

interface TabRoute {
  key: string;
  title: string;
}

enum PageTab {
  MyFollow = "MyFollow",
  FollowMe = "FollowMe"
}

export default () => {
  const navigation = useNavigation<Navigation>();
  const [data, setData] = useState<{
    myFollowQty: number;
    followMeQty: number;
  }>({
    myFollowQty: 0,
    followMeQty: 0
  });
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: PageTab.MyFollow, title: PageTab.FollowMe },
      { key: PageTab.FollowMe, title: PageTab.FollowMe }]
  });

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    const data = await getFollows("follow");
    if (data) {
      setData({
        myFollowQty: data.followTotal,
        followMeQty: data.followmeTotal
      });
    }
  }


  const renderScene = SceneMap({
    [PageTab.MyFollow]: MyFollow,
    [PageTab.FollowMe]: FollowMe,
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
          case PageTab.MyFollow:
            return <View style={styles.tabLabelContainer}>
              <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>My Follow<Text style={styles.tabLabelQuantity}>{data.myFollowQty}</Text></Text>
            </View>;
          case PageTab.FollowMe:
            return <View style={styles.tabLabelContainer}>
              <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Follow me<Text style={styles.tabLabelQuantity}>{data.followMeQty}</Text></Text>
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



