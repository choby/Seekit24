import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import Input from "@/components/Input";
import useKeybordListener from "@/hooks/useKeybordListener";
import { getLogicPixel } from "@/utils/pixelRatio";
import { withAuthDelegate } from "@/utils/withAuth";
import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { MessageInputProps } from ".";
import styles from "./styles";


export default ({
    onSendMessage,
    placeholder,
    onBlur,
    hasBottomBar,
    onPressOut
}: MessageInputProps) => {
    const messageInput = useRef<Input | null>(null);
    const [message, setMessage] = useState<string>();
    const keyboard = useKeybordListener();

    useEffect(() => {
        messageInput.current?.textInput?.focus();
    });

    const keyboardDidShow = () => {
        return keyboard.height !== undefined && keyboard.height > 0;
    };

    const getPositionHack = (): any => {
        return hasBottomBar ? { minHeight: getLogicPixel(89), alignItems: "flex-start", paddingTop: getLogicPixel(12), bottom: (keyboard.height ?? 0) - 49, display: keyboardDidShow() ? "flex" : "none" } :
            { minHeight: getLogicPixel(89), alignItems: "flex-start", paddingTop: getLogicPixel(12), bottom: keyboard.height, display: keyboardDidShow() ? "flex" : "none" }
            ;
    };

    return <>
        <TouchableOpacity style={styles.mask} activeOpacity={1} onPress={onPressOut} />

        <View style={[styles.messageInputContainer, getPositionHack()]}>
            <Input ref={messageInput}
                autoFocus
                //onSubmitEditing={withAuthDelegate(() => onSendMessage?.(message))}
                style={styles.bottomMessageInput}
                placeholder={placeholder ?? "Say something"}
                onChange={(value: string) => setMessage(value)}
                value={message}
                blurOnSubmit={false}
                onBlur={onBlur}
                multiline
                returnKeyType="none"
            />
            <Button type="primary" style={styles.bottomSendButton} onPress={withAuthDelegate(() => onSendMessage?.(message))}>
                <IconFont name="fasonganniu1x" />
            </Button>
        </View>
    </>;
};
