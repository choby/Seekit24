import { useTheme } from 'reactive/dist/common/styles/variables';
import { Color } from "./variables";
import { getLogicPixel, getFontLogicSize } from '@/utils/pixelRatio';


// 自定义主题变量
const customVariables = {
    mtdBrandPrimary: Color.PRIMARY,
    mtdGrayBase: Color.SECONDARY_2,
    buttonActiveOpacity: 0.3,
    buttonBorderRadius: getLogicPixel(25),

    buttonXFontSize: getFontLogicSize(18),
    buttonXHSpacing: getLogicPixel(28.5),
    buttonXVSpacing: getLogicPixel(13),

    buttonLFontSize: getFontLogicSize(16),
    buttonLHSpacing: getLogicPixel(35.5),
    buttonLVSpacing: getLogicPixel(12),

    buttonMFontSize: getFontLogicSize(14),
    buttonMHSpacing: getLogicPixel(20),
    buttonMVSpacing: getLogicPixel(9),

    buttonSFontSize: getFontLogicSize(12),
    buttonSHSpacing: getLogicPixel(10),
    buttonSVSpacing: getLogicPixel(7)
}

// 自定义主题变量与默认主题变量 merge，并返回新的主题变量
export default useTheme(customVariables)