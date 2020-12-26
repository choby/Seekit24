import { StyleSheet, Dimensions } from "react-native";
import { getLogicPixel } from "@/utils/pixelRatio";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    libItem: {
        width: (SCREEN_WIDTH - getLogicPixel(40)) / 4,
        alignItems: "center"
    },
    libItemSeparator: {
        height: getLogicPixel(4)
    },
});
