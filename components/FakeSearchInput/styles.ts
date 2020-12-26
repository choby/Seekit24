import { Color } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    searchIcon: {
        paddingLeft: getLogicPixel(12),
        flexDirection: "row",
        alignItems: "center"
    },
    searchInputContainer: {
        flexDirection: "row",
        backgroundColor: Color.SEARCHBACK,
        borderRadius: getLogicPixel(20),
        height: getLogicPixel(32),
        borderWidth: 0,
        alignItems: "center"
    },
    searchInput: {
        paddingLeft: getLogicPixel(12),
        borderTopRightRadius: getLogicPixel(20),
        borderBottomRightRadius: getLogicPixel(20),
    },
    searchPlaceholderText: {
        color: Color.SECONDARY_4,
        marginLeft: getLogicPixel(11)
    }
});