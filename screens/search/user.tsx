import React from "react";
import { View, ScrollView, Text,Image } from "react-native";
import { NavigationBar } from "reactive";
import theme from "@/theme/index";
import Input from "@/components/Input";
import IconFont from "@/components/Iconfont";
import styles from "./styles/user";
import Button from "@/components/Button";

export default () => {
    return <View style={[theme.statusBar, theme.screenView]}>
        <NavigationBar
            backLabel={false}
            titleContainer={<Input style={theme.topSearch}
                prefix={<IconFont name="yonghu-sousuo1x" />} />}
           
            style={{ zIndex: 1 }}
        />

        <ScrollView style={theme.container}>
            <View style={styles.userInfoItemConainer}>
                <Image style={styles.userInfoAvator} source={require("@/assets/icon.png")}
                    width={styles.userInfoAvator.width}
                    height={styles.userInfoAvator.height} resizeMethod="resize" resizeMode="contain" />
                <View style={styles.userInfoContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoNickName}>Tabitha Krajcik</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoGender}>woman</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoStatus}>Release 5 products | men | in Release 5 products | men | in</Text>
                    </View>
                </View>
                <Button type="primary" size="sm" style={styles.followButton}>Follow</Button>
            </View>
            <View style={styles.userInfoItemConainer}>
                <Image style={styles.userInfoAvator} source={require("@/assets/icon.png")}
                    width={styles.userInfoAvator.width}
                    height={styles.userInfoAvator.height} resizeMethod="resize" resizeMode="contain" />
                <View style={styles.userInfoContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoNickName}>Tabitha Krajcik</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoGender}>woman</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoStatus}>Release 5 products | men | in Release 5 products | men | in</Text>
                    </View>
                </View>
                <Button type="primary" size="sm" style={styles.followButton}>Follow</Button>
            </View>
            <View style={styles.userInfoItemConainer}>
                <Image style={styles.userInfoAvator} source={require("@/assets/icon.png")}
                    width={styles.userInfoAvator.width}
                    height={styles.userInfoAvator.height} resizeMethod="resize" resizeMode="contain" />
                <View style={styles.userInfoContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoNickName}>Tabitha Krajcik</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoGender}>woman</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoStatus}>Release 5 products | men | in Release 5 products | men | in</Text>
                    </View>
                </View>
                <Button type="secondary" size="sm" style={styles.followButton}>Following</Button>
            </View>
        </ScrollView>
    </View>;
}



