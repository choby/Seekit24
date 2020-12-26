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
    waitingListContainer: {
        height: getLogicPixel(68),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),

    },
    waitingTitleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    waitingTitle: {
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(16),
        color: Color.SECONDARY_1,
        paddingLeft: getLogicPixel(12)
    },
    waitingMore: {
        flexDirection: "row",

    },
    waitingBadge: {
        backgroundColor: Color.ERROR,
        height: getLogicPixel(17),
        marginRight: getLogicPixel(12)
    },
    waitingBadgeLabel: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.NUMERIC_SIZE_1,

    },
    goodsInfoListContainer: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),

    },
    goodsInfoItemContainer: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
        paddingBottom: getLogicPixel(20),
        paddingTop: getLogicPixel(20),
    },
    goodsInfoContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingBottom: getLogicPixel(20),
    },
    goodsImage: {
        width: getLogicPixel(94),
        height: getLogicPixel(94),
        borderRadius: getLogicPixel(8)
    },
    goodsInfoDesc: {
        flex: 1,
        justifyContent: "space-between",
        paddingLeft: getLogicPixel(12),
    },
    goodsInfoTitle: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
    },
    goodsInfoAssetsContainer: {
        width: getLogicPixel(126),
        marginTop: getLogicPixel(4),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    goodsInfoAssetsItem: {
        flexDirection: "row",
        alignSelf: "flex-start"
    },
    goodsInfoAssets: {
        fontSize: FontSize.NUMERIC_SIZE_1,
        color: Color.SECONDARY_3,
        fontFamily: FontFamily.REGULAR,
        textAlign: "center",
        marginLeft: getLogicPixel(2)
    },
    goodsInfoPriceCurrency: {
        color: Color.PRIMARY,
        fontSize: FontSize.NUMERIC_SIZE_2,
        fontFamily: "DINAlternate-Bold",
        letterSpacing: getLogicPixel(3)
    },
    goodsInfoPriceAmount: {
        fontSize: FontSize.NUMERIC_SIZE_4,
        letterSpacing: 0
    },
    goodsInfoButtons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingLeft: getLogicPixel(106)
    },
    goodsInfoButton: {
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



