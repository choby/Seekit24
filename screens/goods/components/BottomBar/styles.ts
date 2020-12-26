import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
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
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        justifyContent: "space-between",
    },
    bottomFunctionBottoms: {
        width: (pixelRatio.screenSize.width - 40) / 2 - getLogicPixel(20),
        flexDirection: "row",
    },
    bottomFunctionItem: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    bottomFunctionName: {
        color: Color.SECONDARY_2,
        fontSize: FontSize.TEXT_SIZE_1_5,
        fontFamily: FontFamily.REGULAR
    },
    disabled: {
        color: Color.SECONDARY_4
    },
    bottomMessageInput: {
        flex: 1,
        borderWidth: 0
    },
    bottomChatButton: {
        width: (pixelRatio.screenSize.width - 40) / 2 - getLogicPixel(8),
        height: getLogicPixel(40),
        borderRadius: getLogicPixel(20),
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: getLogicPixel(28)
    },
    bottomSendButton: {
        width: getLogicPixel(34),
        height: getLogicPixel(34),
        borderRadius: getLogicPixel(34),
        paddingLeft: 0,
        paddingRight: 0
    },
    bottomRemovedButton: {
        width: (pixelRatio.screenSize.width - 40) / 2 - getLogicPixel(8),
        height: getLogicPixel(40),
        borderRadius: getLogicPixel(20),
        paddingLeft: 0,
        paddingRight: 0,

    },
    bottomDeleteButton: {
        width: getLogicPixel(162),
        height: getLogicPixel(40)
    },
    bottomRelistButton: {
        width: getLogicPixel(162),
        height: getLogicPixel(40)
    },
});
