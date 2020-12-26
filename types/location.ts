import { EnumErrorType } from "./enums";
import { GoogleGeocodingResult } from "./data/GoogleMap";

export interface LocationInfo {
    /**
     * gps工作状态,true表示正在获取定位
     */
    loading: boolean;
    /**
     * 显示获取定位的错误信息,包括无系统权限等
     */
    error?: string | EnumErrorType;
    /**
     * 详细地址信息,发生错误时该对象为空
     */
    address?: GoogleGeocodingResult;
    /**
     * 经纬度等信息
     */
    coords?: {
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number | null;
        altitudeAccuracy: number | null;
        heading: number | null;
        speed: number | null;
    };
}