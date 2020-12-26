import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { SystemUtils } from "@/utils";
import pixelRatio, { getFontLogicSize, getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    opacityContainer: {
        flex: 1,
        backgroundColor: hexToRGB("#131A25", 0.8)
    },
    userInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: getLogicPixel(24),
        paddingBottom: getLogicPixel(20)
    },
    userAvator: {
        marginRight: getLogicPixel(12)
    },
    userInfoRightContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    userNickContainer: {
        justifyContent: "space-between",
    },
    userNickName: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: getFontLogicSize(24),
        color: "#FFFFFF"
    },
    fansContainer: {
        flexDirection: "row",
    },
    fansLabel: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: hexToRGB("#FFFFFF", 0.75)
    },
    fansQty: {
        fontFamily: FontFamily.DINALTERNATE_BOLD,
        fontSize: FontSize.NUMERIC_SIZE_3,
        color: "#FFFFFF",
        marginLeft: getLogicPixel(4)
    },
    fansSpace: {
        marginLeft: getLogicPixel(20)
    },
    button: {
        width: getLogicPixel(70),
        height: getLogicPixel(30)
    },
    editButton: {
        backgroundColor: hexToRGB("#FFFFFF", 0.5),
    },
    editButtonText: {
        color: "#FFFFFF"
    },
    userAddress: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: hexToRGB("#FFFFFF", 0.75)
    },
    container: {
        ...(StyleSheet.absoluteFill as any),
        top: getLogicPixel(238 - (SystemUtils.isAndroid ? pixelRatio.statusBarHeight : 0)),
        borderTopLeftRadius: getLogicPixel(16),
        borderTopRightRadius: getLogicPixel(16),
        backgroundColor: "#FFFFFF",
        paddingTop: getLogicPixel(10)
    },
    scrollViewContainer: {
        borderTopLeftRadius: getLogicPixel(8),
        borderTopRightRadius: getLogicPixel(8),
    },
    background: {
        backgroundColor: Color.PAGEBACK
    },
    releasedHeader: {
        flexDirection: "row",
        paddingTop: getLogicPixel(10),
        alignItems: "baseline"
    },
    releasedText: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_6,
        color: Color.SECONDARY_1
    },
    releasedQty: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        marginLeft: getLogicPixel(4)
    }
});



