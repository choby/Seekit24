import { StyleSheet } from "react-native";
import { getLogicPixel } from "@/utils/pixelRatio";
import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";

export default StyleSheet.create({
    listItemContainer: {
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(12),
        marginTop: getLogicPixel(20),
        borderWidth: getLogicPixel(0.5),
        borderColor: hexToRGB(Color.SECONDARY_2, 0.3),
        borderRadius: getLogicPixel(8),
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: getLogicPixel(46),

        alignItems: "center",

    },
    listItemSelected: {
        borderColor: Color.ERROR,
    },
    listitemLabelContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    listItemImage: {
        width: getLogicPixel(40),
        height: getLogicPixel(40)
    },
    listItemText: {
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.MEDIUM,
        color: Color.SECONDARY_1,
    },
    listItemTextSelected: {
        color: Color.ERROR
    },
    listItemTagsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingBottom: getLogicPixel(4)
    },
    listitemTag: {
        height: getLogicPixel(40),
        width: getLogicPixel(149),
        backgroundColor: "#F3F6F8",
        paddingLeft: getLogicPixel(12),
        justifyContent: "center",
        borderRadius: getLogicPixel(4),
        marginBottom: getLogicPixel(12)
    },
    listitemTagSelected: {
        backgroundColor: Color.ERROR
    },
    listitemTagText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,
    },
    listitemTagTextSelected: {
        color: "#FFFFFF"
    }
});