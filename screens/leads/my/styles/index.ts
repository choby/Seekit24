import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    pageTitleContainer: {
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(15),
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: "#E1E4E9"
    },

    tipContainer: {
        backgroundColor: hexToRGB("#FF8F59", 0.1),
        paddingTop: getLogicPixel(12),
        paddingBottom: getLogicPixel(12),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20)
    },
    tipText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.WARNING
    },
    tipCloseIcon: {
        position: "absolute",
        top: getLogicPixel(4),
        right: getLogicPixel(8)
    },
    tabBar: {
        backgroundColor: "#FFFFFF",
        shadowColor: "#fff",
        elevation: 0
    },
    tab: {
        width: getLogicPixel(100),
        height: getLogicPixel(45),

    },
    tabLabelContainer: {
        width: getLogicPixel(67),
        height: getLogicPixel(32),
        justifyContent: "center",
        marginLeft: getLogicPixel(10),
    },
    tabLabel: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
        justifyContent: "flex-end",
    },
    tabLabelFocus: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
    },
    indicator: {
        backgroundColor: Color.ERROR,
        height: getLogicPixel(6),
        borderRadius: getLogicPixel(6),
        width: getLogicPixel(9),
        marginLeft: getLogicPixel(52),
    },
    notifyItemContainer: {
        paddingTop: getLogicPixel(10),
        paddingBottom: getLogicPixel(10)
    },
    badge: {
        position: "absolute",
        top: 0,
        right: 0,
        borderColor: "#FFFFFF",
        zIndex: 1
        //borderWidth: getLogicPixel(2)
    },
    notifyItemSwiper: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: getLogicPixel(10),
        paddingBottom: getLogicPixel(10),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20)
    },
    notifyContentContainer: {
        paddingLeft: getLogicPixel(12),
        flex: 1
    },
    notifyTitle: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
    },
    notifyContent: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3
    },
    notifyTime: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_3,
    },
    notifyImage: {
        width: getLogicPixel(54),
        height: getLogicPixel(54),
        borderRadius: getLogicPixel(9),
        marginLeft: getLogicPixel(12)
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        backgroundColor: Color.ERROR,
        borderRadius: 0
    },
    leadsContent: {
        height: getLogicPixel(32),
        borderRadius: getLogicPixel(8),
        backgroundColor: "#F8F9FA",
        marginLeft: getLogicPixel(80),
        marginRight: getLogicPixel(20),
        justifyContent: "center",
        paddingHorizontal: getLogicPixel(8)
    },
    leadsContentText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3
    },
    leadsInfoListContainer: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),

    },
    leadsInfoItemContainer: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
        paddingBottom: getLogicPixel(20),
        paddingTop: getLogicPixel(20),
    },
    leadsInfoContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingBottom: getLogicPixel(20),
    },
    leadsImage: {
        width: getLogicPixel(94),
        height: getLogicPixel(94),
        borderRadius: getLogicPixel(8)
    },
    leadsInfoDesc: {
        flex: 1,
        justifyContent: "space-between",
        paddingLeft: getLogicPixel(12),
    },
    leadsInfoTitle: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,

    },
    leadsInfoAssetsContainer: {
        width: getLogicPixel(126),

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leadsInfoAssets: {
        fontSize: FontSize.NUMERIC_SIZE_1,
        color: Color.SECONDARY_3,
        fontFamily: FontFamily.REGULAR
    },

    leadsInfoPriceCurrency: {
        color: Color.PRIMARY,
        fontSize: FontSize.NUMERIC_SIZE_2,
        fontFamily: "DINAlternate-Bold",
        letterSpacing: getLogicPixel(3)
    },
    leadsInfoPriceAmount: {
        fontSize: FontSize.NUMERIC_SIZE_4,
        letterSpacing: 0
    },
    leadsInfoButtons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: getLogicPixel(106)
    },
    leadsInfoButton: {
        marginRight: getLogicPixel(12)
    },
    noMore: {
        marginVertical: getLogicPixel(20),
        alignItems: "center"
    },
    noMoreText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        textAlign: "center"
    },
    noMoreReleaseText: {
        color: Color.ERROR
    }
});



