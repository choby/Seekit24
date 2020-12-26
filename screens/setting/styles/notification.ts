import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    pageTitle: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1,
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20)
    },
    listContainer: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
    },
    listItemContainer: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
        height: getLogicPixel(55),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listItemContainerSpace: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
        height: getLogicPixel(70),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingBottom: getLogicPixel(16)
    },
    listItemContainerSpaceText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3
    },
    listItemLabel: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
    },
    listItemLabelDesc: {
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(12),
        color: Color.SECONDARY_3
    },
    listItemRightContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    listItemSwitch: {
        backgroundColor: "#4CD964"
    }


});



