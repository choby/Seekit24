declare module '*.css';
declare module "*.png";
declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}


// interface File {
//     /**
//      * 对文件内容使用md5算法生成的文件名
//      */
//     md5Name: string;
//     hash: string;
//     width?: number;
//     height?: number;
//     duration?: number;
//     extension: string;
//     mime: string;
//     bucketFileName?: string;
//     getImageBase64: () => string | undefined;
//     packInfo: () => Promise<void>;
// }

interface Number {
    /**
     * 时间间隔或相对时间
     * 
     * 基本的字符串由当前的语言环境自定义。 时间会舍入到最接近的秒数。
     * 
     * @param withoutSuffix 如果传入 true，则可以获得不带后缀的值。
     * 
     * 范围|  键  |     样本输出     
     * --- | ---  | --- 
     * 0 至 44 秒  | s  | 几秒前  
     * 未设定  | ss  | 44 秒前  
     * 45 至 89 秒  | m  | 1 分钟前  
     * 90 秒至 44 分钟  | mm  |2 分钟前 ... 44 分钟前  
     * 45 至 89 分钟  | h |1 小时前  
     * 90 分钟至 21 小时  | hh  | 2 小时前 ... 21 小时前  
     * 22 至 35 小时  | d  | 1 天前  
     * 36 小时至 25 天  | dd  | 2 天前 ... 25 天前  
     * 26 至 45 天  | M  | 1 个月前  
     * 45 至 319 天  | MM  | 2 个月前 ... 10 个月前  
     * 320 至 547 天 (1.5 年)  | y  | 1 年前 
     * 548 天+ | yy  | 2 年前 ... 20 年前  
     * 
     * http://momentjs.cn/docs/#/displaying/fromnow/
     */
    fromNow: (withoutSuffix?: boolean) => string;
    /**
     * 日历时间显示相对于给定的 referenceTime 的时间（默认为现在），但与 moment#fromNow 略有不同。
     * 
     * 
     * @param time 根据日期与 referenceTime 的日期（默认为今天）的接近程度。
     * 
     * @param formats 使用不同的字符串格式化日期。
     * 
     * http://momentjs.cn/docs/#/displaying/calendar-time/
     */
    calendar: (time?: MomentInput, formats?: CalendarSpec) => string;
    /**
     * 重写数值设置精度
     * @param precision 精度值
     */
    toFixed: (precision: number) => string;
}

interface String {
    /**
     * 数值设置精度
     * @param precision 精度值
     */
    toFixed: (precision: number) => string;
    /**
     * 字符串中间部分隐藏
     */
    mask: () => string;
    /**
    * 时间间隔或相对时间
    * 
    * 基本的字符串由当前的语言环境自定义。 时间会舍入到最接近的秒数。
    * 
    * @param withoutSuffix 如果传入 true，则可以获得不带后缀的值。
    * 
    * 范围|  键  |     样本输出     
    * --- | ---  | --- 
    * 0 至 44 秒  | s  | 几秒前  
    * 未设定  | ss  | 44 秒前  
    * 45 至 89 秒  | m  | 1 分钟前  
    * 90 秒至 44 分钟  | mm  |2 分钟前 ... 44 分钟前  
    * 45 至 89 分钟  | h |1 小时前  
    * 90 分钟至 21 小时  | hh  | 2 小时前 ... 21 小时前  
    * 22 至 35 小时  | d  | 1 天前  
    * 36 小时至 25 天  | dd  | 2 天前 ... 25 天前  
    * 26 至 45 天  | M  | 1 个月前  
    * 45 至 319 天  | MM  | 2 个月前 ... 10 个月前  
    * 320 至 547 天 (1.5 年)  | y  | 1 年前 
    * 548 天+ | yy  | 2 年前 ... 20 年前  
    * 
    * http://momentjs.cn/docs/#/displaying/fromnow/
    */
    fromNow: (withoutSuffix?: boolean) => string;
    /**
     * 日历时间显示相对于给定的 referenceTime 的时间（默认为现在），但与 moment#fromNow 略有不同。
     * 
     * 
     * @param time 根据日期与 referenceTime 的日期（默认为今天）的接近程度。
     * 
     * @param formats 使用不同的字符串格式化日期。
     * 
     * http://momentjs.cn/docs/#/displaying/calendar-time/
     */
    calendar: (time?: MomentInput, formats?: CalendarSpec) => string;
}

interface Array {
    /**
     * 数组去重
     */
    distinct: () => Array;
}

