import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    userContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: Color.SEPARATOR,
        paddingTop: getLogicPixel(8),
        paddingBottom: getLogicPixel(18),
        alignItems: "center",

    },
    userInfoContainer: {
        flex: 1,
        flexDirection: "row",
    },
    userInfoDescContainer: {
        paddingLeft: getLogicPixel(8)
    },
    userInfoNameText: {
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.MEDIUM,
        color: Color.SECONDARY_1
    },
    userInfoPositionText: {
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_3
    },
    socialInfoContainer: {
        height: getLogicPixel(77),
        flexDirection: "row",
        borderColor: "#E1E4E9",
        borderRadius: getLogicPixel(8),
        borderWidth: getLogicPixel(1),
        marginTop: getLogicPixel(40),
        justifyContent: "space-between",
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(14),
        alignItems: "center"
    },
    socialInfoContainerLeft: {
        flexDirection: "row"
    },
    socialInfoAvator: {
        width: getLogicPixel(48),
        height: getLogicPixel(48),
        borderRadius: getLogicPixel(48)
    },
    socialInfoDescContainer: {
        paddingLeft: getLogicPixel(12),
        justifyContent: "center"
    },
    socialInfoNameText: {
        fontSize: FontSize.TEXT_SIZE_3,
        fontFamily: FontFamily.MEDIUM,
        color: Color.SECONDARY_1
    },
    socialInfoPositionText: {
        fontSize: FontSize.TEXT_SIZE_2,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_3
    },
    availableMask: {
        height: getLogicPixel(38),
        width: "100%",
        backgroundColor: hexToRGB("#000000", 0.5),
        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        bottom: getLogicPixel(49)
    },
    availableText: {
        color: "#FFFFFF"
    }
});
