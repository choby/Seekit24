import { hexToRGB } from "@/theme";
import variables from '@/theme/reactiveTheme';
import { Color, FontFamily } from '@/theme/variables';
import { getLogicPixel } from '@/utils/pixelRatio';
import { StyleSheet } from 'react-native';

const defaultWrapper = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: variables.mtdHSpacingL,
    paddingVertical: variables.mtdVSpacingM,

    borderWidth: getLogicPixel(StyleSheet.hairlineWidth),
    borderColor: hexToRGB(Color.SECONDARY_2, 0.5),// 'rgba(77,91,114,0.5)',
    borderRadius: variables.buttonBorderRadius,

    backgroundColor: '#fff',
    overflow: 'hidden',

};


const defaultAcvtivedWrapper = {
    ...defaultWrapper,
    borderColor: Color.SECONDARY_1,

};

const defaultDisabledWrapper = {
    ...defaultWrapper,
    borderColor: Color.SECONDARY_1,

    opacity: variables.buttonActiveOpacity,
};

const defaultText = {
    fontFamily: FontFamily.MEDIUM,
    fontSize: variables.mtdFontSizeM,
    color: variables.mtdGrayBase,
    opacity: 1,
    alignItems: "center"
};

const defaultAcvtivedText = {
    ...defaultText,
    color: Color.SECONDARY_1,

};

const defaultDisabledText = {
    ...defaultText,
    color: Color.SECONDARY_1,
    opacity: variables.buttonActiveOpacity,
};

const primaryWrapper = {
    ...defaultWrapper,
    borderColor: variables.mtdBrandPrimary,
    backgroundColor: variables.mtdBrandPrimary
};


const primaryAcvtivedWrapper = {
    ...primaryWrapper,
    borderColor: Color.PRIMARY_DARK,
    backgroundColor: Color.PRIMARY_DARK
};

const primaryDisabledWrapper = {
    ...primaryWrapper,
    borderColor: Color.PRIMARY_DARK,
    backgroundColor: Color.PRIMARY_DARK,
    opacity: variables.buttonActiveOpacity,
};

const primaryText = {
    ...defaultText,
    color: '#ffffff'
};

const primaryAcvtivedText = {
    ...primaryText,
    color: '#ffffff'
};

const primaryDisabledText = {
    ...primaryText,
    color: '#ffffff'
};


const secondaryWrapper = {
    ...defaultWrapper,
    borderColor: hexToRGB(Color.ERROR, 0.5),//'rgba(255,81,90,0.5)',
    backgroundColor: "#ffffff"
};

const secondaryAcvtivedWrapper = {
    ...secondaryWrapper,
    borderColor: Color.PRIMARY_DARK,
    backgroundColor: "#ffffff"
};

const secondaryDisabledWrapper = {
    ...secondaryWrapper,
    borderColor: Color.PRIMARY_DARK,
    backgroundColor: "#ffffff",
    opacity: variables.buttonActiveOpacity,
};

const secondaryText = {
    ...defaultText,
    color: Color.PRIMARY,
    opacity: 1,
};

const secondaryAcvtivedText = {
    ...secondaryText,
    color: Color.PRIMARY_DARK,
};

const secondaryDisabledText = {
    ...secondaryText,
    color: Color.PRIMARY_DARK,
    opacity: variables.buttonActiveOpacity,
};

const xsSizeText = {
    ...defaultText,
    fontFamily: FontFamily.REGULAR,
    color: '#ffffff'
};

const icon = {
    marginRight: getLogicPixel(4)
};


export default StyleSheet.create({
    defaultWrapper,
    defaultAcvtivedWrapper,
    defaultDisabledWrapper,

    defaultText,
    defaultAcvtivedText,
    defaultDisabledText,

    primaryWrapper,
    primaryAcvtivedWrapper,
    primaryDisabledWrapper,


    primaryText,
    primaryAcvtivedText,
    primaryDisabledText,

    secondaryWrapper,
    secondaryAcvtivedWrapper,
    secondaryDisabledWrapper,

    secondaryText,
    secondaryAcvtivedText,
    secondaryDisabledText,

    icon,

    xsSizeText

} as any);