import { Color } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    paramsContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
    },
    radio: {
        borderTopColor: Color.SEPARATOR,
        borderTopWidth: getLogicPixel(0.5),
    },
    radioItem: {
        height: getLogicPixel(55),
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5),
        color: Color.PRIMARY,
    },
    paramSubmitContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: getLogicPixel(10),
        paddingTop: getLogicPixel(20)
    },
    paramRest: {
        width: getLogicPixel(129)
    },
    paramDetermine: {
        width: getLogicPixel(194)
    }
});


