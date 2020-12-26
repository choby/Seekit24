import { StyleSheet } from "react-native";
import { getLogicPixel } from "@/utils/pixelRatio";
import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";

export default StyleSheet.create({
    closeContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        height: getLogicPixel(60),
        justifyContent: "center"
    },
    titleContainer: {
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
    },
    title: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1
    },
    tipContainer: {
        backgroundColor: hexToRGB(Color.WARNING, 0.1),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        paddingTop: getLogicPixel(12),
        paddingBottom: getLogicPixel(12),
        marginBottom: getLogicPixel(40)
    },
    tipText: {
        color: Color.WARNING
    },
    listItemContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    listItemTitleContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
    },
    listItemTitleText:{
        fontFamily:FontFamily.SEMIBOLD,
        fontSize:FontSize.TEXT_SIZE_6,
        color:Color.SECONDARY_1,
    },
    listitemTag: {
        height: getLogicPixel(32),
        width: getLogicPixel(161),
        paddingLeft: getLogicPixel(12),
        justifyContent: "center",
        borderRadius: getLogicPixel(8),
        borderWidth: getLogicPixel(0.5),
        borderColor: hexToRGB("#6B788F", 0.3),
        marginBottom: getLogicPixel(12),
    },
    listitemTagSelected: {
        borderColor: Color.ERROR
    },
    listitemTagText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,
    },
    listitemTagTextSelected: {
        color: Color.ERROR,
        fontFamily: FontFamily.MEDIUM
    }
});