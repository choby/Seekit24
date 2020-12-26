import { Color, FontFamily, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mapStyle: {
        flex: 1,
        elevation: 0
    },
    mapPickerView: {
        left: "50%",
        width: 20,
        height: 20,
        marginLeft: -10,
        marginTop: -20,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    addressItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: getLogicPixel(20),
        paddingBottom: getLogicPixel(20),
        alignItems: "center"
    },
    addressItemContainerBorder: {
        borderBottomColor: Color.SEPARATOR,
        borderBottomWidth: getLogicPixel(0.5)
    },
    addressName: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_4,
        color: Color.SECONDARY_1
    },
    addressDetail: {
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_3
    }
});
