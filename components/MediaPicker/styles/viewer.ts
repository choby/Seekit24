import { hexToRGB } from "@/theme";
import { Color, FontFamily } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    indicator: {
        width: "100%",
        position: "absolute",
        top: getLogicPixel(pixelRatio.statusBarHeight + 10),
        height: getLogicPixel(40),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        zIndex: 2
    },
    indicatorBackground: {
        backgroundColor: hexToRGB("#000000", 0.5),
        height: pixelRatio.screenSize.height / 5
    },
    paddingHorizontal: {
        paddingHorizontal: getLogicPixel(20)
    },
    iconBackground: {

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.9,

    },
    confirm: {
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        width: pixelRatio.screenSize.width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: hexToRGB("#000000", 0.5),
        height: pixelRatio.screenSize.height / 5,
        paddingBottom: getLogicPixel(49)
    },
    confirmButton: {
        width: getLogicPixel(161),
    },
    confirmCancelButton: {
        alignItems: "center",
        justifyContent: "center",
        height: getLogicPixel(40),
        borderWidth: getLogicPixel(0.5),
        borderRadius: getLogicPixel(20),
        borderColor: hexToRGB(Color.WHITE, 0.5)
    },
    confirmText: {
        color: Color.WHITE,
        fontFamily: FontFamily.MEDIUM
    }
});
