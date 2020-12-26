import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    slideModalContainer: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    },
    slideModalContent: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: getLogicPixel(16),
        borderTopRightRadius: getLogicPixel(16),

    },

    content: {
        padding: getLogicPixel(24),
        width: "100%",
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: Color.SEPARATOR,
        alignItems: "center"
    },
    closeContainer: {
        position: "absolute",
        top: getLogicPixel(8),
        right: getLogicPixel(8),
        zIndex: 2
    },
    iconContainer: {
        width: "100%",
        alignItems: "center",
        paddingBottom: getLogicPixel(16)
    },
    titleText: {
        fontSize: FontSize.TEXT_SIZE_5,
        fontFamily: FontFamily.SEMIBOLD,
        color: Color.SECONDARY_1,
        marginBottom: getLogicPixel(16)
    },
    contentText: {
        fontSize: FontSize.TEXT_SIZE_4,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_1
    },
    buttoms: {
        height: getLogicPixel(48),
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
    },
    buttom: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    primaryButtonText: {
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.ERROR,
        fontFamily: FontFamily.MEDIUM
    },
    secondaryButton: {
        borderRightWidth: getLogicPixel(0.5),
        borderRightColor: Color.SEPARATOR,
    },
    secondaryButtonText: {
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_2,
        fontFamily: FontFamily.REGULAR
    },
});
