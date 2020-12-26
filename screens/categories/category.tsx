import React, { useState } from "react";
import { ScrollView, View, Text, Image, FlatList } from "react-native";
import { NavigationBar } from "reactive";
import theme from "@/theme";
import styles from "./styles/index";
import Ad from "../components/Ad";
import IconFont from "@/components/Iconfont";
import { TabView, SceneMap, SceneRendererProps, NavigationState, TabBar } from "react-native-tab-view";
import GoodsFalls from "@/screens/components/GoodsFalls"
import SearchInput from "@/components/SearchInput";

export interface CategoryRouteParams {
    categoryId: number;
}

interface TabRoute {
    key: string;
    title: string;
}

export default () => {
    const [state, setState] = useState({
        index: 0,
        routes: [
            { key: 'Recommended', title: 'Recommended' },
            { key: 'nearby', title: 'NEARBY' }]
    });


    const renderScene = SceneMap({
        Recommended: () => <GoodsFalls data={[{} as any, {}, {}]} />,
        nearby: () => <></>,
    });

    const renderTabBar = (props: SceneRendererProps & {
        navigationState: NavigationState<TabRoute>;
    }) => {

        return <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={[theme.statusBar, styles.tabBar]}
            tabStyle={styles.tab}
            renderLabel={(sence) => {
                switch (sence.route.key) {
                    case "Recommended":
                        return <View style={[styles.tabLabelContainer, styles.tabLabelContainerLong]}>
                            <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Recommended</Text></View>;
                    case "nearby":
                        return <View style={styles.tabLabelContainer}>
                            <Text style={[styles.tabLabel, ...(sence.focused ? [styles.tabLabelFocus] : [])]}>Near</Text>
                        </View>;
                }
            }}

        />
    };

    return <View style={[theme.statusBar]}>
        <NavigationBar
            backLabel={false}
            titleContainer={<SearchInput style={theme.topSearch}
                prefix={undefined} />}
            forwardLabel={<Text>Cancel</Text>}
            style={{ zIndex: 1 }}
        />
        <ScrollView>
            <View style={theme.container}>
                <View style={styles.cateNameContainer}>
                    <Text style={styles.cateNameText}>Mobile Phone</Text>
                </View>
                <Ad data={[]} />
                <View style={styles.hotBrandsContainer}>
                    <View style={styles.hotBrandsHeadContainer}>
                        <Text style={styles.hotBrandsHeadText}>Hot Brands</Text>
                        <Text style={styles.hotBrandsHeadMore}>All <IconFont size={13} name="lie-jinru1x" /></Text>
                    </View>
                    <View style={styles.hotBrandsLogosContainer}>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                        <View style={styles.hotBrandsItemContainer}>
                            <Image style={styles.hotBrandsItem} source={require("@/assets/icon.png")}
                                width={styles.hotBrandsItem.width}
                                height={styles.hotBrandsItem.height} resizeMethod="resize" resizeMode="contain" />
                        </View>
                    </View>
                </View>
                <View style={styles.hotModelsContainer}>
                    <View style={styles.hotBrandsHeadContainer}>
                        <Text style={styles.hotBrandsHeadText}>Hot Methods</Text>
                        <Text style={styles.hotBrandsHeadMore}>All <IconFont size={13} name="lie-jinru1x" /></Text>
                    </View>
                    <View style={styles.hotModelsListContainer}>
                        <View style={styles.hotModelsItemContainer}>
                            <Image style={styles.hotModelsItemImage}
                                source={require("@/assets/icon.png")}
                                width={styles.hotModelsItemImage.width}
                                height={styles.hotModelsItemImage.height} resizeMethod="resize" resizeMode="contain" />
                            <View style={styles.hotModelsItemDescContainer}>
                                <Text numberOfLines={1} style={styles.hotModelsItemDescTitle}>iPhone X</Text>
                                <Text numberOfLines={1} style={styles.hotModelsItemDescDetail}>87979879sasd</Text>
                            </View>
                        </View>
                        <View style={styles.hotModelsItemContainer}>
                            <Image style={styles.hotModelsItemImage}
                                source={require("@/assets/icon.png")}
                                width={styles.hotModelsItemImage.width}
                                height={styles.hotModelsItemImage.height} resizeMethod="resize" resizeMode="contain" />
                            <View style={styles.hotModelsItemDescContainer}>
                                <Text numberOfLines={1} style={styles.hotModelsItemDescTitle}>iPhone X</Text>
                                <Text numberOfLines={1} style={styles.hotModelsItemDescDetail}>87979879sasd</Text>
                            </View>
                        </View>
                        <View style={styles.hotModelsItemContainer}>

                            <Image style={styles.hotModelsItemImage}
                                source={require("@/assets/icon.png")}
                                width={styles.hotModelsItemImage.width}
                                height={styles.hotModelsItemImage.height} resizeMethod="resize" resizeMode="contain" />


                            <View style={styles.hotModelsItemDescContainer}>
                                <Text numberOfLines={1} style={styles.hotModelsItemDescTitle}>HUAWEI P40 PRO11111111</Text>
                                <Text numberOfLines={1} style={styles.hotModelsItemDescDetail}>87979879sasd</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.hotExcellentContainer}>
                    <View style={styles.hotBrandsHeadContainer}>
                        <Text style={styles.hotBrandsHeadText}>Excellent Business</Text>
                    </View>
                    <FlatList<any> horizontal={true}
                        indicatorStyle="white"
                        data={[{}, {}, {}, {}, {}, {}]}
                        renderItem={() => <View style={styles.hotExcellentItemContainer}>
                            <Image style={styles.hotExcellentItemImage} source={require("@/assets/icon.png")}
                                width={styles.hotExcellentItemImage.width}
                                height={styles.hotExcellentItemImage.height} resizeMethod="resize" resizeMode="contain" />
                            <Text numberOfLines={1} style={styles.hotExcellentItemText}>ale oiioasdf eoioe </Text>
                        </View>}
                    ></FlatList>
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
            </View>
        </ScrollView>
    </View>;
}