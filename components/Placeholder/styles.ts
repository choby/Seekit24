import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tipContainer: {
        alignItems: "center",
    },
    tipImage: {
        width: getLogicPixel(200),
        height: getLogicPixel(160)
    },
    tipText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        marginTop: getLogicPixel(12)
    },
    refreshButton: {
        width: getLogicPixel(85),
        marginTop: getLogicPixel(30)
    },
    viewContainer: {
        backgroundColor: Color.WHITE,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});