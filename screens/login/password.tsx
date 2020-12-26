import Avator from "@/components/Avator";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import IconFont from "@/components/Iconfont";
import Input from "@/components/Input";
import { UserInfoStorage } from "@/infrastructures/storages";
import { Pages } from "@/navigation/pages";
import { login } from "@/services/session";
import theme from "@/theme";
import { User } from "@/types/data/User";
import { debounce, Verification } from "@/utils";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StackActions, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NavigationBar } from "reactive";
import Agreement from "../components/Agreement";
import LangSwitch from "../components/LangSwitch";
import styles from "./styles/password";
export interface LoginByPasswordRouteParams {
    changeAccount?: boolean;
    phone?: string;
    prevRoute?: Readonly<{
        key: string;
        name: string;
        params?: Record<string, unknown> | undefined;
    }>;
}

const userInfoStorage = new UserInfoStorage();

export default () => {
    const langSwitch = useRef<LangSwitch>(null);
    const navigation = useNavigation<Navigation>();
    const [loginFailed, setLoginFailed] = useState(false);
    const [password, setPassword] = useState<string>();
    const [accountInfo, setAccountInfo] = useState<User>();
    const route = useRoute<Route<Pages.LoginByPassword>>();
    const [changeAccount] = useState(route.params?.changeAccount);
    const phone = route.params?.phone;
    const prevRoute = route.params?.prevRoute;

    useEffect(() => {
        (async () => {
            if (phone) {
                setAccountInfo({ phone } as User);
                return;
            }
            else if (changeAccount !== true) {
                const user = await userInfoStorage.getUserInfo();
                setAccountInfo(user);
            }
        })();
    }, []);

    const onPressLogin = async (phone: string, password: string, code?: string) => {
        if (!password) {
            setLoginFailed(true);
            return;
        }
        setLoginFailed(false);
        const result = await login(phone, password, code);
        if (!result) {
            setLoginFailed(true);
            return;
        }
        if (prevRoute)
            navigation.navigate(prevRoute.name as Pages, prevRoute.params);
        else
            navigation.dispatch(StackActions.popToTop());
    };

    // 用户是否登录过
    const haveLoginUser = (user?: User): user is User => {
        return !!user && !!user.userId && Verification.phoneIsValid(user.phone);
    };

    const usePhoneLogin = async () => {
        const user = await userInfoStorage.getUserInfo();
        if (user && user.userId)
            setAccountInfo(user);
        if (changeAccount !== true
            && user
            && user.phone
            && Verification.phoneIsValid(user.phone)) {
            navigation.navigate(Pages.LoginByPhone_Code, { phone: user.phone, changeAccount, prevRoute });
            return;
        }
        navigation.dispatch(StackActions.replace(Pages.LoginByPhone, { changeAccount, phone: accountInfo?.phone, prevRoute }));
    };

    const toChangeAccount = debounce(() => {
        navigation.dispatch(StackActions.push(Pages.LoginByPhone, { changeAccount: true, prevRoute }));
    });

    return <ScrollView scrollEnabled={false} style={[theme.statusBar, theme.screenView, { height: pixelRatio.screenSize.height }]} contentContainerStyle={{ flex: 1 }}>

        <View style={[theme.navigationBar]}>
            <NavigationBar titleContainer={false}
                backLabel={changeAccount ? <IconFont name="fanhui-heise1x" /> : <IconFont name="yemianguanbi-hei1x" size={20} />}
                onPressBack={() => navigation.goBack()}
                forwardLabel={<TouchableOpacity onPress={() => langSwitch.current?.open()}>
                    <View>
                        {/* <Text>中文</Text> */}
                    </View>
                </TouchableOpacity>}
            />
        </View>

        <KeyboardAvoidingView style={[theme.container, styles.container]}>
            <View style={styles.logoContainer}>
                {
                    (haveLoginUser(accountInfo) && !changeAccount) && <>
                        <Avator source={{ uri: accountInfo.avatarUrl }} size={getLogicPixel(66)} />
                        <Divider height={getLogicPixel(12)} />
                        <Text>{accountInfo.userName?.mask()}</Text>
                    </>
                }
                {
                    (!haveLoginUser(accountInfo) || changeAccount) && <Image source={require("@/assets/images/seekit24.png")} />
                }
            </View>
            <View style={{ flex: 3, paddingTop: getLogicPixel(40) }}>
                <>
                    {(!haveLoginUser(accountInfo) || changeAccount) &&
                        <>
                            <Text style={styles.pickerLabel}>+855</Text>
                            <View style={{ height: getLogicPixel(38) }}>
                                <Input.FormField
                                    value={changeAccount ? phone : accountInfo?.phone}
                                    textType="only-numbers"
                                    textInputStyle={styles.input}
                                    isRequired
                                    invalid={loginFailed}
                                    onValidate={Verification.phoneIsValid}
                                    validateAsTyping
                                    onInputChange={value => setAccountInfo({ ...accountInfo, phone: value } as User)}
                                    keyboardType="number-pad"
                                />
                            </View>
                        </>
                    }
                    <View style={styles.passwordTextContainer}>
                        <Text style={styles.passwordText}>password</Text>
                    </View>
                    <View style={{ height: getLogicPixel(38) }}>
                        <Input.FormField
                            textType="default"
                            isSecured
                            placeholder="Enter your password"
                            //invalidHint="123"
                            invalid={loginFailed}
                            isRequired
                            onInputChange={value => setPassword(value)}

                        />
                    </View>

                    <View style={styles.loginButtonContainer}>
                        <Button
                            disabled={!Verification.phoneIsValid(accountInfo?.phone) || !!!password}
                            type="primary"
                            size="lg"
                            onPress={() => onPressLogin(accountInfo!.phone, password!)} textStyle={styles.loginButtonText}>
                            Sign in
                        </Button>
                    </View>
                    <View style={styles.forgetContainer}>
                        <TouchableOpacity activeOpacity={1} onPress={usePhoneLogin} style={styles.forgetTouch1}>
                            <Text numberOfLines={2} style={styles.forgetText1}>Mobile number login / registration</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={styles.forgetTouch2} onPress={() => navigation.navigate(Pages.UserRecoverPassword, { changeAccount, phone: accountInfo?.phone })}>
                            <Text style={styles.forgetText2}>Forget password</Text>
                        </TouchableOpacity>
                    </View>
                </>
                {
                    changeAccount !== true && haveLoginUser(accountInfo) && <View style={styles.changeAccount}>
                        <Button type="default" size="md" style={styles.changeAccountBtn} icon="jinrubeifen3" iconPosition="right" onPress={toChangeAccount}>Change account</Button>
                    </View>
                }
            </View>


            {/* <View style={styles.otherLoginContainer}>
            <View>
                <Text style={styles.otherLoginText}>Other login methods</Text>
            </View>
            <View style={styles.otherLoginLogos}>
                <IconFont name="pingguo-lb" size={40} />
                <IconFont name="guge-lb1x" size={40} />
                <IconFont name="lianshu-lb1x" size={40} />
            </View>
        </View> */}
            <Agreement />
        </KeyboardAvoidingView>

        <LangSwitch ref={langSwitch} />

        {/* <ThirdpartyLoginComfirm ref={comfirm} /> */}
    </ScrollView>;
};