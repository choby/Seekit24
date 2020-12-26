import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modelContent: {
        width: getLogicPixel(288),
        minHeight: getLogicPixel(314),
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        borderRadius: getLogicPixel(8),

    },
    loginMethodIcon: {
        paddingTop: getLogicPixel(12),
        paddingLeft: getLogicPixel(12)
    },
    userInfoContainer: {
        paddingTop: getLogicPixel(4),
        width: "100%",
        flex: 1,
        alignItems: "center",
        marginBottom: getLogicPixel(20)
    },
    userInfoAvator: {
        width: getLogicPixel(66),
        height: getLogicPixel(66),
        borderRadius: getLogicPixel(66)
    },
    userInfoNickName: {
        height: getLogicPixel(50),
        lineHeight: getLogicPixel(55),
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_5,
        color: Color.SECONDARY_1,
    },
    userInfoRemark: {
        width: getLogicPixel(243),
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_2,
        textAlign: "center"
    },
    button: {
        width: "100%",
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
        height: getLogicPixel(47),
        justifyContent: "center",
        alignItems: "center"
    },
    continue: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.PRIMARY_DARK,
    },
    reject: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_2,
    }
});