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
    goodsStatusContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

        paddingBottom: getLogicPixel(20),
        alignItems: "center"
    },
    goodsStatus: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    goodsStatusText: {
        marginLeft: getLogicPixel(8),
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2
    },
    goodsStatusMore: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.ERROR
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
    goodsInfoTitleDisabled: {
        color: Color.SECONDARY_4
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
        fontFamily: FontFamily.REGULAR
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
    goodsInfoButtonItem: {
        marginLeft: getLogicPixel(12)
    },
    noMore: {
        marginTop: getLogicPixel(20),
        alignItems: "center"
    },
    noMoreText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
    },

});



