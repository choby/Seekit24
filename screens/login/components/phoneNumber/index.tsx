import Avator from "@/components/Avator";
import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import Input from "@/components/Input";
import { UserInfoStorage } from "@/infrastructures/storages";
import { Pages } from "@/navigation/pages";
import Agreement from "@/screens/components/Agreement";
import theme from "@/theme";
import { User } from "@/types/data/User";
import { debounce, Verification } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationBar } from "reactive";
import styles from "./styles";

const userInfoStorage = new UserInfoStorage();

interface PhoneNumberProps {
    changeAccount?: boolean;
    onInputPhone: (phone?: string) => void;
    phone?: string;
    prevRoute?: Readonly<{
        key: string;
        name: string;
        params?: Record<string, unknown> | undefined;
    }>;
}

export default ({ changeAccount, onInputPhone, prevRoute, ...others }: PhoneNumberProps) => {
    const navigation = useNavigation<Navigation>();
    const [phone, setPhone] = useState<string | undefined>(others.phone);
    const [accountInfo, setAccountInfo] = useState<User>();


    useEffect(() => {
        (async () => {
            if (changeAccount !== true) {
                const user = await userInfoStorage.getUserInfo();
                if (user && user.userId) {
                    setAccountInfo(user);
                    setPhone(user?.phone);
                } else {
                    setAccountInfo({ phone } as User);
                }
            }
        })();
    }, []);

    // 用户是否登录过
    const haveLoginUser = (user?: User): user is User => {
        return !!user && !!user.userId && Verification.phoneIsValid(user.phone);
    };

    const usePwdLogin = debounce(() => navigation.dispatch(StackActions.replace(Pages.LoginByPassword, { changeAccount, phone, prevRoute })));


    return <View style={[theme.statusBar, theme.screenView]}>
        <View style={[theme.navigationBar]}>
            <NavigationBar titleContainer={false}
                backLabel={changeAccount ? <IconFont name="fanhui-heise1x" /> : <IconFont name="yemianguanbi-hei1x" size={20} />}
                onPressBack={() => navigation.goBack()}
            // forwardLabel={<TouchableOpacity onPress={() => langSwitch.current?.open()}>
            //     <View>
            //         {/* <Text>中文</Text> */}
            //     </View>
            // </TouchableOpacity>}
            />
        </View>

        <View style={[theme.container, styles.container]}>
            <View style={styles.logoContainer}>
                {
                    changeAccount !== true && haveLoginUser(accountInfo) && <>
                        <Avator source={{ uri: accountInfo.avatarUrl }} size={getLogicPixel(66)} />
                        <Text>{accountInfo.userName?.mask()}</Text>
                    </>
                }
                {
                    (changeAccount === true || !!!haveLoginUser(accountInfo)) && <Image source={require("@/assets/images/seekit24.png")} />
                }
            </View>
            <View style={{ flex: 3, paddingTop: getLogicPixel(40) }}>
                <Text style={styles.pickerLabel}>+855</Text>
                <View style={{ height: getLogicPixel(38) }}>
                    <Input.FormField
                        value={changeAccount ? phone : accountInfo?.phone}
                        textType="only-numbers"
                        textInputStyle={styles.input}
                        isRequired
                        validateAsTyping
                        onValidate={Verification.phoneIsValid}
                        onInputChange={value => setPhone(value)}
                        keyboardType="number-pad"
                    />
                </View>
                <Text style={styles.phoneLoginDesc}>
                    Unregistered mobile phones will be automatically registered after verification
            </Text>

                <View style={styles.loginButtonContainer}>
                    <Button
                        disabled={!Verification.phoneIsValid(phone)}
                        type="primary"
                        size="lg"
                        onPress={() => {
                            if (phone) {
                                setAccountInfo({ ...accountInfo, phone } as User);
                                onInputPhone(phone);
                                navigation.navigate(Pages.LoginByPhone_Code, { phone, prevRoute });
                            }
                        }}
                        textStyle={styles.loginButtonText}>
                        Sign in / Register
                </Button>
                </View>
                <View style={styles.forgetContainer}>
                    <TouchableOpacity activeOpacity={1} onPress={usePwdLogin} style={styles.forgetTouch}>
                        <Text numberOfLines={2} style={styles.forgetText1}>Password login</Text>
                    </TouchableOpacity>
                </View>

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
        </View>


    </View>;
};