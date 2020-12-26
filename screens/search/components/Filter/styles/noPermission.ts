import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    noPermissionContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop: getLogicPixel(41),
        paddingBottom: getLogicPixel(41),
        
    },
    noPermissionText: {
        color: Color.WARNING,
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        
    }
});


