import { StyleSheet } from "react-native";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { Color, FontFamily, FontSize } from "@/theme/variables";

export default StyleSheet.create({
    closeContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        height: getLogicPixel(60),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    reselectText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_1
    },
    titleContainer: {
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
    },
    categoryContainer: {
        flexDirection: "row",
        flex: 1
    },
    title: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1
    },
    levelOne: {
        backgroundColor: "#F8F9FA",
        flex: 1
    },
    levelOneItemContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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
        height: pixelRatio.screenSize.height - getLogicPixel(13) - pixelRatio.statusBarHeight - getLogicPixel(70 + 20 + 20 + 22),

        right: 0,
        bottom: 0,


    }
});