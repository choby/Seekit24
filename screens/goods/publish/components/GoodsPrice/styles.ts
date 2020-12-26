import { hexToRGB } from "@/theme";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mask: {
        backgroundColor: hexToRGB("#000000", 0.3),
        height: pixelRatio.screenSize.height,
        width: pixelRatio.screenSize.width,
        position: "absolute",
        display: "flex",
        justifyContent: "flex-start"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: getLogicPixel(50),
        backgroundColor: "#FFF",
        paddingHorizontal: getLogicPixel(20),
    },
    input: {
        flex: 1,
        borderWidth: 0,
        height: getLogicPixel(50),
        paddingVertical: getLogicPixel(13),
        fontSize: getLogicPixel(16)
    },
    button: {
        width: getLogicPixel(55),
        height: getLogicPixel(32),
        borderRadius: getLogicPixel(32),
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    }
});



