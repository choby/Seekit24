import { Color, FontFamily } from "@/theme/variables";
import { getFontLogicSize, getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    filterContainer: {
        height: getLogicPixel(44),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    label: {
        color: Color.SECONDARY_1,
        fontFamily: FontFamily.REGULAR,
        fontSize: getFontLogicSize(13),
        overflow: "hidden"
    },
    labelHasValue: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: getFontLogicSize(13),
        overflow: "hidden"
    },
    labelActive: {
        color: Color.PRIMARY,
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: getFontLogicSize(13),
        overflow: "hidden"
    },
    slideModalContent: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: getLogicPixel(16),
        borderBottomRightRadius: getLogicPixel(16),
        overflow: "hidden"
    },

});


