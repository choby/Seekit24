import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, View } from "react-native";
import { Modal as BeeshellModal, ModalProps } from "reactive";
import Iconfont, { IconNames } from "../Iconfont";
import styles from "./styles";

export default class Modal {
    private static defaultProps = {
        cancelable: true,
        scrollable: false,
        backdropColor: 'rgba(0, 0, 0, .3)',

        screenWidth: pixelRatio.screenSize.width,
        screenHeight: pixelRatio.screenSize.height,

        offsetX: 0,
        offsetY: 0,

        animatedTranslateX: null,
        animatedTranslateY: null,

        containerStyle: {},
        style: {},

        onOpen: null,
        onOpened: null,
        onClose: () => {
            Modal.modalInstance = undefined;
        },
        onClosed: null
    };
    static modalInstance: BeeshellModal<ModalProps> | undefined = undefined;

    /**
     * 显示模态窗口, 已设置为全局唯一
     * @param param0 
     */
    static show = function ({
        content,
        title,
        okText,
        okTextStyle,
        icon,
        onOkPress,
        cancelText,
        cancelTextStyle,
        onCancelPress,
        closeable,
        force
    }: {
        content: string | React.ReactElement;
        title?: string | React.ReactElement;
        icon?: IconNames;
        okText?: string;
        okTextStyle?: StyleProp<TextStyle>;
        onOkPress?: () => void;
        closeable?: boolean;
        cancelText?: string;
        cancelTextStyle?: StyleProp<TextStyle>;
        onCancelPress?: () => void;
        /**
         * 本次弹窗强制显示,将覆盖前面的模态窗口, 仅业务需要时设置该值
         */
        force?: boolean;
    }) {
        // 只保留一个模态弹窗
        if (force) Modal.hide();
        if (Modal.modalInstance) return;

        Modal.modalInstance = new BeeshellModal({
            ...Modal.defaultProps,
            children: <View style={{
                flexDirection: "column",
                //minWidth: 200,
                minHeight: 100,
                width: pixelRatio.screenSize.width - getLogicPixel(88),
                padding: 0,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: getLogicPixel(8)
            }}>
                {
                    closeable && <TouchableOpacity
                        activeOpacity={1}
                        style={styles.closeContainer}
                        onPress={() => Modal.hide()}
                        hitSlop={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 10
                        }}
                    >
                        <Iconfont name="qingchu-sousuo1x" size={getLogicPixel(20)} />
                    </TouchableOpacity>
                }
                <View style={styles.content}>
                    {icon && <View style={styles.iconContainer}>
                        <Iconfont name={icon} size={getLogicPixel(40)} />
                    </View>
                    }
                    {title && (
                        React.isValidElement(title) ? title :
                            <Text style={styles.titleText}>{title}</Text>)
                    }
                    {
                        React.isValidElement(content) ? content :
                            <Text style={styles.contentText}>{content}</Text>
                    }
                </View>
                <View style={[styles.buttoms]}>
                    {
                        cancelText && <TouchableOpacity activeOpacity={1} onPress={() => {
                            onCancelPress?.();
                            Modal.hide();
                        }} style={[styles.buttom, styles.secondaryButton]}>
                            <Text style={[styles.secondaryButtonText, cancelTextStyle]}>{cancelText}</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        onOkPress?.();
                        Modal.hide();
                    }} style={[styles.buttom]}>
                        <Text style={[styles.primaryButtonText, okTextStyle]}>{okText ?? "Confirm"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        });

        Modal.modalInstance.open();
    };

    static hide = function () {
        Modal.modalInstance!.close();
        Modal.modalInstance = undefined;
    };
}