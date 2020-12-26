import { StyleSheet } from 'react-native'
import { FontSize, FontFamily, Color } from '@/theme/variables'
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio'


export default StyleSheet.create({

    content: {
        padding: getLogicPixel(20),
        width: "100%",
        alignItems: "center"
    },
    closeContainer: {
        position: "absolute",
        top: getLogicPixel(8),
        right: getLogicPixel(8),
        zIndex: 2
    },
    iconContainer: {
        width: "100%",
        alignItems: "center",
        paddingBottom: getLogicPixel(16)
    },
    titleText: {
        fontSize: FontSize.TEXT_SIZE_5,
        fontFamily: FontFamily.SEMIBOLD,
        color: Color.SECONDARY_1,
        marginBottom: getLogicPixel(16)
    },
    contentText: {
        fontSize: FontSize.TEXT_SIZE_4,
        fontFamily: FontFamily.REGULAR,
        color: Color.SECONDARY_1
    },
    buttoms: {
        height: getLogicPixel(40),
        width: "100%",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttom: {
        width:getLogicPixel((pixelRatio.screenSize.width - 52)/2),
        alignItems: "center",
        justifyContent: "center",

    },

})
