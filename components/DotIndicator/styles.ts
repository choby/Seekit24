

import { Color } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    selectedIndicator: {
        width: getLogicPixel(9),
        height: getLogicPixel(10),
        backgroundColor: Color.PRIMARY,
        borderRadius: getLogicPixel(4.5),
        position: "absolute",
        left: getLogicPixel(-4)
    },
});