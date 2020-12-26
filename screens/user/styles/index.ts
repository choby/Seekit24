import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: getLogicPixel(32),
        paddingBottom: getLogicPixel(38)
    },
    userNickNameContainer: {
        paddingRight: getLogicPixel(12),
        flex: 1
    },
    userNickName: {
        fontFamily: FontFamily.SEMIBOLD,
        fontSize: FontSize.TEXT_SIZE_7,
        color: Color.SECONDARY_1,
    },
    editTagContainer: {
        width: getLogicPixel(144),
        marginTop: getLogicPixel(6)
    },
    editTag: {
        height: getLogicPixel(24),
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderColor: hexToRGB(Color.SECONDARY_3, 0.5),
        borderRadius: getLogicPixel(4),
    },
    editTagText: {
        justifyContent: "center",
        alignItems: "center",
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_3,
    },
    infoContainer: {
        paddingTop: getLogicPixel(27),
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),

    },
    infoItemContainer: {
        paddingTop: getLogicPixel(6),
        paddingBottom: getLogicPixel(32),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    infoItemLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    infoItemText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1,
        marginLeft: getLogicPixel(20)
    },

    buttonContainer: {
        marginTop: getLogicPixel(40)
    }
});



