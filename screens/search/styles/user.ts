import { StyleSheet } from "react-native";
import { Color,  FontFamily } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    userInfoItemConainer: {
        flexDirection: "row",
        alignItems: "center",
        height: getLogicPixel(48),
        marginTop:getLogicPixel(40)
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
    userInfoStatus:{
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(12),
        color: Color.SECONDARY_3
    },
    followButton: {
        width: getLogicPixel(70),
        paddingLeft: 0,
        paddingRight: 0
    }
});
