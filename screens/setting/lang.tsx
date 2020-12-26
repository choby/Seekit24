import React from "react";
import { View,  Text, Image, ImageSourcePropType } from "react-native";
import { NavigationBar, Radio } from "reactive";
import theme from "@/theme/index";
import IconFont from "@/components/Iconfont";
import styles from "./styles/lang";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { useStore } from "@/stores";

const languages: {
    label: string,
    value: string,
    flag: ImageSourcePropType
}[] = [{
    label: "English",
    value: "en",
    flag: require("@/assets/images/uk_flag.png")
}, {
    label: "ខ្មែរ",
    value: "km",
    flag: require("@/assets/images/km_flag.png")
}, {
    label: "简体中文",
    value: "zh",
    flag: require("@/assets/images/cn_flag.png")
}];


export default observer(() => {
    const navigation = useNavigation<Navigation>();
     const appState = useStore("appState");
    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            onPressBack={() => navigation.goBack()}
            titleContainer={false}
            style={{ zIndex: 1 }}
        />
        <View>
            <Text style={styles.pageTitle}>Choose a Language</Text>
            <Text></Text>
            <View style={styles.introduceContainer}>
                <Text style={styles.introduceText}>
                    Follow the phone system language by default
                </Text>
            </View>
            <Radio
                value={appState.I18n.locale}
                iconPosition="right"
                style={styles.radio}
                checkedIcon={<IconFont name="duihao1x" size={20} />}
                onChange={value => appState.setLocale(value as string)}
            >
                {
                    languages.map((lang, index) => <Radio.Item key={index}
                        label={<View style={styles.langContainer}>
                            <Image style={styles.langFlag} source={lang.flag}
                                width={styles.langFlag.width}
                                height={styles.langFlag.height} resizeMethod="resize" resizeMode="contain" />
                            <Text style={styles.langText}>{lang.label}</Text>
                        </View>}
                        value={lang.value}
                        style={styles.radioItem}
                    />)
                }
            </Radio>
        </View>
    </View>;
})



