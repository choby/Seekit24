import { Color } from "@/theme/variables";
import { getFontLogicSize, getLogicPixel } from '@/utils/pixelRatio';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    title: {
        fontSize: getFontLogicSize(17),
        color: '#000000',
    },
    textInput: {
        height: getLogicPixel(44),
        backgroundColor: 'transparent',
        fontSize: getFontLogicSize(18),
        //textAlignVertical: 'top',
    },
    placeholderContainer: {
        position: 'absolute',
        top: getLogicPixel(10),
        left: getLogicPixel(25),
        right: getLogicPixel(25),
        bottom: getLogicPixel(10),
    },
    placeholderText: {
        color: Color.SECONDARY_4,
        fontSize: getFontLogicSize(14)
    },
    invalidHint: {
        fontSize: getFontLogicSize(14),
        color: '#ff0000',
    },
    central: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexRowEnd: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    defaultPadding: {
        // paddingLeft: getLogicPixel(10),
        // paddingRight: getLogicPixel(10)
    },
    textField: {
        borderWidth: getLogicPixel(1),
        borderRadius: getLogicPixel(4),
        borderColor: '#000000'
    },
    invalidTextField: {
        borderWidth: getLogicPixel(1),
        borderRadius: getLogicPixel(4),
        borderColor: '#ff0000'
    },
    disabledTextField: {
        borderWidth: getLogicPixel(1),
        borderRadius: getLogicPixel(4),
        borderColor: '#b2b4b8',
        backgroundColor: '#e1e2e6'
    },
    disabledTextInput: {
        color: Color.SECONDARY_4
    },
});