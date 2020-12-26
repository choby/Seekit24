import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    label: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_5,
        color: Color.SECONDARY_1,

    },
    labelItem: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_1
    },
    radioContainer: {
        backgroundColor: "#FFF",
        paddingHorizontal: getLogicPixel(20),
        borderBottomLeftRadius: getLogicPixel(16),
        borderBottomRightRadius: getLogicPixel(16),
        paddingBottom: getLogicPixel(10)
    }
});
