import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    paramsContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
    },
    currentLocation: {
        height: getLogicPixel(82),
        justifyContent: "center",
    },
    currentLocationText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,

    },
    gpsLocation: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: getLogicPixel(12)
    },
    gpsLocationText: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,

    },
    gpsRefreshIcon: {
        width: getLogicPixel(24),
        height: getLogicPixel(24),
        borderRadius: getLogicPixel(24),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: hexToRGB(Color.PRIMARY, 0.06),
    },
    regionContainer: {

        flexDirection: "row",
        backgroundColor: "#F8F9FA",
    },
    title: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1
    },
    levelOne: {
        backgroundColor: "#F8F9FA",

    },
    levelOneItemContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    levelOneItemContainerActive: {
        backgroundColor: "#FFFFFF"
    },
    levelOneItemText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_1
    },
    levelOneItemTextActive: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.ERROR
    },
    levelTwo: {
        width: getLogicPixel(247),
        // height: pixelRatio.screenSize.height - getLogicPixel(13) - pixelRatio.statusBarHeight - getLogicPixel(70 + 20 + 20 + 22),
        right: 0,
        bottom: 0,
    },
    levelTwoActive: {
        backgroundColor: "#FFFFFF"
    },
    paramSubmitContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: getLogicPixel(10),
        paddingTop: getLogicPixel(20)
    },
    paramRest: {
        width: getLogicPixel(129)
    },
    paramDetermine: {
        width: getLogicPixel(194)
    },
    pageTitle: {
        paddingBottom: getLogicPixel(20)
    },
    pageTitleText: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1
    }
});


