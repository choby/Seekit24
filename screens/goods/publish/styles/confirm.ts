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
    listContainer: {
        borderTopWidth: 0
    },
    buttonContainer: {

    },
    cancelText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,
    }
});



