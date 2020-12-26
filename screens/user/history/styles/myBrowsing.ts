import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    container: {
        backgroundColor: "#F8f9fa"
    },
    dateGoodsListContainer: {
        paddingBottom: getLogicPixel(18)
    },
    dateText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.NUMERIC_SIZE_2,
        color: Color.SECONDARY_3,
        paddingBottom: getLogicPixel(16),
        paddingTop: getLogicPixel(23)
    },
    item: {
        width: getLogicPixel(103),

        marginRight: getLogicPixel(10),
        borderRadius: getLogicPixel(7.17),
        justifyContent: "flex-start",
        shadowColor: "#2e496d",
        shadowOpacity: 0.04,
        shadowOffset: {
            width: getLogicPixel(1),
            height: getLogicPixel(2)
        },
        backgroundColor: "#FFFFFF",
        paddingBottom: getLogicPixel(12)
    },
    tag: {
        position: "absolute",
        zIndex: 2,
        left: getLogicPixel(11),
        top: getLogicPixel(28)
    },
    itemImage: {
        borderTopLeftRadius: getLogicPixel(7.17),
        borderTopRightRadius: getLogicPixel(7.17),
        width: getLogicPixel(103),
        height: getLogicPixel(103)
    },
    itemTitleContainer: {
        paddingTop: getLogicPixel(9),
        paddingLeft: getLogicPixel(8),
        paddingRight: getLogicPixel(8),
        paddingBottom: getLogicPixel(9),
    },
    itemTitleTxt: {
        fontSize: FontSize.TEXT_SIZE_3,
        color: "#3B4657",
        lineHeight: getLogicPixel(15),
        fontFamily: FontFamily.REGULAR,
        textAlignVertical: "center"
    },
    goodsInfoAssetsContainer: {
        width: getLogicPixel(72),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    goodsInfoAssets: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: getLogicPixel(8)
    },
    goodsInfoAssetsText: {
        fontSize: FontSize.NUMERIC_SIZE_1,
        color: Color.SECONDARY_3,
        fontFamily: FontFamily.REGULAR,
        marginLeft: getLogicPixel(2)
    },
    itemPriceContainer: {
        height: getLogicPixel(32),
        paddingLeft: getLogicPixel(12),
        paddingTop: getLogicPixel(6),

    },
    itemPriceCurrency: {
        color: Color.PRIMARY,
        fontSize: FontSize.NUMERIC_SIZE_2,
        fontFamily: "DINAlternate-Bold",
        letterSpacing: getLogicPixel(3)
    },
    itemPriceAmount: {
        fontSize: FontSize.NUMERIC_SIZE_4,
        letterSpacing: 0
    },

});
