import { StyleSheet } from "react-native";
import { FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel, } from "@/utils/pixelRatio";

export default StyleSheet.create({
    container: {
        width: getLogicPixel(81),
        height: getLogicPixel(52),
        
    },
    imageBackground: {
        width: getLogicPixel(81),
        height: getLogicPixel(52),
        
    },
    text: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_4,
        color: "#FFFFFF",
        position: "absolute",
        top: getLogicPixel(5),
        left: getLogicPixel(15)
        
    }
});
