import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { Platform, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "./variables";

/**
 * 十六进制颜色转RGBA
 * @param hex 十六进制颜色值
 * @param alpha 透明度
 */
export function hexToRGB(hex: string, alpha?: number) {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


export default StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: Color.WHITE,
    },
    contentView: {
        flex: 1,
        backgroundColor: Color.PAGEBACK,
    },
    statusBar: {
        paddingTop: Platform.OS === "ios" ? pixelRatio.statusBarHeight : 0,
    },
    navigationBar: {
        height: getLogicPixel(44),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        backgroundColor: Color.WHITE
    },
    topSearch: {
        backgroundColor: "#F3F6F8",
        //borderColor: "#F3F6F8",
    },
    paddingHorizontal: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
    },
    whiteBackground: {
        backgroundColor: Color.WHITE
    },
    grayBackground: {
        backgroundColor: Color.PAGEBACK
    },
    container: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        flex: 1
    },
    h3: {
        fontSize: FontSize.TEXT_SIZE_6,
        fontFamily: FontFamily.MEDIUM
    },
    bottomBar: {
        zIndex: 3,
        bottom: 0,
        height: getLogicPixel(49),
        backgroundColor: "#FFFFFF",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        justifyContent: "space-between",
        shadowColor: "#002695",
        shadowOffset: {
            width: 1,
            height: -1
        },
        shadowOpacity: 0.04
    }
});