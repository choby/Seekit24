import { StyleSheet } from "react-native";
import { getLogicPixel, getFontLogicSize } from "@/utils/pixelRatio";
import { hexToRGB } from "@/theme";
import { Color, FontFamily } from "@/theme/variables";

export default StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: getLogicPixel(46),
        borderWidth: getLogicPixel(0.5),
        borderColor: hexToRGB(Color.SECONDARY_2, 0.3),
        borderRadius: getLogicPixel(8),
        alignItems: "center",
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(12),
        marginTop: getLogicPixel(20)
    },
    listItemSelected: {
        borderColor: Color.ERROR,
    },
    listitemLabelContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:"center"
    },
    listItemImage: {
        width: getLogicPixel(40),
        height: getLogicPixel(40)
    },
    listItemText: {
        fontSize: getFontLogicSize(14),
        fontFamily: FontFamily.MEDIUM,
        color: Color.SECONDARY_1,
    },
    listItemTextSelected: {
        color: Color.ERROR
    }
});