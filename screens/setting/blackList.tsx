import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { NavigationBar } from "reactive";
import theme from "@/theme/index";
import IconFont from "@/components/Iconfont";
import styles from "./styles/blackList";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { UserBlock } from "@/types/data/UserBlocks";
import { getBlocks, removeBlack } from "@/services/user";
import { EnumGender } from "@/types/enums";

export default () => {
    const navigation = useNavigation<Navigation>();
    const [blockList, setBlockList] = useState<UserBlock[]>([]);

    useEffect(() => {
        referesh();
    }, []);

    const referesh = async () => {
        const data = await getBlocks();
        if (Array.isArray(data))
            setBlockList(data);
    }

    const onPressRemoveBlack = async (id: number) => {
        const result = await removeBlack(id);
        if (result)
            referesh();
    }

    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            onPressBack={() => navigation.goBack()}
            backLabel={<IconFont name="fanhui-heise1x" />}
            titleContainer={false}
            style={{ zIndex: 1 }}
        />
        <ScrollView>
            <Text style={styles.pageTitle}>Blacklist <Text style={styles.pageTitleQuantity}>{blockList.length}</Text></Text>
            <View style={[styles.container]}>
                {
                    blockList.map(item => <View style={styles.userInfoItemConainer} key={item.blackId}>
                        <Image style={styles.userInfoAvator} source={require("@/assets/icon.png")}
                            width={styles.userInfoAvator.width}
                            height={styles.userInfoAvator.height} resizeMethod="resize" resizeMode="contain" />
                        <View style={styles.userInfoContainer}>
                            <View>
                                <Text numberOfLines={1} style={styles.userInfoNickName}>{item.nickName}</Text>
                            </View>
                            <View>
                                <Text numberOfLines={1} style={styles.userInfoGender}>{item.gender === EnumGender.FEMALE ? "women" : "man"}</Text>
                            </View>
                            <View>
                                <Text numberOfLines={1} style={styles.userInfoStatus}>Release {item.pushTotal} products | men | in Release 5 products | men | in</Text>
                            </View>
                        </View>
                        <Button type="secondary" size="sm" onPress={() => onPressRemoveBlack(item.blackId)}>Delist</Button>
                    </View>)
                }
            </View>
        </ScrollView>
    </View>;
}



