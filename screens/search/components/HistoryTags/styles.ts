import { StyleSheet } from "react-native";
import {  FontSize } from "@/theme/variables";
import { hexToRGB } from "@/theme";
import { getLogicPixel } from "@/utils/pixelRatio";

export default StyleSheet.create({
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: getLogicPixel(60),
        alignItems: "center"
    },
    historyTags: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    tag: {
        backgroundColor: "#ffffff",
        height: getLogicPixel(32),
        borderRadius: getLogicPixel(8),
        borderWidth: getLogicPixel(0.5),
        borderColor: hexToRGB("#6B788F", 0.3),
        paddingLeft: getLogicPixel(8),
        paddingRight: getLogicPixel(8),
        justifyContent: 'center',
        marginRight: getLogicPixel(8),
        marginBottom: getLogicPixel(10)
    },
    tagText: {
        color: "#6B788F",
        fontSize: FontSize.TEXT_SIZE_3
    },
});


