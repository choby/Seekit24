import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    navContainer: {
        flexWrap: "wrap",
        flexDirection: "row",

    },
    navItem: {
        flexBasis: "25%",
        alignItems: "center",
        justifyContent: "flex-start",
        height: getLogicPixel(60)
    },
    navItemText: {
        color: Color.SECONDARY_1,
        marginTop: getLogicPixel(4),
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR
    },
    tabBar: {
        backgroundColor: "#FFFFFF",//hexToRGB("#FFFFFF", 0.7),
        shadowColor: "#fff",

    },
    indicator: {
        backgroundColor: Color.ERROR,
        height: getLogicPixel(6),
        borderRadius: getLogicPixel(6),
        width: getLogicPixel(9),
        marginLeft: getLogicPixel(55),
    },
    tab: {
        width: getLogicPixel(100),
        height: getLogicPixel(55),

    },
    tabLabelContainer: {
        width: getLogicPixel(85),
        height: getLogicPixel(32),
        justifyContent: "flex-end",
        marginLeft: getLogicPixel(20),

    },
    tabLabel: {
        fontSize: FontSize.TEXT_SIZE_5,
        color: Color.SECONDARY_1,
        fontWeight: "500",
        justifyContent: "flex-end",
    },
    tabLabelFocus: {
        fontSize: FontSize.TEXT_SIZE_7
    },
    bottomTabs: {
        backgroundColor: "#FFFFFF",
        marginBottom: 0,
        height: getLogicPixel(49),
        paddingBottom: getLogicPixel(3),
        borderTopColor: hexToRGB("#002695", 0.092),
        borderTopWidth: 0.5,
        elevation: 0
    },

    bottomTabsItem: {
        height: getLogicPixel(49),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: getLogicPixel(3),
        paddingVertical: getLogicPixel(0),
        paddingTop: getLogicPixel(8)
    },
    bottomTabsItemName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_1,
        includeFontPadding: false,

        paddingTop: -4
    },
    bottomTabsItemNameUnActive: {
        color: hexToRGB(Color.SECONDARY_1, 0.3)
    },

    bottomTabsItemMiddle: {
        width: getLogicPixel(49),
        height: getLogicPixel(49),
        alignItems: "center",
        justifyContent: "center",
        paddingTop: getLogicPixel(5)

    },


    bottomTabsItemMiddleIcon: {
        width: getLogicPixel(38),
        height: getLogicPixel(38),
        borderRadius: getLogicPixel(38),
        backgroundColor: Color.PRIMARY,
        justifyContent: "center",
        alignItems: "center",


    }
});