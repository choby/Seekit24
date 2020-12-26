import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        height: getLogicPixel(278),
        backgroundColor: "#4D5B72",
        position: "absolute",
        width: pixelRatio.screenSize.width,

    },
    linearGradient: {
        height: getLogicPixel(121),
        width: pixelRatio.screenSize.width,
        position: "absolute",
        bottom: 0,
        left: 0,

    },
    postNext: {
        color: Color.WHITE
    },
    successText: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.WHITE,
        paddingTop: getLogicPixel(32),
        paddingBottom: getLogicPixel(8)
    },
    goodsInfoContainer: {
        backgroundColor: Color.WHITE,
        flexDirection: "row",
        justifyContent: "flex-start",

        padding: getLogicPixel(12),
        borderRadius: getLogicPixel(16),
    },
    goodsImage: {
        width: getLogicPixel(94),
        height: getLogicPixel(94),
        borderRadius: getLogicPixel(8)
    },
    goodsInfoDesc: {
        flex: 1,
        justifyContent: "space-between",
        paddingLeft: getLogicPixel(12)
    },
    goodsInfoTitle: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
    },
    goodsInfoPriceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
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
    seeDetailBtn: {
        width: getLogicPixel(97),
        height: getLogicPixel(28),
        paddingHorizontal: 0,
    }
});



