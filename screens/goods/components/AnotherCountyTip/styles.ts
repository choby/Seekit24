import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        //paddingTop: getLogicPixel(43.7)
    },
    currentPosition: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
    },
    tipContent: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: getLogicPixel(13),
        marginBottom: getLogicPixel(40)
    },
    tipContentText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.WARNING,
        marginLeft: getLogicPixel(4)
    },
    addressListContainer: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
        marginTop: getLogicPixel(15)
    },
    addressItemContainer: {
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
        justifyContent: "center"
    },
    addressText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2
    }
});


