import { hexToRGB } from "@/theme";
import { Color } from "@/theme/variables";
import { SystemUtils } from "@/utils";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    cameraContainer: {
        flex: 1
    },
    cameraContainerSingle: {
        height: pixelRatio.screenSize.height - getLogicPixel(174) + getLogicPixel(24),
        width: pixelRatio.screenSize.width,
        position: "absolute",
    },
    cameraFunctions: {
        height: getLogicPixel(44),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: pixelRatio.screenSize.width,
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        marginTop: SystemUtils.isIos ? pixelRatio.statusBarHeight : 0,

    },
    cameraFunctionFront: {
        marginLeft: getLogicPixel(22.5),
    },
    paddingContainer: {
        paddingLeft: getLogicPixel(20),
        paddingRight: getLogicPixel(20),
        height: getLogicPixel(140),
        backgroundColor: hexToRGB("#ffffff", 0.7)
    },
    paddingContainerSingle: {
        height: getLogicPixel(174),
        width: pixelRatio.screenSize.width,
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        backgroundColor: "#ffffff",
        borderTopRightRadius: getLogicPixel(16),
        borderTopLeftRadius: getLogicPixel(16)
    },
    cameraTakeContainer: {

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flex: 1
    },

    cameraTakeButton: {
        height: getLogicPixel(64),
        width: getLogicPixel(64),
        borderWidth: getLogicPixel(4),
        borderColor: Color.SECONDARY_1,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: getLogicPixel(64)
    }
});
