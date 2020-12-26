import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        paddingLeft: getLogicPixel(20)
    },
    limitText: {
        color: Color.WARNING,
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2
    },
    addButton: {
        borderWidth: getLogicPixel(1),
        borderColor: Color.SEPARATOR,
        borderRadius: getLogicPixel(8),
        backgroundColor: Color.WHITE,
        flexDirection: "row",
        width: pixelRatio.screenSize.width - getLogicPixel(40),
        height: getLogicPixel(78),
        zIndex: 99,
        alignItems: "center",
        shadowColor: "#2E496D",
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.06,
        paddingHorizontal: getLogicPixel(12),
        marginTop: getLogicPixel(32),
    },
    addButtonText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_2,
        marginLeft: getLogicPixel(12),
        flex: 1
    },
    goodsInfoItemContainer: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
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
    closeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: getLogicPixel(20)
    },
    reselectText: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1,
    },
    relGoodsInfo: {
        flex: 1,
        marginLeft: getLogicPixel(12),
        justifyContent: "center"
        //paddingTop: getLogicPixel(18),
        //paddingBottom: getLogicPixel(18)
    },
    relGoodsImage: {
        width: getLogicPixel(56),
        height: getLogicPixel(56),
        borderRadius: getLogicPixel(4),
    },
    relGoodsName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_2,
        marginBottom: getLogicPixel(3)
    },
    relPriceCurrency: {
        color: Color.PRIMARY,
        fontSize: FontSize.NUMERIC_SIZE_1,
        fontFamily: "DINAlternate-Bold",
        letterSpacing: getLogicPixel(3)
    },
    relPriceAmount: {
        fontSize: FontSize.NUMERIC_SIZE_3_5,
        letterSpacing: 0
    },
    relCancelIcon: {
        position: "absolute",
        zIndex: 2,
        top: 0,
        right: 0,
        borderTopRightRadius: getLogicPixel(8),
    },
    imageTipsContainer: {
        marginTop: getLogicPixel(15),
        flexDirection: "row"
    },
    imageTipsText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_4,
        marginLeft: getLogicPixel(4)
    }
});
