import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    pageTitle: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1,
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20)
    },
    infoText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_4,
        marginTop: getLogicPixel(20),
        marginBottom: getLogicPixel(20),
        lineHeight: FontSize.TEXT_SIZE_4 + getLogicPixel(4),
        height: getLogicPixel(118),
        textAlignVertical: "top"
    },
    focusingInfoText: {
        color: Color.SECONDARY_1,

    },
    sv: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
        marginTop: getLogicPixel(18)
    },
    svDetail: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_3,
        marginTop: getLogicPixel(7),
        marginBottom: getLogicPixel(20)
    },
    buttonContainer: {
        marginBottom: getLogicPixel(24)
    }
});



