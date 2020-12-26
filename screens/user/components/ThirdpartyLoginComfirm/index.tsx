import React from "react";
import { Modal, ModalProps } from "reactive";
import { Image, Text, View, TouchableOpacity } from "react-native";
import IconFont from "@/components/Iconfont";
import styles from "./styles";
import NavigationHelper from "@/navigation/helper";
import { StackActions } from "@react-navigation/native";

export default class ThirdpartyLoginComfirm extends React.Component {
    private model?: Modal<ModalProps> | null;
    open() {
        this.model?.open();
    }
    close() {
        this.model?.close();
    }
    render() {

        return <Modal<ModalProps> ref={ref => this.model = ref} cancelable={false}>
            <View style={styles.modelContent}>
                <View style={styles.loginMethodIcon}>
                    <IconFont name="lianshu-lb1x" size={32} />
                </View>
                <View style={styles.userInfoContainer}>
                    <Image style={styles.userInfoAvator} source={require("@/assets/icon.png")}
                        width={66}
                        height={66} resizeMethod="resize" resizeMode="contain" />
                    <Text numberOfLines={1} style={styles.userInfoNickName}>用户名用户名</Text>
                    <Text numberOfLines={2} style={styles.userInfoRemark}>
                        seekit将访问你的昵称和电子邮箱
                        等信息并编辑您提供的信息
                    </Text>
                </View>
                <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => this.close()}>
                    <Text style={styles.continue}>继续操作</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => NavigationHelper.Navigation.dispatch(StackActions.popToTop())}>
                    <Text style={styles.reject}>拒绝</Text>
                </TouchableOpacity>

            </View>
        </Modal>;
    }
}