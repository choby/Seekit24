import { Color } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    actions: {
        position: "absolute",
        bottom: pixelRatio.screenSize.height / 3 + 20,
        right: getLogicPixel(20)
    },
    icon: {
        padding: getLogicPixel(20),
        width: getLogicPixel(46),
        height: getLogicPixel(46),
        borderRadius: getLogicPixel(46),
        backgroundColor: Color.WHITE,
        justifyContent: "center",
        alignItems: "center"
    }
});
