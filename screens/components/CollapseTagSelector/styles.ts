import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    listItemContainer: {
        borderWidth: 0,

    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20)
    },
    listItemSelected: {
        borderColor: Color.ERROR,
    },
    listitemLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listItemImage: {
        width: getLogicPixel(40),
        height: getLogicPixel(40)
    },
    listItemText: {
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_1,
    },
    listItemTextSelected: {
        fontFamily: FontFamily.MEDIUM,

    },
    listItemTagsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingBottom: getLogicPixel(4)
    },
    listitemTag: {
        width: "100%",
        height: getLogicPixel(40),
        paddingLeft: getLogicPixel(12),
        justifyContent: "center",
        borderRadius: getLogicPixel(8),
        marginBottom: getLogicPixel(12),
        borderWidth: getLogicPixel(0.5),
        borderColor: Color.SECONDARY_4
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
        color: Color.ERROR
    }
});