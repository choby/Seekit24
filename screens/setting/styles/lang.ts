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
    introduceContainer: {
        height: getLogicPixel(38),
        justifyContent: "flex-start",
    },
    introduceText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        paddingBottom: getLogicPixel(12)
    },
    radio: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
    },
    radioItem: {
        height: getLogicPixel(55),
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),

    },
    langContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    langFlag: {
        width: 28,
        height: 28,
        borderRadius: 28,
        marginRight: getLogicPixel(12)
    },
    langText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1
    }
});



