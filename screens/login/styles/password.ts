import FormField from "@/components/Input/FormField";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: getLogicPixel(40),
        paddingRight: getLogicPixel(40),
        paddingBottom: getLogicPixel(20),
        flexDirection: "column",
        justifyContent: "space-between",
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",

    },


    otherLoginContainer: {
        paddingTop: getLogicPixel(20),
        flex: 1
    },
    otherLoginText: {
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_3,
        textAlign: "center"
    },
    otherLoginLogos: {
        paddingTop: getLogicPixel(20),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20)
    },
    pickerLabel: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
        paddingRight: getLogicPixel(4)
    },
    input: {
        ...FormField.defaultProps.textInputStyle as any,
        letterSpacing: getLogicPixel(10)
    },
    passwordTextContainer: {
        paddingTop: getLogicPixel(17)
    },
    passwordText: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2
    },
    loginButtonContainer: {
        paddingTop: getLogicPixel(33),
        paddingBottom: getLogicPixel(20)
    },
    loginButtonText: {
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_5,
    },
    forgetContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    forgetTouch1: {
        flex: 3,
        justifyContent: "flex-start"

    },
    forgetTouch2: {
        flex: 2,
        justifyContent: "flex-start"
    },
    forgetText1: {
        color: Color.SECONDARY_3,
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.REGULAR
    },
    forgetText2: {

        textAlign: "right",
        color: Color.SECONDARY_3,
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.REGULAR
    },
    agreement: {

    },
    changeAccount: {
        marginTop: getLogicPixel(48),
        alignItems: "center"
    },
    changeAccountBtn: {
        width: getLogicPixel(158)
    }
});