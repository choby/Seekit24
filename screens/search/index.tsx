import Input from "@/components/Input";
import { Pages } from "@/navigation/pages";
import theme from "@/theme/index";
import { Color } from "@/theme/variables";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { NavigationBar } from "reactive";
import HistoryTags from "./components/HistoryTags";
import GoodsResult from './goods';
import styles from './styles/index';

export interface SearchRouteParams {
    keyword?: string;
    categoryId?: number;
}


export default () => {
    const navigation = useNavigation();
    const route = useRoute<Route<Pages.Search>>();
    const [keyword, setKeyword] = useState<string | undefined>(route.params?.keyword);
    const [showGoodsResult, setShowGoodsResult] = useState(route.params?.categoryId !== undefined || route.params?.keyword !== undefined);
    return <View style={[theme.statusBar, theme.screenView]}>
        <View style={theme.navigationBar}>
            <NavigationBar
                //onPressBack={() => navigation.goBack()}
                backLabel={false}
                titleContainer={<Input
                    style={styles.inputContainer}
                    focusingStyle={styles.inputContainerFocusing}
                    inputStyle={styles.inputStyle}
                    focusingInputStyle={styles.focusingInputStyle}
                    value={keyword}
                    placeholder="Please input keyword"
                    // prefix={<DropdownPicker
                    //     defaultValue={1}
                    //     items={[{ label: "goods", value: 1 }, { label: "user", value: 2 }]}
                    //     multiple={false}
                    //     placeholder={"选择"}
                    //     style={styles.pickerStyle}
                    //     dropDownStyle={styles.pickerDropdownStyle}
                    // />}

                    onChange={value => setKeyword(value)}
                    onSubmitEditing={() => setShowGoodsResult(true)}
                />}
                forwardLabel={<Text style={{ color: Color.SECONDARY_2 }} onPress={() => navigation.goBack()}>Cancel</Text>}
                style={{ zIndex: 1 }}
            />
        </View>
        <View style={[theme.screenView]}>
            {
                !showGoodsResult && <View style={theme.paddingHorizontal}><HistoryTags onSelectKeyword={keyword => {
                    setKeyword(keyword);
                    setShowGoodsResult(true);
                }} /></View>
            }
            {
                showGoodsResult && <GoodsResult keyword={keyword} categoryId={route.params?.categoryId} />
            }
        </View>
    </View>;
};


