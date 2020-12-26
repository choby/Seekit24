import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import Input from "@/components/Input";
import Tip from '@/components/Tip';
import { UserInfoStorage } from "@/infrastructures/storages";
import { Pages } from "@/navigation/pages";
import { sendPhoneCode, setPassword } from "@/services/user";
import theme from "@/theme/index";
import { Verification } from "@/utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationBar } from "reactive";
import styles from "./styles/recoverPassword";

export interface UserRecoverPasswordParams {
    phone?: string;
    changeAccount?: boolean;
}

const userInfoStorage = new UserInfoStorage();

export default () => {
    const navigation = useNavigation<Navigation>();
    const isUnmounted = useRef(false);
    const [isSent, setIsSent] = useState(false);
    const [cutdown, setCutdown] = useState(0);
    const route = useRoute<Route<Pages.UserRecoverPassword>>();
    const [formData, setFormData] = useState<{
        phone?: string;
        code: string;
        password: string;
    }>({
        phone: route.params?.phone,
        code: "",
        password: "",
    });
    const interval = useRef<NodeJS.Timeout>();

    useEffect(() => {
        (async () => {

            if (!route.params?.phone && route.params?.changeAccount !== true) {

                const user = await userInfoStorage.getUserInfo();
                setFormData({ ...formData, phone: user?.phone ?? '' });
            }
        })();
        return () => { isUnmounted.current = true; };
    }, []);



    const cutdownTimer = () => {
        interval.current = setInterval(() => {
            if (isUnmounted.current) {
                clearInterval(interval.current!);
                return;
            }
            if (isSent === false) setIsSent(true);
            setCutdown(cutdown => {
                if (cutdown === 0)
                    return 60;
                if (cutdown === 1)
                    clearInterval(interval.current!);
                return cutdown - 1;
            });
        }, 1000);
        return () => interval && clearInterval(interval.current!);
    };

    const resend = async () => {
        if (!formData.phone) return;
        const res = await sendPhoneCode(formData.phone, false);
        if (isUnmounted.current) {
            return;
        }
        if (res) {
            cutdownTimer();

        }
    };

    const resetPassword = async () => {
        if (!!!formData.phone || !!!formData.code || !!!formData.password) return;
        const result = await setPassword(formData.phone, formData.code, formData.password);
        if (result) {
            Tip.show("Password is updated");
            navigation.goBack();
        }
    };



    return <ScrollView scrollEnabled={false} style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            titleContainer={false}
            onPressBack={() => {
                navigation.goBack();
            }}
            style={{ zIndex: 1 }}
        />
        <View>
            <Text style={styles.pageTitle}>Recover Password</Text>
            <View style={styles.verficationCodeContainer}>
                <View style={styles.verficationPhoneContainer}>
                    <Text style={styles.phoneNumber}>
                        <Text>+855</Text>
                    </Text>
                </View>
                <View >
                    <Input.FormField
                        placeholder="Enter your mobile phone number"
                        onInputChange={value => setFormData({
                            ...formData,
                            phone: value
                        })}
                        value={formData.phone}
                        isRequired
                        onValidate={Verification.phoneIsValid}
                        validateAsTyping
                    />
                </View>
                <View style={styles.verficationPhoneContainer}>
                    <Text style={styles.phoneNumber}>
                        <Text>Captcha</Text>
                    </Text>
                </View>
                <View >
                    <Input.FormField placeholder="Enter verification code" onInputChange={value => setFormData({
                        ...formData,
                        code: value
                    })}
                        isRequired
                    />
                    <TouchableOpacity activeOpacity={1} disabled={cutdown > 0} onPress={resend} style={styles.sendButton}>
                        <Text style={styles.send}> {cutdown > 0 ? `${cutdown}s` : (isSent ? "Resend" : "Send")}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.verficationPhoneContainer}>
                    <Text style={styles.phoneNumber}>
                        <Text>New password </Text>
                    </Text>
                </View>
                <View >
                    <Input.FormField placeholder="8-18 digits or letters"
                        validateAsTyping
                        onValidate={value => {
                            const reg = /^[\w]{8,18}$/;
                            const result = reg.test(value);
                            if (result)
                                setFormData({
                                    ...formData,
                                    password: value
                                });
                            else
                                setFormData({
                                    ...formData,
                                    password: ''
                                });
                            return result;
                        }}
                        isRequired
                    />
                </View>
            </View>
            <View style={styles.submitContainer}>
                <Button size="lg" type="primary" onPress={resetPassword} disabled={!!!formData.phone || !!!formData.code || !!!formData.password}>Submit</Button>
            </View>

        </View>
    </ScrollView>;
};



