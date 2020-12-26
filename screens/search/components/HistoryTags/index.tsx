import IconFont from "@/components/Iconfont";
import { useStore } from "@/stores";
import theme from "@/theme";
import { observer } from "mobx-react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Tag } from "reactive";
import styles from "./styles";

interface HistoryTagsProps {
    onSelectKeyword?: (keyword: string) => void;

}

export default observer(({ onSelectKeyword }: HistoryTagsProps) => {

    const searchState = useStore("searchState");
    const tags = searchState.tags;

    return <View>
        <View style={styles.title}>
            <Text style={theme.h3}>Historical Search</Text>
            <TouchableOpacity onPress={() => searchState.clearTags()}>
                <IconFont name="sousuo-qingchu1x" />
            </TouchableOpacity>
        </View>
        <View style={styles.historyTags}>
            {
                tags.map((tag, index) => <TouchableOpacity
                    activeOpacity={1}
                    key={`tag_${index}`}
                    onPress={() => {
                        onSelectKeyword?.(tag);
                    }}>
                    <Tag style={styles.tag} textStyle={styles.tagText} >{tag}</Tag>
                </TouchableOpacity>)
            }
        </View>
    </View>;
});