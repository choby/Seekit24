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
    },
    goodsInfoUserContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
        alignItems: "center"
    },
    goodsInfoUser: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    goodsInfoUserNickName: {
        marginLeft: getLogicPixel(8),
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2
    },
    goodsInfoTime: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_3
    },

    goodsInfoContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingBottom: getLogicPixel(20),

    },
    goodsImage: {
        width: getLogicPixel(94),
        height: getLogicPixel(94),
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

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    goodsInfoAssets: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    goodsInfoAssetsText: {
        fontSize: FontSize.NUMERIC_SIZE_1,
        color: Color.SECONDARY_3,
        fontFamily: FontFamily.REGULAR,
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
        justifyContent: "space-between"
    },
});



