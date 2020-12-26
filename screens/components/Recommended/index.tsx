import LinearGradient from "@/components/LinearGradient";
import GoodsFalls from "@/screens/components/GoodsFalls";
import theme from "@/theme";
import { Goods } from "@/types/data/Goods";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface RecommendedProps {
    data: Goods[];
    title?: string | false;
}

function recommended(props: RecommendedProps) {
    const { data, title } = props;
    return <View style={[styles.background, theme.paddingHorizontal]}>
        <LinearGradient></LinearGradient>
        <View>
            {
                title !== false && <Text style={styles.recTitle}>
                    {title && title}
                    {!!!title && "Recommended"}
                </Text>
            }
        </View>
        <View style={styles.recContainer}>
            <GoodsFalls data={data} />
        </View>
    </View>;
}

export default recommended;