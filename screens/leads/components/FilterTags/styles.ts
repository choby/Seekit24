import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    filterParams: {
        flexDirection: "row",
        marginTop: getLogicPixel(12),
        marginBottom: getLogicPixel(12)
    },
    leftSpacing: {
        width: getLogicPixel(12)
    },
    filterParamsTag: {
        marginLeft: getLogicPixel(8)
    },

});

