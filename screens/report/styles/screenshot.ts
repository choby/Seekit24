import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    mediaTypeBottoms: {
        height: getLogicPixel(40),
        flexDirection: "row",
        justifyContent: "space-around",

    },
    mediaTypeBottom: {
        height: "100%",
        justifyContent: "center"
    },
    mediaTypeBottomText: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_3,
    },
    mediaTypeBottomTextFocused: {
        color: Color.SECONDARY_1
    },
    mediaTypeFocusIndicator: {
        width: getLogicPixel(8),
        height: getLogicPixel(4),
        position: "absolute",
        marginLeft: getLogicPixel(-4),
        bottom: getLogicPixel(5),
        left: "50%",
        backgroundColor: Color.PRIMARY,
        borderRadius: getLogicPixel(3)
    }
});
