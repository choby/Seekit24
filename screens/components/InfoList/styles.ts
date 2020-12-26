import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    listContainer: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
    },
    listItemContainer: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: getLogicPixel(20),
    },
    listItemLabelContainer: {
        flex: 1,
        maxWidth: getLogicPixel(210)
    },
    listItemLabel: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
    },
    listItemLabelDisabled: {
        color: Color.SECONDARY_4,
    },
    listItemLabelDesc: {
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(12),
        color: Color.SECONDARY_3
    },
    listItemRightContainer: {
        flexDirection: "row",
        alignItems: "center",

    },
    listItemAvator: {
        marginRight: getLogicPixel(12)
    },
    listItemValue: {
        maxWidth: getLogicPixel(106),
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,
        marginRight: getLogicPixel(12)
    },
    listItemNoValue: {
        color: Color.SECONDARY_4
    },
    listItemPrimaryValue: {
        color: Color.ERROR
    }
});



