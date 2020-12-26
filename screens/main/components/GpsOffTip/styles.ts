
import { hexToRGB } from "@/theme";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    tipContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        height: getLogicPixel(58),
        borderRadius: getLogicPixel(12),
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(17),
        backgroundColor: hexToRGB(Color.WARNING, 0.1)
    },
    notTurnOffContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    notTurnOffText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.WARNING,
        marginLeft: getLogicPixel(7),
        flex: 1
    },
    setButton: {
        height: getLogicPixel(28),
        width: getLogicPixel(51),
        borderRadius: getLogicPixel(16),
        backgroundColor: Color.WARNING,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        borderColor: Color.WARNING,
        justifyContent: 'center',
        alignItems: "center"
    },
    setButtonText: {
        color: "#FFFFFF",
        fontFamily: FontFamily.MEDIUM
    },
    close: {
        position: "absolute",
        top: 0,
        right: 0
    }
});
