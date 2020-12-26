import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "@/theme/variables";
import  { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    paramContainer:{
        paddingTop:getLogicPixel(20)
    },
    paramTitleContainer: {

    },
    paramTitle: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1,
    }
});



