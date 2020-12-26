import { Color } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet, TextStyle } from "react-native";

const inputContainer: TextStyle = {
    // flex: 1,

    backgroundColor: "#F3F6F8",
    borderColor: "#F3F6F8",
    borderWidth: getLogicPixel(0.5),
    height: getLogicPixel(32),
    borderRadius: getLogicPixel(8),

};

const inputContainerFocusing: TextStyle = {
    ...inputContainer,
    backgroundColor: "#FFFFFF",
    borderColor: Color.SECONDARY_1,

};

export default StyleSheet.create({
    inputContainer,
    inputContainerFocusing,
    inputStyle: {
        color: Color.SECONDARY_1
    },
    focusingInputStyle: {
        color: Color.SECONDARY_1
    },

});

