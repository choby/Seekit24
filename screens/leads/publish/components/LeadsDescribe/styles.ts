import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    infoText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_4,
        marginTop: getLogicPixel(36),
        marginBottom: getLogicPixel(20),
        lineHeight: FontSize.TEXT_SIZE_4 + getLogicPixel(2),
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: "#E4E8EF",
    },
    focusingInfoText: {
        color: Color.SECONDARY_1,
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: Color.SECONDARY_1,
    },
});



