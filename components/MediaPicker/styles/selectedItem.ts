import { StyleSheet } from "react-native";
import { hexToRGB } from "@/theme";
import { getLogicPixel } from "@/utils/pixelRatio";


export default StyleSheet.create({
    selectedItemContainer: {
        height: getLogicPixel(60),
        width: getLogicPixel(60),
        borderRadius: getLogicPixel(8),
    },
    selectedItem: {
        height: getLogicPixel(60),
        width: getLogicPixel(60),
        borderRadius: getLogicPixel(8),
    },
    selectedItemDeleteIcon: {
        position: "absolute",
        zIndex: 2,
        top: 0,
        right: 0,
        backgroundColor: hexToRGB("#000000", 0.3),
        borderTopRightRadius: getLogicPixel(8),
        width: getLogicPixel(20),
        height: getLogicPixel(20)
    },
});
