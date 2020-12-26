import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    paramsContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
    },
    paramCateTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20)
    },
    paramCateTitleText: {
        color: Color.SECONDARY_2,
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
    },
    paramCateContentContainer: {
        flexDirection: "row",

        paddingBottom: getLogicPixel(20)
    },
    paramTag: {
        height: getLogicPixel(32),
        borderWidth: getLogicPixel(0.5),
        borderColor: hexToRGB(Color.SECONDARY_2, 0.3),
        borderRadius: getLogicPixel(8),
        backgroundColor: "#FFF",
        paddingLeft: getLogicPixel(15),
        paddingRight: getLogicPixel(15),
        marginRight: getLogicPixel(12)
    },
    paramTagSelected: {
        borderColor: Color.ERROR,
    },
    paramTagTxtSelected: {
        color: Color.ERROR
    },
    paramSubmitContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: getLogicPixel(10),
        paddingTop: getLogicPixel(20)
    },
    paramRest: {
        width: getLogicPixel(129),
        height: getLogicPixel(40)
    },
    paramDetermine: {
        width: getLogicPixel(194),
        height: getLogicPixel(40)
    }
});


