import { StyleSheet } from "react-native";
import { getLogicPixel } from "@/utils/pixelRatio";


export default StyleSheet.create({

    selectedListContainer: {
        width: "100%",
        height: getLogicPixel(72),
        flexDirection: "row",
        alignItems: "center"
    },
    selectedItemSeparator: {
        width: getLogicPixel(8)
    },
});
