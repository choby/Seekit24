import { hexToRGB } from "@/theme";
import { FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mask: {
        position: "absolute",
        width: pixelRatio.screenSize.width,
        height: pixelRatio.screenSize.height,
        backgroundColor: hexToRGB("#000000", 0.3),
        top: 0,
        zIndex: 2
    },
    messageInputContainer: {
        zIndex: 3,
        minHeight: getLogicPixel(49),
        backgroundColor: "#FFFFFF",
        width: pixelRatio.screenSize.width,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        justifyContent: "space-between",
    },
    bottomMessage: {
        flex: 1,
        borderWidth: 0,
        paddingLeft: 0
    },
    bottomMessageInput: {
        fontSize: FontSize.TEXT_SIZE_4,
        paddingLeft: 0,
        flex: 1
    },
    bottomSendButton: {
        width: getLogicPixel(34),
        height: getLogicPixel(34),
        borderRadius: getLogicPixel(34),
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: getLogicPixel(4)
    },

});
