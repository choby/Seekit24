import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "@/theme/variables";
import  { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    pageTitle: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1,
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20)
    },
    progressContainer: {
        height: getLogicPixel(68),
        justifyContent: "flex-start",

    },
    progressText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        paddingBottom: getLogicPixel(12)
    },
    progressPercentText: {
        color: Color.ERROR
    },
    progress: {
        backgroundColor: "#F3F6F8",
        borderRadius: getLogicPixel(4),
    },
    progressBar: {
        height: getLogicPixel(8),
        borderRadius: getLogicPixel(4),
        color:Color.ERROR
    }
});



