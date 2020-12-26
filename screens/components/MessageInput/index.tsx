import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import Input from "@/components/Input";
import { getLogicPixel } from "@/utils/pixelRatio";
import { withAuthDelegate } from "@/utils/withAuth";
import React, { useEffect, useRef, useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from "./styles";

export interface MessageInputProps {
    onSendMessage?: (message?: string) => void;
    placeholder?: string;
    onBlur?: () => void;
    hasBottomBar?: boolean | number;
    onPressOut?: () => void;
}
export default ({
    onSendMessage,
    placeholder,
    onBlur,
    hasBottomBar,
    onPressOut
}: MessageInputProps) => {
    const messageInput = useRef<Input | null>(null);
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        messageInput.current?.textInput?.focus();
    });
    return <>
        <TouchableOpacity style={styles.mask} activeOpacity={1} onPress={onPressOut} />
        <View style={[styles.messageInputContainer, hasBottomBar ? { marginBottom: getLogicPixel(-49) } : undefined]}>
            <Input ref={messageInput}
                autoFocus
                //onSubmitEditing={withAuthDelegate(() => onSendMessage?.(message))}
                style={styles.bottomMessage}
                inputStyle={styles.bottomMessageInput}

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
        {Platform.OS === "ios" && <KeyboardSpacer topSpacing={-getBottomSpace()} />}
    </>;
};
