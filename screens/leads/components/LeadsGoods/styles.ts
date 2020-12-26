import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";



export default StyleSheet.create({

    goodsInfo: {
        flexDirection: "row",
        backgroundColor: Color.PAGEBACK,
        borderRadius: getLogicPixel(8),
        height: getLogicPixel(48),
        alignItems: "center",
        paddingRight: getLogicPixel(12),
        marginTop: getLogicPixel(10),
    },
    goodsImage: {
        width: getLogicPixel(48),
        height: getLogicPixel(48),
        borderTopLeftRadius: getLogicPixel(8),
        borderBottomLeftRadius: getLogicPixel(8)
    },
    goodsDesc: {
        flex: 1,
        paddingHorizontal: getLogicPixel(8)
    },
    goodsName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2
    },
    goodsPrice: {
        fontFamily: FontFamily.DINALTERNATE_BOLD,
        fontSize: FontSize.NUMERIC_SIZE_3,
        color: Color.PRIMARY
    },
    goodsPriceCurrency: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_2,
    },

});

