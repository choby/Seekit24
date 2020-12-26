import { StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "@/theme/variables";
import  { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    pageTitle: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1,
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20)
    },
    verficationCodeContainer: {


    },

    verficationPhoneContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: getLogicPixel(16.8),

    },
    phoneNumber: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_2
    },
    sendButton: {
        position: "absolute",
        right: getLogicPixel(0),
        top: getLogicPixel(4)
    },
    send: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.ERROR
    },
    otpInputStyle: {
        height: getLogicPixel(45)
    },
    underlineStyleBase: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: Color.SECONDARY_3,
        fontSize: FontSize.NUMERIC_SIZE_6,
        fontFamily: FontFamily.DINALTERNATE_BOLD,
        color: Color.SECONDARY_1
    },
    submitContainer: {
        paddingTop: getLogicPixel(44)
    }
});



