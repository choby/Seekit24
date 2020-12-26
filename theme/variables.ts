import { getFontLogicSize } from "@/utils/pixelRatio";

export enum Color {
    WHITE = "#FFFFFF",
    /**
     * 主色
     */
    PRIMARY = "#FF515A",
    /**
     * 深色
     */
    PRIMARY_DARK = "#F33F48",
    /**
     * 浅色
     */
    PRIMARY_LIGHT = "#F32F24",
    /**
     * 主标题，底部菜单
     */
    SECONDARY_1 = "#131A25",
    /**
     * 正文，主要信息
     */
    SECONDARY_2 = "#4D5B72",
    /**
    * 说明，次级信息
    */
    SECONDARY_3 = "#9BA6B8",
    /**
     * 置灰提示，输入线
     */
    SECONDARY_4 = "#B6BECA",
    /**
     * 重要提示，强化
     */
    ERROR = "#FF515A",
    /**
     * 一般提示，图标底色
     */
    WARNING = "#FF8F59",
    /**
     * 成功
     */
    SUCCESS = "#4CD296",
    /**
     * 图标底色
     */
    PROCESSING = "#6197FF",
    /**
     * 分割线
     */
    SEPARATOR = "#EDEFF3",
    /**
     * 搜索底色, 聊天窗口背景
     */
    SEARCHBACK = "#F3F6F8",
    /**
     * 页面背景
     */
    PAGEBACK = "#F8F9FB",
    /**
     * 图片背景
     */
    IMAGEBACK = "#FAFCFE",
}

export class FontSize {
    /**
     * 标签:10
     */
    public static get TEXT_SIZE_1() {
        return getFontLogicSize(10);
    }
    /**
     * 标签:11
     */
    public static get TEXT_SIZE_1_5() {
        return getFontLogicSize(11);
    }
    /**
     * 金刚区，ICON配字，提示、说明类文案:12
     */
    public static get TEXT_SIZE_2() {
        return getFontLogicSize(12);
    }
    /**
     * 1:页面主标题下的说明，详情正文(加粗):14
     * 
     * 2:基本正文内容 :14
     */
    public static get TEXT_SIZE_3() {
        return getFontLogicSize(14);
    }
    /**
     * 1:标准按钮字体，订单等列表标题(加粗):16
     * 
     * 2:页面主标题下的说明，详情正文 :16
     */
    public static get TEXT_SIZE_4() {
        return getFontLogicSize(16);
    }
    /**
     * 个人中心等 一级页面列表:18
     */
    public static get TEXT_SIZE_5() {
        return getFontLogicSize(18);
    }
    /**
     * 模块标题:20
     */
    public static get TEXT_SIZE_6() {
        return getFontLogicSize(20);
    }

    /**
     * 页面主标题:28
     */
    public static get TEXT_SIZE_7() {
        return getFontLogicSize(28);
    }
    /**
     * 提示类信息数字:12
     */
    public static get NUMERIC_SIZE_1() {
        return getFontLogicSize(12);
    }
    /**
     * 列表浏览收藏等统计信息:14
     */
    public static get NUMERIC_SIZE_2() {
        return getFontLogicSize(14);
    }
    /**
     * 粉丝关注等统计信息:16
     */
    public static get NUMERIC_SIZE_3() {
        return getFontLogicSize(16);
    }
    /**
     * 列表价格:18
     */
    public static get NUMERIC_SIZE_3_5() {
        return getFontLogicSize(20);
    }
    /**
     * 列表价格:20
     */
    public static get NUMERIC_SIZE_4() {
        return getFontLogicSize(20);
    }
    /**
     * 详情页价格:24
     */
    public static get NUMERIC_SIZE_5() {
        return getFontLogicSize(24);
    }
    /**
     * 验证码:30
     */
    public static get NUMERIC_SIZE_6() {
        return getFontLogicSize(30);
    }
}


// enum FontFamilyIOS {
//     PINGFANGSC_SEMIBOLD = "PingFangSC-Semibold",
//     PINGFANGSC_REGULAR = "PingFangSC-Regular",
//     PINGFANGSC_MEDIUM = "PingFangSC-Medium"
// }

// enum FontFamilyAndroid {
//     ROBOTO_SEMIBOLD = "Roboto-Medium",
//     ROBOTO_REGULAR = "Roboto-Regular",
//     ROBOTO_MEDIUM = "Roboto-Medium"
// }

// const Semibold = Platform.OS === 'ios' ? FontFamilyIOS.PINGFANGSC_SEMIBOLD : FontFamilyAndroid.ROBOTO_SEMIBOLD;
// const Regular = Platform.OS === 'ios' ? FontFamilyIOS.PINGFANGSC_REGULAR : FontFamilyAndroid.ROBOTO_REGULAR;
// const Medium = Platform.OS === 'ios' ? FontFamilyIOS.PINGFANGSC_MEDIUM : FontFamilyAndroid.ROBOTO_MEDIUM;


export class FontFamily {
    public static readonly SEMIBOLD = "AirbnbCerealMedium";//Semibold;
    public static readonly REGULAR = "AirbnbCerealBook";//Regular;
    public static readonly MEDIUM = "AirbnbCerealMedium";//Medium;
    public static readonly DINALTERNATE_BOLD = "DINAlternate-Bold";
}

