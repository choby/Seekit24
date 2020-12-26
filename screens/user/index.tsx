import Avator from "@/components/Avator";
import GoMore from "@/components/GoMore";
import IconFont from "@/components/Iconfont";
import { Pages } from "@/navigation/pages";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { getLogicPixel } from "@/utils/pixelRatio";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationBar, Tag } from "reactive";
import styles from "./styles";

export default observer(() => {
    const navigation = useNavigation<Navigation>();
    const appState = useStore("appState");
    const user = appState.userInfo;


    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={false}
            titleContainer={false}
            //forwardLabel={<IconFont name="liuyanicon1x" />}
            onPressBack={() => navigation.goBack()}
            style={{ zIndex: 1 }}
        />
        <View>
            <View style={styles.profileContainer}>
                <View style={styles.userNickNameContainer}>
                    <Text style={styles.userNickName} numberOfLines={1}>{user?.userName ?? user?.phone}</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.UserInfo)} style={styles.editTagContainer}>
                        <Tag style={styles.editTag}>
                            <Text style={styles.editTagText}>Edit information <IconFont name="lie-jinru1x" size={getLogicPixel(12)} /></Text>
                        </Tag>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.UserInfo)}>
                    <Avator source={{ uri: user?.avatarUrl }} size={getLogicPixel(66)} />
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.GoodsPublished)}>
                    <View style={styles.infoItemContainer}>
                        <View style={styles.infoItemLeft}>
                            <IconFont name="wodefabu1x" size={getLogicPixel(20)} />
                            <Text style={styles.infoItemText}>Published</Text>
                        </View>
                        <GoMore text={false} />
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.UserCollection)}>
                    <View style={styles.infoItemContainer}>
                        <View style={styles.infoItemLeft}>
                            <IconFont name="wodeshoucang1x" size={getLogicPixel(20)} />
                            <Text style={styles.infoItemText}>My Favorite</Text>
                        </View>
                        <GoMore text={false} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.UserFollow)}>
                    <View style={styles.infoItemContainer}>
                        <View style={styles.infoItemLeft}>
                            <IconFont name="wodeguanzhu1x" size={getLogicPixel(20)} />
                            <Text style={styles.infoItemText}>My Following</Text>
                        </View>
                        <GoMore text={false} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.UserHistory)}>
                    <View style={styles.infoItemContainer}>
                        <View style={styles.infoItemLeft}>
                            <IconFont name="wodeliulan1x" size={getLogicPixel(20)} />
                            <Text style={styles.infoItemText}>My Browse</Text>
                        </View>
                        <GoMore text={false} />
                    </View>
                </TouchableOpacity> */}

            </View>
            {/* <View style={styles.infoContainer}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.Setting)}>
                    <View style={styles.infoItemContainer}>
                        <View style={styles.infoItemLeft}>
                            <IconFont name="shezhi1x" size={getLogicPixel(20)} />
                            <Text style={styles.infoItemText}>Set</Text>
                        </View>
                        <GoMore text={false} />
                    </View>
                </TouchableOpacity>
            </View> */}
            {/* 临时功能布局 */}
            <View style={styles.infoContainer}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.Setting)}>
                    <View style={styles.infoItemContainer}>
                        <View style={styles.infoItemLeft}>
                            <IconFont name="shezhi1x" size={getLogicPixel(20)} />
                            <Text style={styles.infoItemText}>Set</Text>
                        </View>
                        <GoMore text={false} />
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    </View>;
});



