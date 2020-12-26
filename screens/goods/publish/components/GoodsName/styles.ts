import { Color, FontFamily } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    titleInputContainer: {
        borderRadius: 0,
        backgroundColor: "#FFFFFF",
        borderWidth: 0,
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: "#E4E8EF",
        height: getLogicPixel(42),
        fontSize: getLogicPixel(22),
    },
    focusingTitleInputContainer: {
        borderBottomColor: Color.SECONDARY_1,
    },
    inputStyle: {
        fontSize: getLogicPixel(22),
        color: Color.SECONDARY_1,
        paddingLeft: 0,
        fontFamily: FontFamily.MEDIUM
    },
    focusingInputStyle: {

        color: Color.SECONDARY_1
    },


});



