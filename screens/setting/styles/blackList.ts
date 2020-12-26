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
    pageTitleQuantity: {
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(16),
        color: Color.SECONDARY_3
    },
    container: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
        paddingTop: getLogicPixel(16)
    },
    userInfoItemConainer: {
        flexDirection: "row",
        alignItems: "center",
        height: getLogicPixel(48),
        marginBottom: getLogicPixel(40)
    },
    userInfoAvator: {
        width: getLogicPixel(48),
        height: getLogicPixel(48),
        borderRadius: getLogicPixel(48)
    },
    userInfoContainer: {
        flex: 1,
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(12),
        justifyContent: "space-between"
    },
    userInfoNickName: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: getLogicPixel(14),
        color: Color.SECONDARY_1
    },
    userInfoGender: {
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(12),
        color: Color.SECONDARY_3
    },
    userInfoStatus: {
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(12),
        color: Color.SECONDARY_3
    },
});



