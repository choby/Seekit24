import { StyleSheet } from "react-native";
import { Color, FontFamily } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({

    locationContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
        height: getLogicPixel(32),
        borderRadius: getLogicPixel(8),
        backgroundColor: "#F3F6F8",
        marginTop: getLogicPixel(20),
        marginBottom: getLogicPixel(20),
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: getLogicPixel(12),
        paddingRight: getLogicPixel(12),
    },
    locationText: {
        fontFamily: FontFamily.REGULAR,
        fontSize: getLogicPixel(14),
        color: Color.SECONDARY_2,
        marginLeft: getLogicPixel(4),

    },
});
