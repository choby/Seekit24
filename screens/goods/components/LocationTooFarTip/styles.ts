import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    tipContainer: {
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        paddingBottom: getLogicPixel(25),
        paddingTop: getLogicPixel(34),
    },
    notTurnOffGuiderText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_2,
        marginBottom: getLogicPixel(32),
        marginTop: getLogicPixel(14)
    },
    chooseButtonsContainer: {
        width: "100%"
    },
    chooseButton:{
        width:"100%"
    }
});
