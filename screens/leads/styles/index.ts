import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingTop: getLogicPixel(20),
        textAlignVertical: "bottom",
    },
    topBarLeft: {
        color: Color.SECONDARY_1,
        fontFamily: FontFamily.MEDIUM,
        fontSize: FontSize.TEXT_SIZE_7,
        padding: 0,
        //includeFontPadding: false,
        //  textAlignVertical: "bottom",

    },
    topBarRight: {
        color: Color.SECONDARY_2,
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        padding: 0,
    },
    searchIcon: {
        paddingLeft: getLogicPixel(12),

    },
    searchTextInput: {
        flex: 1,
        paddingRight: getLogicPixel(8),
        fontFamily: FontFamily.REGULAR,
        fontSize: FontSize.TEXT_SIZE_3,
        color: Color.SECONDARY_4
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center"
    },
    searchInputContainer: {
        flexDirection: "row",
        backgroundColor: Color.SEARCHBACK,
        borderRadius: getLogicPixel(20),
        height: getLogicPixel(32),
        borderWidth: 0,
        alignItems: "center",
        flex: 1
    },
    searchInput: {
        paddingLeft: getLogicPixel(12),
        borderTopRightRadius: getLogicPixel(20),
        borderBottomRightRadius: getLogicPixel(20),
    },
    picker: {
        height: getLogicPixel(40),
        justifyContent: "center",
        width: getLogicPixel(32),
        paddingLeft: getLogicPixel(12)
    },
    slideModalContent: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: getLogicPixel(16),
        borderBottomRightRadius: getLogicPixel(16),
        overflow: "hidden"
    },
    filterParams: {
        flexDirection: "row"
    },
    filterParamsTag: {
        marginRight: getLogicPixel(8)
    },
    divider: {
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: Color.SEPARATOR,
    },
    background: {
        backgroundColor: Color.WHITE,
    },
    backgroundWhite: {
        backgroundColor: "#FFFFFF",
    },
    separator: {
        height: getLogicPixel(0.5),
        borderBottomWidth: getLogicPixel(0.5),
        borderBottomColor: Color.SEPARATOR,
        backgroundColor: Color.WHITE
    },
    addButton: {
        width: getLogicPixel(48),
        height: getLogicPixel(48),
        borderRadius: getLogicPixel(48),
        position: "absolute",
        bottom: pixelRatio.screenSize.height / 7,
        right: getLogicPixel(20),
        justifyContent: "center",
        alignItems: "center"
    }
});

