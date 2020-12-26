import { Color, FontSize } from "@/theme/variables";
import { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: "#F3F6F8",

        flex: 1
    },

    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: getLogicPixel(60),
        alignItems: "center"
    },
    pickerStyle: {
        borderColor: "#F3F6F8",
        backgroundColor: "#F3F6F8"
    },
    pickerDropdownStyle: {
        borderColor: "#F3F6F8",
        backgroundColor: "#F3F6F8"
    },
    cateList: {
        width: getLogicPixel(100),
    },
    cateListWhite: {
        height: "100%",
        flex: 1,
        backgroundColor: "#ffffff"
    },
    cateItem: {
        height: getLogicPixel(65),
        justifyContent: "center",
        paddingLeft: getLogicPixel(15),

    },
    cateItemActive: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: getLogicPixel(8),
        borderBottomLeftRadius: getLogicPixel(8)
    },

    cateItemText: {
        color: Color.SECONDARY_3
    },
    cateItemTextActive: {
        color: Color.PRIMARY
    },
    goodsList: {
        flex: 1,

        backgroundColor: "#FFFFFF",

    },
    goodsListCateNameContainer: {
        alignItems: "center",
        paddingTop: getLogicPixel(16),
        paddingBottom: getLogicPixel(16)
    },
    goodsListCateName: {
        width: getLogicPixel(157),
        height: getLogicPixel(24),
        backgroundColor: "#F3F6F8",
        borderRadius: getLogicPixel(16),
        alignItems: "center",
        justifyContent: "center"
    },
    goodsListCateNameText: {
        color: Color.SECONDARY_1,
        fontSize: FontSize.TEXT_SIZE_3
    },
    goodsItemContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: getLogicPixel(17),
        paddingRight: getLogicPixel(17),
        flexWrap: "wrap"
    },
    goodsItem: {
        width: getLogicPixel(70),
        height: getLogicPixel(104),
        marginBottom: getLogicPixel(24),
    },
    goodsImage: {
        width: getLogicPixel(70),
        height: getLogicPixel(70)
    },

    goodsName: {
        fontSize: FontSize.TEXT_SIZE_2,
        color: Color.SECONDARY_2,
        marginTop: getLogicPixel(8),
        marginBottom: getLogicPixel(8),
        textAlign: "center"
    }
});