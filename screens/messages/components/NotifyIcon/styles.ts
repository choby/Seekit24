import { StyleSheet } from "react-native";
import { Color } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

const IconSize = getLogicPixel(48);
export default StyleSheet.create({
    container: {
        width: IconSize,
        height: IconSize,
        borderRadius: IconSize,
        justifyContent: "center",
        alignItems: "center"
    },
    notify: {
        backgroundColor: Color.PROCESSING,
    },
    chat: {
        backgroundColor: Color.WARNING,
    },
    user: {

    },
    badge: {
        position: "absolute",
        top: 0,
        right: 0,
        borderColor: "#FFFFFF",
        zIndex:1
        //borderWidth: getLogicPixel(2)
    },
    avator: {
        width: getLogicPixel(48),
        height: getLogicPixel(48),
        borderRadius: getLogicPixel(48)
    }
});



