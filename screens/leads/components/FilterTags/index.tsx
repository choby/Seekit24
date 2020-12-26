import Button from "@/components/Button";
import Divider from "@/components/Divider";
import { useStore } from "@/stores";
import { EnumLeadsType } from "@/types/enums";
import { getLogicPixel } from "@/utils/pixelRatio";
import { observer } from "mobx-react";
import React from 'react';
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles';

interface FilterTagsProps {
    onChange: () => void;
}

export default observer(({ onChange }: FilterTagsProps) => {
    const searchState = useStore("leadsSearchState");


    const onCancelParam = (key: keyof typeof searchState.queryParams) => {
        searchState.setParams(key, undefined);
        if (key === "categoryId") {
            searchState.setSelectedCategories([]);
        }
        onChange();
    };

    return searchState.hasFilterParams ? <View style={styles.filterParams}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={styles.leftSpacing}></View>
            {
                searchState.queryParams.sort && <Button size="xs"
                    type="primary"
                    style={styles.filterParamsTag}
                    icon="yemianguanbi-bai1x"
                    iconPosition="right"
                    onPress={() => onCancelParam("sort")}
                >Nearest to me &nbsp;</Button>
            }

            {
                searchState.queryParams.typed && <Button size="xs"
                    type="primary"
                    style={styles.filterParamsTag}
                    icon="yemianguanbi-bai1x"
                    iconPosition="right"
                    onPress={() => onCancelParam("typed")}
                >
                    {
                        searchState.queryParams.typed === EnumLeadsType.ADS ? "Ads" : "Buying"
                    }
                    &nbsp;
                </Button>
            }
            {
                searchState.selectedCategories.length > 0 && <Button
                    size="xs"
                    type="primary"
                    style={styles.filterParamsTag}
                    icon="yemianguanbi-bai1x"
                    iconPosition="right"
                    onPress={() => onCancelParam("categoryId")}
                >
                    {searchState.selectedCategories[searchState.selectedCategories.length - 1].categoryNameEn}
                    &nbsp;
                </Button>
            }
        </ScrollView>
    </View> : <Divider height={getLogicPixel(12)} />;
});