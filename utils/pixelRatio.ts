
import { Dimensions, PixelRatio, Platform } from "react-native";
import Constants from 'expo-constants';

const DESIGN_WIDTH = 375; // 设计图宽度
const designPixelRatio = Dimensions.get('window').width / DESIGN_WIDTH; // 计算屏幕/设计图宽度比
const fontScale = PixelRatio.getFontScale(); // 字体大小缩放比例,目前这个函数仅仅在Android设备上实现了，它会体现用户选项里的“设置 > 显示 > 字体大小”。在iOS设备上它会直接返回默认的像素密度。
const statusBarHeight = Platform.OS === "ios" ? Constants.statusBarHeight : Constants.statusBarHeight;
const radio = PixelRatio.get();

/**
 * 获取屏幕逻辑像素
 * @param pixel 设计图像素
 */
export function getLogicPixel(pixel: number) {
    return designPixelRatio * pixel;
}

/**
 * 根据屏幕获取图片分辨率
 * @param pixel 设计图像素
 */
export function getImageLogicSize(pixel: number) {
    return PixelRatio.getPixelSizeForLayoutSize(getLogicPixel(pixel));
}

/**
 * 根据屏幕获取字体大小
 * @param pixel 设计图字体大小
 */
export function getFontLogicSize(pixel: number) {
    return getLogicPixel(pixel) * fontScale;
}

export default {
    designPixelRadio: designPixelRatio,
    radio,
    fontScale,
    screenSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    statusBarHeight,
    getLogicPixel,
    getImageLogicSize,
    getFontLogicSize
};