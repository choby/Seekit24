import { PreLoader } from "@/components/animations";
import Avator from "@/components/Avator";
import Button from "@/components/Button";
import GoBack from "@/components/GoBack";
import PlaceHolder from "@/components/Placeholder";
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from "@/navigation/pages";
import { getUserGoodsList } from "@/services/goods";
import { getUserInfo } from "@/services/user";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { Goods } from "@/types/data/Goods";
import { PagedList } from "@/types/data/PagedList";
import { User } from "@/types/data/User";
import { EnumGender, EnumGoodsState } from "@/types/enums";
import { getLogicPixel } from "@/utils/pixelRatio";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from 'expo-blur';
import React, { useCallback, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageView from "react-native-image-viewing";
import { NavigationBar } from "reactive";
import GoodsFalls from "../components/GoodsFalls";
import styles from "./styles/profile";

export interface UserProfileRouteParams {
    userId: string;
}

export default () => {
    const navigation = useNavigation<Navigation>();
    const route = useRoute<Route<Pages.UserProfile>>();
    const [goodsList, setGoodsList] = useState<PagedList<Goods>>({ list: [], nextPage: 1, total: 0 });
    const [user, setUser] = useState<User>();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const [initializing, setInitializing] = useState(true);
    const appState = useStore("appState");
    const [avatorViewStatus, setAvatorViewStaus] = useState(false);

    useNetworkEffect(() => {
        setInitializing(true);
        refresh(true);
    }, true);

    useFocusEffect(useCallback(() => {
        refresh(true);
    }, []));

    const refresh = async (reload?: boolean) => {
        if (!isConnected) return;
        await Promise.all([
            refreshUserInfo(),
            refreshGoodsList(reload)
        ]);
        setInitializing(false);
    };

    const refreshGoodsList = async (reload?: boolean) => {
        const userId = route.params.userId;
        if (!userId || (reload !== true && goodsList.isLastPage))
            return;
        const data = await getUserGoodsList(`${EnumGoodsState.ON_THE_SHELF}`, reload ? undefined : goodsList.nextPage, userId);
        if (data)
            setGoodsList({
                ...data,
                list: goodsList.list?.concat(data.list)
            });
    };

    const refreshUserInfo = async () => {
        const userId = route.params.userId;
        const user = await getUserInfo(userId);
        if (user) setUser(user);
    };

    return <View style={[theme.screenView]}>
        <PlaceHolder.NoNetworkView onRefresh={fetchNetState} isDisconnected={!isConnected}>
            <PreLoader.View loading={initializing}>

                <ImageBackground source={{ uri: user?.avatarUrl }} style={{ width: "100%", height: getLogicPixel(268) }} resizeMode="cover" resizeMethod="scale" >
                    <BlurView style={[StyleSheet.absoluteFill]} intensity={100}>
                        <View style={[theme.statusBar, theme.container, styles.opacityContainer]}>
                            <NavigationBar
                                backLabel={<GoBack color="light" />}
                                onPressBack={() => navigation.goBack()}
                                titleContainer={false}
                                //forwardLabel={<IconFont name="xuanxiangbaise1x" />}
                                style={{ zIndex: 1, backgroundColor: undefined }}
                            />
                            <View style={styles.userInfoContainer}>
                                <TouchableOpacity activeOpacity={1} onPress={() => setAvatorViewStaus(true)}>
                                    <Avator source={{ uri: user?.avatarUrl }} size={60} style={styles.userAvator} />
                                </TouchableOpacity>
                                <View style={styles.userInfoRightContainer}>
                                    <View style={styles.userNickContainer}>
                                        <Text style={styles.userNickName}>{user?.userName}</Text>
                                        <View style={styles.fansContainer}>
                                            <Text style={styles.fansLabel}>Fans</Text>
                                            <Text style={styles.fansQty}>0</Text>
                                            <Text style={styles.fansSpace}></Text>
                                            <Text style={styles.fansLabel}>Follow</Text>
                                            <Text style={styles.fansQty}>0</Text>
                                        </View>
                                    </View>
                                    {/* <Button size="sm" type="primary" style={styles.button}>Follow</Button>  */}
                                    {
                                        appState.userIsLogin && appState.userInfo?.userId === user?.userId &&
                                        <Button size="sm" type="default" style={[styles.button, styles.editButton]} textStyle={styles.editButtonText} onPress={() => navigation.navigate(Pages.UserInfo)}>Edit</Button>
                                    }

                                </View>
                            </View>
                            <Text numberOfLines={2} style={styles.userAddress}>
                                {`${user?.gender}` === `${EnumGender.FEMALE}` ? "Female" : "Male"}

                                {
                                    user?.region?.province.enName && user?.region.city.enName ? `,often living in ${user?.region?.province.enName} ${user?.region.city.enName}` : undefined
                                }
                                {user?.signature ? `,${user?.signature}` : undefined}
                            </Text>
                        </View>
                    </BlurView>
                </ImageBackground>
                <View style={[styles.container, styles.background]}>

                    <ScrollView style={[theme.container, styles.scrollViewContainer]}>

                        <View style={styles.releasedHeader}>
                            <Text style={styles.releasedText}>
                                {appState.userInfo?.userId === user?.userId ? "My" : "He"} Released</Text>
                            <Text style={styles.releasedQty}> {goodsList.total}</Text>
                        </View>
                        <GoodsFalls data={goodsList.list} />
                    </ScrollView>
                </View>
                <ImageView
                    images={[{ uri: user?.avatarUrl }]}
                    imageIndex={0}
                    visible={avatorViewStatus}
                    onRequestClose={() => setAvatorViewStaus(false)}
                    presentationStyle="overFullScreen"
                />

            </PreLoader.View>
        </PlaceHolder.NoNetworkView>
    </View>;
};



