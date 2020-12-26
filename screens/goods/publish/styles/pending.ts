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

    goodsInfoContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
        paddingBottom: getLogicPixel(20),
        marginTop: getLogicPixel(20)
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
        height: getLogicPixel(142)
    },
    goodsInfoTitle: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,

    },
    goodsInfoAssetsContainer: {
        height: getLogicPixel(35),
        justifyContent: "center"
    },
    goodsInfoAssets: {
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        fontFamily: FontFamily.REGULAR
    },
    goodsInfoPriceContainer: {
        alignItems: "flex-start",
        justifyContent: "space-between",
        height: getLogicPixel(70)
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
        justifyContent: "flex-end"
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
    },
    goodsInfoDelButton: {
        marginLeft: getLogicPixel(12)
    }
});



