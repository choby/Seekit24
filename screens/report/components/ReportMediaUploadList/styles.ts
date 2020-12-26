import { hexToRGB } from "@/theme";
import { FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    photosContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    selectedItemSeparator: {
        width: getLogicPixel(8)
    },
    selectedItemContainer: {
        height: getLogicPixel(72),
        width: getLogicPixel(72),
        borderRadius: getLogicPixel(8),
    },
    selectedItemUploadStatusContainer: {
        height: getLogicPixel(72),
        width: getLogicPixel(72),
        borderRadius: getLogicPixel(8),
        position: "absolute",
        zIndex: 2,
        backgroundColor: hexToRGB("#9BA6B8", 0.3),
        justifyContent: 'center',
        alignItems: "center"
    },
    selectedItemUploadFailedContainer: {
        backgroundColor: hexToRGB("#000000", 0.3),
    },
    selectedItemUploadStatusText: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_2,
        color: "#FFFFFF"
    },
    selectedItem: {
        height: getLogicPixel(72),
        width: getLogicPixel(72),
        borderRadius: getLogicPixel(8),
    },
    selectedItemDeleteIcon: {
        position: "absolute",
        zIndex: 2,
        top: 0,
        right: 0,
        borderTopRightRadius: getLogicPixel(8),

    },
});
