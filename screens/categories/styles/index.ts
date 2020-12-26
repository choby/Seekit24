import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "@/theme/variables";
import { hexToRGB } from "@/theme";
import { getLogicPixel, getFontLogicSize } from "@/utils/pixelRatio";

export default StyleSheet.create({
    cateNameContainer: {
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(32)
    },
    cateNameText: {
        fontSize: FontSize.TEXT_SIZE_7,
        fontFamily: FontFamily.SEMIBOLD,
        color: Color.SECONDARY_1
    },
    hotBrandsContainer: {
        paddingTop: getLogicPixel(40),
    },
    hotBrandsHeadContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: getLogicPixel(20)
    },
    hotBrandsHeadText: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1,
    },
    hotBrandsHeadMore: {
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,
        fontFamily: FontFamily.REGULAR,
    },
    hotBrandsLogosContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    hotBrandsItemContainer: {
        flexBasis: "25%",
        marginBottom: getLogicPixel(12)
    },
    hotBrandsItem: {
        width: getLogicPixel(74),
        height: getLogicPixel(42),
        borderWidth: getLogicPixel(0.5),
        borderRadius: getLogicPixel(6),
        borderColor: "#E1E4E9",
        shadowColor: "#2e496d",
        shadowOpacity: 0.04,
        shadowOffset: {
            width: getLogicPixel(1),
            height: getLogicPixel(1)
        }
    },

    hotModelsContainer: {
        paddingTop: getLogicPixel(30),
    },
    hotModelsListContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    hotModelsItemContainer: {
        width: getLogicPixel(160),
        height: getLogicPixel(57),
        flexDirection: "row",
        backgroundColor: "#F8F9FA",
        borderRadius: getLogicPixel(8),
        alignItems: "center",
        paddingLeft: getLogicPixel(6),
        paddingRight: getLogicPixel(6),
        justifyContent: "flex-start",
        marginBottom: getLogicPixel(12)
    },
    hotModelsItemImage: {
        width: getLogicPixel(45),
            height: getLogicPixel(45),
    },
    hotModelsItemDescContainer: {
        paddingLeft: getLogicPixel(6),
        flex: 1
    },
    hotModelsItemDescTitle: {
        width: "auto",
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_1,
        fontFamily: FontFamily.MEDIUM,
        overflow: "hidden"
    },
    hotModelsItemDescDetail: {
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_3,
    },
    hotExcellentContainer: {
        paddingTop: getLogicPixel(30),
    },

    hotExcellentItemContainer: {
        height: getLogicPixel(90),
        width: getLogicPixel(66),
        justifyContent: "space-between",
        marginRight: getLogicPixel(16),
        marginBottom: getLogicPixel(5)
    },
    hotExcellentItemImage: {
        width: getLogicPixel(66),
        height: getLogicPixel(66),
        borderRadius: getLogicPixel(66)
    },
    hotExcellentItemText: {
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_2
    },
    indicator: {
        backgroundColor: Color.ERROR,
        height: getLogicPixel(6),
        borderRadius: getLogicPixel(6),
        width: getLogicPixel(9),
        marginLeft: getLogicPixel(55),
    },
    tabBar: {
        backgroundColor: hexToRGB("#FFFFFF", 0.7),
        shadowColor: "#fff"
    },
    tab: {
        width: getLogicPixel(157),
        height: getLogicPixel(55),

    },
    tabLabelContainer: {
        width: getLogicPixel(85),
        height: getLogicPixel(32),
        justifyContent: "flex-end",
        marginLeft: getLogicPixel(20),

    },
    tabLabelContainerLong: {
        width: getLogicPixel(177)
    },
    tabLabel: {
        fontSize: getFontLogicSize(18),
        color: Color.SECONDARY_1,
        fontWeight: "500",
        justifyContent: "flex-end",
        fontFamily: FontFamily.REGULAR
    },
    tabLabelFocus: {
        fontSize: FontSize.TEXT_SIZE_6,
        fontFamily: FontFamily.MEDIUM
    },
});