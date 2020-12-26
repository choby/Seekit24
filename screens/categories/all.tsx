import DotIndicator from "@/components/DotIndicator";
import PlaceHolder from "@/components/Placeholder";
import SearchInput from "@/components/SearchInput";
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from "@/navigation/pages";
import { getCategoryConfig } from "@/services/category";
import theme from "@/theme/index";
import { Color } from "@/theme/variables";
import { Category, CategoryConfig } from "@/types/data/CategoryConfig";
import { getLogicPixel } from "@/utils/pixelRatio";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Longlist, NavigationBar } from "reactive";
import styles from "./styles/all";

export default () => {
    const navigation = useNavigation<Navigation>();
    const [categoryConfig, setCategoryConfig] = useState<CategoryConfig>({ categoryData: [], expandNodes: [] });
    const [activeCategory, setActiveCategory] = useState<Category>({} as Category);
    const [keyword, setKeyword] = useState<string>();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();

    useNetworkEffect(() => {
        refresh();
    }, true);

    const refresh = async () => {
        if (!isConnected) return;
        const data = await getCategoryConfig();
        if (data) {
            setCategoryConfig(data);
            setActiveCategory(data.categoryData[0]);
        }
    };

    return <View style={[theme.statusBar, theme.screenView]}>
        <View style={{ ...theme.container, flex: 0 }}>
            <NavigationBar
                backLabel={false}
                onPressBack={() => navigation.goBack()}
                titleContainer={<SearchInput
                    value={keyword}
                    onChange={value => setKeyword(value)}
                    onSubmitEditing={() => keyword && navigation.navigate(Pages.Search, { keyword })}
                />}
                forwardLabel={<Text style={{ color: Color.SECONDARY_2 }} onPress={() => navigation.goBack()}>Cancel</Text>}
                style={{ zIndex: 1 }}
            />
        </View>
        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <View style={[styles.container]}>
                <View style={styles.cateList}>
                    <Longlist
                        renderFooter={() => <></>}
                        renderItem={({ item }: { item: Category, index: number; }) => <TouchableOpacity
                            activeOpacity={1}
                            style={[styles.cateItem, activeCategory.categoryId === item.categoryId && styles.cateItemActive]}
                            key={`cate_${item.categoryId}`}
                            onPress={() => setActiveCategory(item)}
                        >
                            {
                                activeCategory.categoryId === item.categoryId && <DotIndicator />
                            }
                            <Text style={[styles.cateItemText, activeCategory.categoryId === item.categoryId && styles.cateItemTextActive]}>{item.categoryName}</Text>
                        </TouchableOpacity>}
                        data={categoryConfig.categoryData}
                        total={categoryConfig.categoryData.length}

                    />

                    {/* <View style={styles.cateListWhite}></View> */}
                </View>
                <ScrollView style={styles.goodsList}>
                    {
                        Array.isArray(activeCategory.children) && activeCategory.children.map(cate => <View key={`cate_${cate.categoryId}`}>
                            <View style={styles.goodsListCateNameContainer}>
                                <TouchableOpacity style={styles.goodsListCateName} onPress={() => navigation.navigate(Pages.Search, { categoryId: cate.categoryId })}>
                                    <Text>{cate.categoryName}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.goodsItemContainer} >
                                {
                                    Array.isArray(cate.children) && cate.children.map((child, index) => <TouchableOpacity
                                        style={[styles.goodsItem, index % 3 === 2 ? undefined : { marginRight: getLogicPixel(10) }]} key={`cate_${child.categoryId}`}
                                        onPress={() => navigation.navigate(Pages.Search, { categoryId: child.categoryId })}
                                    >
                                        <Image style={styles.goodsImage} source={{ uri: child.iconImage }} width={getLogicPixel(70)} height={getLogicPixel(70)} resizeMethod="scale" resizeMode="center" />
                                        <Text style={styles.goodsName}>{child.categoryName}</Text>
                                    </TouchableOpacity>)
                                }
                            </View>
                        </View>)
                    }
                </ScrollView>
            </View>
        </PlaceHolder.NoNetworkView>
    </View >;
};




