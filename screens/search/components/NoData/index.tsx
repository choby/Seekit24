import IconFont from "@/components/Iconfont";
import { getRecommend } from "@/services/goods";
import theme from "@/theme";
import { GoodsRecommend } from "@/types/data/GoodsRecommend";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Recommended from "../../../components/Recommended";
import styles from "./styles";

export default () => {
    const [recommendData, setRecommendData] = useState<GoodsRecommend>({ list: [] });

    useEffect(() => {
        refreshRecommend();
    }, []);

    const refreshRecommend = async () => {
        if (recommendData.isLastPage) return;
        const data = await getRecommend({ type: "index", pageNum: recommendData.nextPage });
        if (data) {
            setRecommendData({
                ...data,
                list: recommendData.list.concat(data.list)
            });
        }
    };


    return <>
        <View style={styles.placeholder}>
            <Image source={require("@/assets/images/blank_nosearchdata.png")} />
        </View>
        <View style={[styles.noDataContainer, theme.paddingHorizontal]}>
            <IconFont name="tishi1x" size={20} />
            <Text style={styles.noDataText}>
                No related products have been found, I have recommended some products that you may like
        </Text>
        </View>
        <Recommended data={recommendData.list} title={false} />
    </>;
};