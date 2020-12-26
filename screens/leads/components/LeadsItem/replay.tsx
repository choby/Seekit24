import { default as IconFont, default as Iconfont } from "@/components/Iconfont";
import { Leads } from '@/types/data/Leads';
import { getLogicPixel } from '@/utils/pixelRatio';
import { withAuthDelegate } from '@/utils/withAuth';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface ReplyProps {
    onReadyReply: () => void;
    leads: Leads;
    onPressMessageIcon?: () => void;
}

export default ({ onReadyReply, leads, onPressMessageIcon }: ReplyProps) => {
    return <View style={styles.replyContainer}>
        {/* {Array.isArray(leads.hotComments) && leads.hotComments.map(comment =>
            <View key={`comment_${comment.id}`} style={styles.replyContentContainer}>
                <Text style={styles.replyUserInfoNameText} numberOfLines={1}>{comment.userName}: </Text>
                <Text style={styles.contentText} numberOfLines={1}>{comment.content}</Text>
            </View>
        )} */}
        <View style={styles.replyFunctions}>
            <TouchableOpacity style={styles.replyInput} onPress={withAuthDelegate(() => onReadyReply?.())}>
                <IconFont name="xide-shurumiaoshudeicon" size={22} /><Text style={styles.replyPlaceholder}>Say something...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.replyQtyContainer} activeOpacity={1} onPress={onPressMessageIcon}>
                <Iconfont name="liuyanlb1x" size={getLogicPixel(20)} />
                <Text style={styles.replyQty}>
                    {leads.commentCount}
                </Text>
            </TouchableOpacity>
        </View>
    </View>;
};