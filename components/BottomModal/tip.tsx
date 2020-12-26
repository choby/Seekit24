import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import Iconfont from "../Iconfont";
import styles from "./styles/tip";
import Button from "../Button";

const Tip = ({
    content,
    title,
    okText,
    onOkPress,
    cancelText,
    onCancelPress,
    onClosePress
}: {
    content: string | React.ReactElement;
    title?: string | React.ReactElement;

    okText?: string;
    onOkPress?: () => void;
    closeable?: boolean;
    cancelText?: string;
    onCancelPress?: () => void;
    onClosePress?: () => void;
}) => {
    return <View style={{
        flexDirection: "column",
        minWidth: 200,
        minHeight: 100,
        padding: getLogicPixel(20),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }}>
        {
            onClosePress && <TouchableOpacity
                activeOpacity={1}
                style={styles.closeContainer}
                onPress={() => onClosePress()}
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

            {
                React.isValidElement(title) ? title :
                    <Text style={styles.titleText}>{title}</Text>
            }
            {
                React.isValidElement(content) ? content :
                    <Text style={styles.contentText}>{content}</Text>
            }
        </View>
        <View style={styles.buttoms}>
            {
                cancelText && <Button onPress={() => {
                    onCancelPress?.();
                }} type="default" style={[styles.buttom]}>
                    {cancelText}
                </Button>
            }

            <Button type="primary" onPress={() => {
                onOkPress?.();
            }} style={[styles.buttom, cancelText ? { width: getLogicPixel((pixelRatio.screenSize.width - 52) / 2) } : { width: getLogicPixel(pixelRatio.screenSize.width - 40) }]}>
                {okText ?? "Confirm"}
            </Button>

        </View>
    </View>
}

Tip.displayName = "Tip";

export default Tip;