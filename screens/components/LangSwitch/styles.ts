import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    content: {
        width: '100%',
        height: getLogicPixel(290),
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: getLogicPixel(16),
        borderTopRightRadius: getLogicPixel(16)
    },
    navBar: {
        height: getLogicPixel(58),
        justifyContent: "center"
    },
    navCancelStyle: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3
    },
    navTitleStyle: {
        color: Color.SECONDARY_1,
        fontSize: FontSize.TEXT_SIZE_4,
        fontFamily: FontFamily.MEDIUM
    },
    radio: {
        borderTopColor: Color.SEARCHBACK,
        borderTopWidth: getLogicPixel(0.5),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20)
    },
    radioItem: {
        height: getLogicPixel(55),
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
    },

});