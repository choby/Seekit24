import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    pageTitle: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1,
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20)
    },
    infoContainer: {
        paddingBottom: getLogicPixel(16),
        
    },
    infoText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
    },
   
});



