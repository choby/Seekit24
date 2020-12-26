import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { SystemUtils } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    adBackground2: {
        height: getLogicPixel(196),
        borderRadius: getLogicPixel(8),
        backgroundColor: Color.WHITE,
        shadowOffset: {
            width: 0,
            height: 0
        },
        borderColor: Color.SEARCHBACK,
        borderWidth: SystemUtils.isAndroid ? 0.5 : 0,
        shadowColor: "#000",
        shadowOpacity: 0.06,
    },
    adBackground1: {
        height: getLogicPixel(200),
        borderRadius: getLogicPixel(8),
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(12),
        paddingTop: getLogicPixel(13),
        paddingBottom: getLogicPixel(16),
    },
    adTitle: {
        flexDirection: "row",
        height: getLogicPixel(24),
        alignItems: "center",
    },
    adTitleText: {
        fontSize: FontSize.TEXT_SIZE_6,
        marginLeft: getLogicPixel(5),
        color: Color.SECONDARY_1,
        fontFamily: FontFamily.SEMIBOLD
    },
    adListContainer: {
        marginTop: getLogicPixel(16),
        flexDirection: "row",
        justifyContent: "space-around",
    },
    adItem: {
        width: getLogicPixel(92), //预留2像素阴影宽度
        height: getLogicPixel(130)
    },
    adItemImageContainer: {
        width: getLogicPixel(95),
    },
    adItemImage: {
        width: getLogicPixel(90),
        height: getLogicPixel(90),
        borderRadius: getLogicPixel(5.52),
        opacity: 1
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: getLogicPixel(2),
        //     height: getLogicPixel(2)
        // },
        // shadowRadius: getLogicPixel(5.52),
        // shadowOpacity: 0.8
    },
    adItemImageShadow: {
        width: getLogicPixel(79),
        height: getLogicPixel(79),
        backgroundColor: hexToRGB("#FFFFFF", 0.2),
        borderWidth: getLogicPixel(0.5),
        borderColor: hexToRGB(Color.SECONDARY_1, 0.1),
        position: "absolute",
        right: 0,
        top: getLogicPixel(5),
        borderRadius: getLogicPixel(5.52),
        zIndex: -1
    },
    adItemTitle: {
        alignItems: "flex-start",
        paddingRight: getLogicPixel(8),
        paddingTop: getLogicPixel(3),
        justifyContent: "space-between"
    },
    adItemTitleTxtBig: {
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_1,
        height: getLogicPixel(20),
        fontFamily: FontFamily.REGULAR,
    },
    adItemTitleTxtSmall: {
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_2,
        fontFamily: FontFamily.REGULAR
    },

});