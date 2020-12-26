import { Color, FontFamily, FontSize } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { StyleSheet } from "react-native";

const RECOMMENDITEM_WIDTH = (pixelRatio.screenSize.width - getLogicPixel(40));

export default StyleSheet.create({

    leadsInfoContainer: {
        paddingTop: 16
    },

    leadsInfoTextContainer: {
        marginBottom: getLogicPixel(8)
    },

    leadsInfoTextDetail: {
        fontSize: FontSize.TEXT_SIZE_4,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_2,
    },
    leadsInfoImageListContainer: {
        alignItems: "center",
    },
    leadsInfoImage: {
        width: RECOMMENDITEM_WIDTH,
        marginTop: getLogicPixel(8)
    },
    leadsInfoImageFirst: {
        borderTopLeftRadius: getLogicPixel(8),
        borderTopRightRadius: getLogicPixel(8),
    },
    leadsInfoImageLast: {
        borderBottomLeftRadius: getLogicPixel(8),
        borderBottomRightRadius: getLogicPixel(8),
    },
    leadsInfoImageVideo: {
        width: RECOMMENDITEM_WIDTH,
        height: RECOMMENDITEM_WIDTH * 3 / 4,
        marginTop: getLogicPixel(12)
    },

});
