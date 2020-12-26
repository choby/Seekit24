import IconFont from "@/components/Iconfont";
import NavigationHelper from "@/navigation/helper";
import { Pages } from "@/navigation/pages";
import { login } from "@/services/session";
import { sendPhoneCode } from "@/services/user";
import theme from "@/theme/index";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationBar, OTPInputView } from "reactive";
import styles from "./styles";


export interface LoginByPhone_CodeRouteParams {
    changeAccount?: boolean;
    phone?: string;
    prevRoute?: Readonly<{
        key: string;
        name: string;
        params?: Record<string, unknown> | undefined;
    }>;
}



export default () => {
    const navigation = NavigationHelper.Navigation;
    const isUnmounted = useRef(false);
    const [cutdown, setCutdown] = useState(0);
    const [isSent, setIsSent] = useState(false);
    const route = useRoute<Route<Pages.LoginByPhone_Code>>();
    const phone = route.params?.phone;
    const prevRoute = route.params?.prevRoute;
    const interval = useRef<NodeJS.Timeout>();

    useEffect(() => {
        resend();
        return () => {
            isUnmounted.current = true;
            clearInterval(interval.current!);
        };
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
                    return 59;
                if (cutdown === 1)
                    clearInterval(interval.current!);
                return cutdown - 1;
            });
        }, 1000);
    };

    const resend = async () => {
        const res = await sendPhoneCode(phone!, false);
        if (isUnmounted.current) return;
        if (res) {
            setCutdown(60);
            cutdownTimer();

        }
    };

    const onCodeFilled = async (code: string) => {
        const result = await login(phone!, undefined, code);
        if (!result) {
            // Tip.show("验证码错误", 2000);
            return;
        }

        if (prevRoute)
            navigation.navigate(prevRoute.name as Pages, prevRoute.params);
        else
            navigation.navigate(Pages.RootTab);
    };

    const usePwdLogin = () => {
        navigation.goBack();
    };

    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            titleContainer={false}
            onPressBack={() => {
                usePwdLogin();
            }}
            style={{ zIndex: 1 }}
        />
        <View>
            <Text style={styles.pageTitle}>Verification Code</Text>
            <View style={styles.verficationCodeContainer}>
                <Text style={styles.verficationCodeTo}>
                    Verification code sent to
                </Text>
                <View style={styles.verficationPhoneContainer}>
                    <Text style={styles.phoneNumber}>
                        <Text>+855</Text>
                        <Text> {phone}</Text>
                    </Text>
                    <TouchableOpacity activeOpacity={1} disabled={cutdown > 0} onPress={resend}>
                        <Text style={styles.send}> {cutdown > 0 ? `${cutdown}s` : (isSent ? "Resend" : "Send")}</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <OTPInputView pinCount={6} style={styles.otpInputStyle} codeInputFieldStyle={styles.underlineStyleBase} onCodeFilled={onCodeFilled} />
                </View>
            </View>

        </View>
    </View>;
};



