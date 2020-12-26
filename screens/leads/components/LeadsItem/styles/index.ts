import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { SystemUtils } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";



export default StyleSheet.create({
    backgroundWhite: {
        backgroundColor: "#FFFFFF",
    },
    demandItemContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: getLogicPixel(20),

    },
    demandItemSeparator: {
        height: getLogicPixel(20),
        borderBottomWidth: getLogicPixel(SystemUtils.isAndroid ? 1 : 0.5),
        borderBottomColor: SystemUtils.isAndroid ? hexToRGB(Color.SEPARATOR, 0.5) : Color.SEPARATOR,
        backgroundColor: Color.WHITE,

    },
    contentUserContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: getLogicPixel(48),
        paddingBottom: getLogicPixel(7),
        alignItems: "center",

    },
    contentUserInfoContainer: {
        flex: 1,
        flexDirection: "row"
    },
    contentUserInfoDescContainer: {
        paddingLeft: getLogicPixel(12),
        height: getLogicPixel(48),
        justifyContent: "space-around",
        paddingVertical: getLogicPixel(7)
    },
    contentUserInfoNameText: {
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_2
    },
    contentUserInfoPositionText: {
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_3
    },
    contentContainer: {
        paddingLeft: getLogicPixel(60)
    },
    contentText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
        flex: 1
    },
    adsHash: {
        color: Color.PROCESSING
    },
    contentImageList: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingTop: getLogicPixel(8),

    },
    contentImage: {
        marginLeft: getLogicPixel(4)
    },
    contentImageFirst: {
        borderTopLeftRadius: getLogicPixel(8),
        borderBottomLeftRadius: getLogicPixel(8),
        paddingTop: getLogicPixel(11),
        paddingBottom: getLogicPixel(20),
        marginLeft: getLogicPixel(0)
    },
    contentImageItemContainer: {
        width: getLogicPixel(89),
        height: getLogicPixel(89),
    },
    contentImageLast: {
        borderTopRightRadius: getLogicPixel(8),
        borderBottomRightRadius: getLogicPixel(8)
    },
    hasMore: {
        width: getLogicPixel(89),
        height: getLogicPixel(89),
        borderTopRightRadius: getLogicPixel(8),
        borderBottomRightRadius: getLogicPixel(8),
        backgroundColor: hexToRGB("#000000", 0.3),
        position: "absolute",
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    hasMoreText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.NUMERIC_SIZE_5,
        color: "#FFFFFF"
    },
    replyContainer: {

    },

    replyUserInfoNameText: {
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_2
    },

    replyContentContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    replyFunctions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: getLogicPixel(28),
        marginTop: getLogicPixel(16),

    },
    replyInput: {
        flexDirection: "row",
        borderRadius: getLogicPixel(8),
        height: getLogicPixel(28),
        alignItems: "center",
        paddingRight: getLogicPixel(12),
        flex: 1
    },
    replyPlaceholder: {
        color: Color.SECONDARY_3,
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        textAlignVertical: "center",
        marginLeft: getLogicPixel(8)
    },
    replyQtyContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: getLogicPixel(20)
    },
    replyQty: {
        marginLeft: getLogicPixel(6),
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.NUMERIC_SIZE_1,
        color: Color.SECONDARY_2
    }
});

