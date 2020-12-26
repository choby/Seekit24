import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    closeContainer: {

    },
    nicknameText: {
        color: Color.SECONDARY_1
    },
    upToCharactersContainer: {
        alignItems: "flex-end",
        paddingVertical: getLogicPixel(12)
    },
    upToCharactersText: {
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_4,
        fontSize: FontSize.TEXT_SIZE_2
    },
    funcContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: getLogicPixel(48),
        paddingHorizontal: getLogicPixel(20),
        alignItems: "center",
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
    },
    cancelText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3
    },
    confirmText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.ERROR
    },
    pickerText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
    }
});




