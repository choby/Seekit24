import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: pixelRatio.screenSize.height / 3,
        position: "absolute",
        bottom: 0,
        backgroundColor: Color.WHITE,
        width: pixelRatio.screenSize.width,

        borderTopLeftRadius: getLogicPixel(16),
        borderTopRightRadius: getLogicPixel(16)
    },
    contentContainer: {
        paddingTop: getLogicPixel(12),
    },
    addressItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: getLogicPixel(12),
        paddingBottom: getLogicPixel(12),
        alignItems: "center"
    },
    addressItemContainerBorder: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5)
    },
    addressName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_1
    },
    addressDetail: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_3
    }
});
