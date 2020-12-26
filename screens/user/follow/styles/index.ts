import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel, } from "@/utils/pixelRatio";
import { hexToRGB } from "@/theme";

export default StyleSheet.create({
    tabBar: {
        backgroundColor: hexToRGB("#FFFFFF", 0.7),
        shadowColor: "#fff"
    },
    tab: {
        width: getLogicPixel(120),
        height: getLogicPixel(45),
    },
    tabLabelContainer: {
        width: getLogicPixel(107),
        height: getLogicPixel(32),
        justifyContent: "flex-end",
        marginLeft: getLogicPixel(40),
    },
    tabLabel: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
        justifyContent: "flex-end",
    },
    tabLabelQuantity: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.NUMERIC_SIZE_2,
        color: Color.SECONDARY_3,
    },
    tabLabelFocus: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
    },
    indicator: {
        backgroundColor: Color.ERROR,
        height: getLogicPixel(6),
        borderRadius: getLogicPixel(6),
        width: getLogicPixel(9),
        marginLeft: getLogicPixel(55),
    },

});
