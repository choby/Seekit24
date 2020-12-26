import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imageBackground: {
        width: pixelRatio.screenSize.width,
        height: getLogicPixel(128),
        position: "absolute",
        top: 0
    },
    navigationBar: {
        height: getLogicPixel(32),
        zIndex: 1,
        marginVertical: getLogicPixel(6)
    },
    content: {
        borderTopLeftRadius: getLogicPixel(16),
        borderTopRightRadius: getLogicPixel(16),
        marginTop: getLogicPixel(10),
        paddingTop: getLogicPixel(10)
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: getLogicPixel(18),
        marginBottom: getLogicPixel(4)
    },
    pageTitle: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1,

    },
    listContainer: {
        borderTopWidth: 0
    },
    buttonContainer: {
        backgroundColor: Color.WHITE,
        borderWidth: 0,
    },
    buutonText: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2
    },
    cancelText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,
    }
});



