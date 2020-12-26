import { StyleSheet } from "react-native";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    slideModalContainer: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    },
    slideModalContent: {
        width: '100%',
        height: pixelRatio.screenSize.height - 57,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: getLogicPixel(16),
        borderTopRightRadius: getLogicPixel(16),
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20)
    },
    closeButtonContainer: {
        height: getLogicPixel(60),
        justifyContent: "center"
    }
});



