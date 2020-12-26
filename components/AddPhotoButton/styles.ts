import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({

    camera: {
        width: getLogicPixel(72),
        height: getLogicPixel(72),
        borderRadius: getLogicPixel(8),
        borderWidth: getLogicPixel(0.5),
        borderColor: hexToRGB(Color.SECONDARY_4, 0.5),
        backgroundColor: "#F3F6F8",
        justifyContent: "center",
        alignItems: "center",
        marginRight: getLogicPixel(8)
    },
    cameraText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_3,
    },

});
