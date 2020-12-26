import IconFont from "@/components/Iconfont";
import { SeekitImage } from "@/components/SeekitImage";
import { Pages } from "@/navigation/pages";
import { Goods } from "@/types/data/Goods";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface AdProps {
    data: Goods[];
    title?: string;
}

export default ({ data, title }: AdProps) => {
    const navigation = useNavigation<Navigation>();
    return <View style={styles.adBackground2}>

        <ImageBackground
            source={require("@/assets/images/24h_bg.png")}
            resizeMode="cover" resizeMethod="scale"
            style={styles.adBackground1} borderRadius={8}
        >
            <>
                <View style={styles.adTitle}>
                    <IconFont name="CombinedShape" size={35} />
                    <Text style={styles.adTitleText}>{title ?? "New Products"}</Text>
                </View>

                <View style={styles.adListContainer}>
                    {
                        data.map((item, index) => <TouchableOpacity key={`ad_${index}`} activeOpacity={1} onPress={() => navigation.navigate(Pages.GoodsDetail, { id: item.goodsId })}>
                            <View style={styles.adItem}>
                                <View style={styles.adItemImageContainer}>
                                    <SeekitImage style={styles.adItemImage} source={{ uri: item.coverUrl }}
                                        width={styles.adItemImage.width}
                                        height={styles.adItemImage.height}
                                        resizeMethod="resize" resizeMode="cover"
                                    />
                                    <View style={styles.adItemImageShadow}></View>
                                </View>

                                <View style={styles.adItemTitle}>
                                    <Text style={styles.adItemTitleTxtBig} numberOfLines={1}>{item.goodsName}</Text>
                                    <Text style={styles.adItemTitleTxtSmall} numberOfLines={1}>{item.pushUser?.userName}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>)
                    }
                </View>
            </>
        </ImageBackground>
    </View>
        ;
};