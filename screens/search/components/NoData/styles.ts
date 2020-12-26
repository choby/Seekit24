import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    placeholder: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: getLogicPixel(20)
    },
    noDataContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: getLogicPixel(41),
    },
    noDataText: {
        color: Color.WARNING,
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        marginLeft: getLogicPixel(8)
    }
});


