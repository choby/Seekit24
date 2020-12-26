import { Color, FontFamily, FontSize } from "@/theme/variables";
import { SystemUtils } from "@/utils";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mapStyle: {
        flex: 1,
        elevation: 0
    },
    searchInputContainer: {
        flexDirection: "row",
        backgroundColor: Color.SEARCHBACK,
        borderRadius: getLogicPixel(20),
        height: getLogicPixel(32),
        borderWidth: 0,
        alignItems: "center"
    },
    searchIcon: {
        paddingLeft: getLogicPixel(12),
        flexDirection: "row",
        alignItems: "center"
    },
    searchPlaceholderText: {
        color: Color.SECONDARY_3,
        marginLeft: getLogicPixel(8)
    },
    mapPickerView: {
        left: "50%",
        width: 20,
        height: 20,
        marginLeft: -10,
        marginTop: SystemUtils.isIos ? -14 : -20,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: getLogicPixel(15),
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
    okButton: {
        height: getLogicPixel(32),
        borderRadius: getLogicPixel(16),
        width: getLogicPixel(55)
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
