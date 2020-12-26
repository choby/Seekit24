import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

const RECOMMENDITEM_WIDTH = (pixelRatio.screenSize.width - getLogicPixel(50)) / 2;

export default StyleSheet.create({
    item: {
        width: RECOMMENDITEM_WIDTH,
        // backgroundColor: 'rgb(92, 67, 155)',
        marginTop: getLogicPixel(10),
        marginRight: getLogicPixel(10),
        borderRadius: getLogicPixel(10),
        justifyContent: "flex-start",

        // shadowColor: "#2E496D",
        // shadowOffset: {
        //     width: 1,
        //     height: 0
        // },
        // shadowOpacity: 0.04,
        backgroundColor: "#FFFFFF",
        overflow: "hidden"
    },
    itemImage: {
        // borderTopRightRadius: getLogicPixel(10),
        // borderTopLeftRadius: getLogicPixel(10),
        width: RECOMMENDITEM_WIDTH,
        height: "auto"
    },
    itemTitleContainer: {
        paddingTop: getLogicPixel(10),
        paddingHorizontal: getLogicPixel(12),

    },
    itemTitleTxt: {
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_1,
        fontFamily: FontFamily.REGULAR,

    },
    itemTagContainer: {
        flexDirection: "row",
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(12)
    },
    itemTag: {
        marginRight: getLogicPixel(4),
        height: getLogicPixel(16),
        padding: 0,
        justifyContent: "center",
        borderRadius: getLogicPixel(2),
        backgroundColor: "#FFFFFF"
    },
    itemTag_new: {
        borderColor: hexToRGB("#6B788F", 0.5),
        borderWidth: getLogicPixel(0.5)
    },
    itemTag_discout: {
        borderColor: Color.ERROR,
        borderWidth: getLogicPixel(0.5)
    },
    itemTagTxt: {
        fontSize: FontSize.TEXT_SIZE_1,
        lineHeight: getLogicPixel(10),
        fontFamily: FontFamily.REGULAR
    },
    itemTagTxt_new: {
        color: Color.SECONDARY_2
    },
    itemTagTxt_discout: {
        color: Color.ERROR
    },
    itemPriceContainer: {
        height: getLogicPixel(32),
        paddingLeft: getLogicPixel(12),
        paddingBottom: getLogicPixel(6),

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
    itemUser: {
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(12),
        flexDirection: "row",
        marginBottom: getLogicPixel(12),
        alignItems: "center"
    },
    itemUserAvatar: {
        width: getLogicPixel(24),
        height: getLogicPixel(24),
        borderRadius: getLogicPixel(24)
    },

    itemUserName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_3,
        paddingLeft: getLogicPixel(8)
    }
});