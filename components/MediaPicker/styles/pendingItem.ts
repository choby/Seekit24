import { StyleSheet } from "react-native";
import { getLogicPixel } from "@/utils/pixelRatio";


export default StyleSheet.create({
    photoLibCheckbox: {
        position: "absolute",
        top: getLogicPixel(6),
        right: getLogicPixel(6),
        zIndex: 3
    },
    photoLibImage: {
        width: getLogicPixel(80),
        height: getLogicPixel(80),
    },
});
