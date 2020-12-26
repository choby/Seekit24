import Button from "@/components/Button";
import Divider from "@/components/Divider";
import IconFont from "@/components/Iconfont";
import Tip from "@/components/Tip";
import useMount from "@/hooks/useMount";
import useState from "@/hooks/useState";
import { Pages } from "@/navigation/pages";
import { postReport } from "@/services/report";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { Color } from "@/theme/variables";
import { EnumBusinessType } from "@/types/enums";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Asset } from "expo-media-library";
import React, { useRef } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationBar } from "reactive";
import InfoList, { InfoItem } from "../components/InfoList";
import Reason from "./components/Reason";
import ReportMediaUploadList from "./components/ReportMediaUploadList";
import styles from "./styles";


export interface ReportRouteParams {
    type: EnumBusinessType;
    id: string;
}



export default () => {
    const navigation = useNavigation<Navigation>();
    const reasonRef = useRef<Reason>(null);
    const [report, setReport] = useState({ reason: "", content: "" });
    const reportState = useStore("reportState");
    const [posting, setPosting] = useState(false);
    const route = useRoute<Route<Pages.Report>>();

    useMount(() => {
        reportState.reset();
    });

    const listItems: InfoItem[] = [
        {
            label: report.reason ? report.reason : "Select the reason for reportin",
            onPress: () => reasonRef.current?.open()
        }];

    const isAsset = (asset: Asset | string): asset is Asset => {
        return typeof asset !== "string";
    };

    const allFieldIsNotEmpty = () => {
        const selectedUris = reportState.selectedAssets.filter<Asset>(isAsset).map(asset => asset.uri);
        const uploadUris = reportState.uploadedAssetsUris.filter(uri => selectedUris.includes(uri)).distinct();
        if (selectedUris.length !== uploadUris.length) {
            Tip.show("There are still pictures being uploaded, please wait for the pictures to be uploaded");
            return false;
        }

        if (!report.reason) {
            Tip.show("Please select reason of reportin");
            return false;
        }

        if (!report.content || report.content.length === 0) {
            Tip.show("Please input description");
            return false;
        }

        if (report.content.length <= 1 || report.content.length > 400) {
            Tip.show("Description's length must between 1 and 400");
            return false;
        }

        // if (reportState.uploadedAssetsUris.length === 0) {
        //     Tip.show("Please at least upload one photo");
        //     return false;
        // }

        return true;
    };

    const onPostReport = async () => {

        if (posting || !allFieldIsNotEmpty()) return;
        setPosting(true);
        const success = await postReport({
            reason: report.reason,
            content: report.content,
            imageUrls: reportState.uploadedAssets.map(a => a.key),
            relatedId: route.params.id,
            reportType: route.params.type
        });
        if (success) {
            Tip.show("Report successfully");
            reportState.reset();
            navigation.goBack();
        }
        setPosting(false);
    };

    return <SafeAreaView style={[theme.statusBar, theme.screenView]}>
        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            onPressBack={() => navigation.goBack()}
            titleContainer={false}
            style={theme.navigationBar}
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[theme.contentView]} keyboardDismissMode="on-drag">
            <View style={[theme.paddingHorizontal, theme.whiteBackground]}>
                <Text style={styles.pageTitle}>Report</Text>
                <InfoList items={listItems} />
            </View>

            <Divider height={8} />
            <View style={[theme.whiteBackground, theme.paddingHorizontal]}>
                <TextInput style={[styles.infoText, styles.focusingInfoText]}
                    autoFocus={false}
                    placeholderTextColor={Color.SECONDARY_4}
                    multiline={true}
                    placeholder="Please describe in detail the reason for your report and the complete process"
                    onChangeText={(text) => {
                        // if (!!!text || text.length <= 60)
                        setReport({
                            ...report,
                            content: text
                        });
                    }}
                    returnKeyType="default"
                    value={report.content}

                />
            </View>
            <Divider height={8} />
            <View style={[theme.container, theme.whiteBackground, { justifyContent: "space-between" }]}>
                <View>
                    <Text style={styles.sv}>
                        Screenshot voucher
                </Text>
                    <Text style={styles.svDetail}>
                        Please provide a screenshot of the other
                        party’s valid credentials
                </Text>
                    <ReportMediaUploadList />
                </View>

                <View style={styles.buttonContainer}>
                    <Button disabled={posting} type="primary" size="xl" onPress={onPostReport}>Submit</Button>
                </View>
            </View>
        </ScrollView>
        <Reason ref={reasonRef} onSelect={reason => setReport({ ...report, reason })} />
    </SafeAreaView>;
};



