import React from 'react';
import { View, Image } from 'react-native';
import Iconfont from '@/components/Iconfont';
import { getLogicPixel } from '@/utils/pixelRatio';
import styles from './styles';
import { Badge } from 'reactive';

type NotifyType = "Notify" | "Chat" | "User";


type NotifyIconProps = {
    showBadge?: boolean;
    quantity?: number | string;
} & ({
    type: Exclude<NotifyType, "Notify" | "Chat">;
    avator: string;
} | {
    type: Exclude<NotifyType, "User">;
});

const getIconContent = (props: NotifyIconProps) => {
    switch (props.type) {
        case "Notify":
            return <Iconfont name="tongzhi1x" size={getLogicPixel(32)} />;
        case "Chat":
            return <Iconfont name="xiaoxiliebiao1x" size={getLogicPixel(32)} />;
        case "User":
            return <Image source={{ uri: props.avator }} style={styles.avator} />
    }
}

const getStyle = (props: NotifyIconProps) => {
    switch (props.type) {
        case "Notify":
            return styles.notify;
        case "Chat":
            return styles.chat;
        case "User":
            return styles.user;
    }
}

export default (props: NotifyIconProps) => {
    return <View style={[styles.container, getStyle(props)]}>
        {props.showBadge && <Badge style={styles.badge} label={props.quantity} />}
        {getIconContent(props)}
    </View>;
}