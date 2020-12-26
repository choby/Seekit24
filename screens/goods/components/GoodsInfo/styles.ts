import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getFontLogicSize, getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

const RECOMMENDITEM_WIDTH = (pixelRatio.screenSize.width - getLogicPixel(40));

export default StyleSheet.create({

    goodsInfoContainer: {
        paddingTop: 16
    },
    goodsInfoPriceContainer: {
        flexDirection: "row",
        alignItems: "baseline"
    },
    goodsInfoPriceCurrency: {
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.ERROR,
        fontFamily: FontFamily.DINALTERNATE_BOLD,
        letterSpacing: getLogicPixel(3)
    },
    goodsinfoPrice: {
        fontSize: getFontLogicSize(22),
        color: Color.ERROR,
        fontFamily: FontFamily.DINALTERNATE_BOLD
    },
    goodsInfoTextContainer: {

    },
    goodsInfoTextTitle: {
        fontSize: FontSize.TEXT_SIZE_6,
        fontFamily: FontFamily.MEDIUM,
        color: Color.SECONDARY_1,
        paddingTop: getLogicPixel(16),
        paddingBottom: getLogicPixel(8)
    },
    goodsInfoTextDetail: {
        fontSize: FontSize.TEXT_SIZE_4,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_2,
    },
    goodsInfoImageListContainer: {
        alignItems: "center",
        paddingTop: getLogicPixel(8)
    },
    goodsInfoImage: {
        width: RECOMMENDITEM_WIDTH,
        marginTop: getLogicPixel(8)
    },
    goodsInfoImageFirst: {
        borderTopLeftRadius: getLogicPixel(8),
        borderTopRightRadius: getLogicPixel(8),
    },
    goodsInfoImageLast: {
        borderBottomLeftRadius: getLogicPixel(8),
        borderBottomRightRadius: getLogicPixel(8),
    },
    goodsInfoImageVideo: {
        width: RECOMMENDITEM_WIDTH,
        height: RECOMMENDITEM_WIDTH * 3 / 4,
        marginTop: getLogicPixel(12)
    },

});
