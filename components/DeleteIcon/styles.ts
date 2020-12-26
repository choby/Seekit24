import { hexToRGB } from "@/theme";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    deleteIcon: {
        backgroundColor: hexToRGB("#000000", 0.3),
        width: getLogicPixel(20),
        height: getLogicPixel(20)
    },
});
