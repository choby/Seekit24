import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    infoText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_4,
        marginTop: getLogicPixel(20),
        marginBottom: getLogicPixel(20),
        lineHeight: FontSize.TEXT_SIZE_4 + getLogicPixel(2)
    },
    focusingInfoText: {
        color: Color.SECONDARY_1,

    },
});



