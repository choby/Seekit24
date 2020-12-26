import { StyleSheet } from "react-native";
import { FontSize, FontFamily } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    nextStepButton: {
        width: getLogicPixel(60),
        height: getLogicPixel(60),
        borderRadius: getLogicPixel(8),
        marginLeft: getLogicPixel(12),
        paddingLeft: 0,
        paddingRight: 0,
    },
    selectedQtyText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: "#ffffff",
        textAlign: "center"
    },
    selectedNextText: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: "#ffffff",
        textAlign: "center"
    },
});
