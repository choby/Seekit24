import DatePicker from "@/components/DatePicker";
import IconFont from "@/components/Iconfont";
import { setAddress, setBirthDate, setGender, setNickName, setRegion, setSignature } from "@/services/user";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { Region } from "@/types/data/Region";
import { EnumGender } from "@/types/enums";
import { getLogicPixel } from "@/utils/pixelRatio";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationBar } from "reactive";
import InfoList, { InfoItem } from "../components/InfoList";
import RegionSelectorModal from "../components/RegionSelector/fullModal";
import ModifyAddress from "./components/modifyInfo/ModifyAddress";
import ModifyAvator from "./components/modifyInfo/ModifyAvator";
import ModifyGender from "./components/modifyInfo/ModifyGender";
import ModifyIntroduction from "./components/modifyInfo/ModifyIntroduction";
import ModifyNickName from "./components/modifyInfo/ModifyNickName";
import styles from "./styles/info";


export default observer(() => {
    const appState = useStore("appState");
    const navigation = useNavigation<Navigation>();
    const datePicker = useRef<DatePicker>(null);
    const modifyNickName = useRef<ModifyNickName>(null);
    const modifyGender = useRef<ModifyGender>(null);
    const modifyAvator = useRef<ModifyAvator>(null);
    const modifyIntroduction = useRef<ModifyIntroduction>(null);
    const regionSelectorModal = useRef<RegionSelectorModal>(null);
    const modifyAddress = useRef<ModifyAddress>(null);
    const user = appState.userInfo;


    const listItems: InfoItem[] = [
        {
            label: "Head portrait",
            avator: { uri: user?.avatarUrl, size: getLogicPixel(30) },
            style: { paddingVertical: getLogicPixel(15) },
            onPress: () => modifyAvator.current?.open()
        },
        {
            label: "Nickname",
            value: user?.userName,
            onPress: () => modifyNickName.current?.open()
        }, {
            label: "Gender",
            value: `${user?.gender}` === `${EnumGender.MALE}` ? "Male" : "Female",
            onPress: () => modifyGender.current?.open()
        }, {
            label: "Birthday",
            value: user?.birthdate,
            onPress: () => datePicker.current?.open()
        },
        {
            label: "Brief introduction",
            value: user?.signature,
            onPress: () => modifyIntroduction.current?.open()
        },
        //{
        //     label: "Hobby",
        //     nextPage: "settingAbout",

        // }, 
        {
            label: "Region",
            value: user?.region?.city?.enName,
            onPress: () => regionSelectorModal.current?.open()
        },
        {
            label: "Detailed address",
            value: user?.region?.detailedAddress,
            onPress: () => modifyAddress.current?.open()
        }
    ];

    const onModifyNickNameOk = async (value: string) => {
        if (!!!value) return;
        const result = await setNickName(value);
        if (result) {
            modifyNickName.current?.close();
            appState.updateUserInfo();
        }
    };

    const onModifyBirthDate = async (value: string) => {
        if (!!!value) return;
        const result = await setBirthDate(value);
        if (result) {
            appState.updateUserInfo();
        }
    };

    const onSetGender = async (value: EnumGender) => {
        const result = await setGender(value);
        if (result) {
            appState.updateUserInfo();
        }
    };

    const onSetAddress = async (value?: string) => {

        const result = await setAddress(value!);
        if (result) {
            appState.updateUserInfo();
            modifyAddress.current?.close();
        }
    };

    const onSetRegion = async (regions: Region[]) => {

        const result = await setRegion(regions[0]?.id, regions[1]?.id, regions[2]?.id);
        if (result) {
            appState.updateUserInfo();
            regionSelectorModal.current?.close();
        }
    };
    const onSetSignature = async (signature?: string) => {

        const result = await setSignature(signature);
        if (result) {
            appState.updateUserInfo();
            modifyIntroduction.current?.close();
        }
    };

    return <View style={[theme.statusBar, theme.screenView, theme.container]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            titleContainer={false}
            onPressBack={() => navigation.goBack()}
            style={{ zIndex: 1 }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>My Information</Text>
            {/* <View style={styles.progressContainer}>
                <Text style={styles.progressText}>
                    <Text style={styles.progressPercentText}>97%</Text> completed, continue to refuel and improve
                </Text>
                <Progress
                    easing={false}
                    percent={70}
                    useNativeDriver={false}
                    style={styles.progress}
                    barStyle={styles.progressBar}
                />
            </View> */}
            <InfoList items={listItems} />
        </ScrollView>

        <DatePicker startYear={1970} numberOfYears={50} ref={datePicker} onConfirm={onModifyBirthDate} date={user?.birthdate} />
        <ModifyNickName ref={modifyNickName} onOK={onModifyNickNameOk} nickName={user?.userName} />
        <ModifyGender ref={modifyGender} onConfirm={value => onSetGender(value.value)} gender={user?.gender ?? EnumGender.FEMALE} />
        <ModifyAvator ref={modifyAvator} user={user!} />
        <ModifyIntroduction ref={modifyIntroduction} onOK={onSetSignature} signature={user?.signature} />
        <RegionSelectorModal ref={regionSelectorModal} onConfirm={onSetRegion} selectedids={user?.region?.province && user?.region?.city ? [user.region.province.id, user.region.city.id] : undefined} />
        <ModifyAddress ref={modifyAddress} onOK={onSetAddress} address={user?.region?.detailedAddress} />
    </View>;
});



