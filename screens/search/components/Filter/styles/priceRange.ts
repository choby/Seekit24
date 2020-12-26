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
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: getLogicPixel(20)
    },
    paramPriceInputContainer: {
        flex: 1,
    },
    paramPriceInput: {
        backgroundColor: "#F8F9FA",
        borderColor: hexToRGB(Color.SECONDARY_2, 0.3),
        borderWidth: getLogicPixel(0.5),
        borderRadius: getLogicPixel(8),
        height: getLogicPixel(32),
        alignItems: "center",

        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        textAlign: "center",
    },
    paramPriceInputText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        textAlign: "center",

    },
    paramPriceRangeSpace: {
        width: getLogicPixel(20),
        height: getLogicPixel(1),
        borderBottomColor: Color.SECONDARY_3,
        borderBottomWidth: getLogicPixel(1),
        marginLeft: getLogicPixel(12),
        marginRight: getLogicPixel(12)
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