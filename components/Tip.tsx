import { Color } from "@/theme/variables";
import React from "react";
import { Text, View } from "react-native";
import { Tip as ReactiveTip } from "reactive";
import IconFont, { IconNames } from "./Iconfont";

export default class Tip extends ReactiveTip {
    static getIconBody = (msg: {
        message: string;
        icon?: IconNames;
    }) => {
        return msg.icon ? <View style={{ alignItems: "center", width: 150 }}>
            <IconFont name={msg.icon} color={Color.WHITE} size={50} />
            <Text style={{ fontSize: 14, color: Color.WHITE, textAlign: "center" }}>{msg.message}</Text>
        </View> : msg.message;
    };
    /**
     * 显示遮罩消息
     * @param msg 提示消息
     * @param duration 显示时间
     * @param cancelable 用户是否可以关闭
     * @param position 位置
     */
    static show = function (msg: string | React.ReactElement, duration?: number, cancelable?: boolean, position?: string | string[]) {
        if (Tip.tipInstance != null) return;
        Tip.tipInstance = new Tip({
            ...Tip.defaultProps,

            position: position || Tip.defaultProps.position as any,
            body: msg,
            cancelable: typeof cancelable === 'boolean' ? cancelable : true,
            duration: Number(duration) || 2000,
        });

        Tip.tipInstance?.open();
    };

    static hide = function () {
        Tip.tipInstance?.close();
        Tip.tipInstance = undefined;
    };

    open(c?: React.ReactNode) {
        return super.open.call(this, c).then((ret: any) => {
            if (typeof this.props.duration === 'number') {
                setTimeout(() => {
                    this.close().catch(() => {
                        return null;
                    });
                    Tip.tipInstance = undefined;
                }, this.props.duration);
            }

            return ret;
        });
    }
}

