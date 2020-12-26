import Avator from "@/components/Avator";
import IconFont from "@/components/Iconfont";
import Moment from "@/components/Moment";
import PlaceHolder from "@/components/Placeholder";
import { Color } from "@/theme/variables";
import { Comment } from "@/types/data/Comment";
import { PagedList } from "@/types/data/PagedList";
import { getLogicPixel } from "@/utils/pixelRatio";
import withAuth from "@/utils/withAuth";
import React, { memo } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Tag } from "reactive";
import styles from "./styles";

interface CommentProps {
    data: PagedList<Comment>;
    onLoadMore: () => void;
    onReadyReply: (comment: Comment) => void;
    onOpenMore?: () => void;
}



export function renderItem(data: Comment, isFirst: boolean, onReadyReply?: (comment: Comment) => void) {
    return <View key={`comment_${data.id}`} style={[styles.commentItemContainer, !isFirst ? styles.commentItemTopBorder : undefined]}>
        <Avator source={{ uri: data.avatarUrl }} size={getLogicPixel(32)} />
        <View style={styles.commentItemContentContainer}>
            <View style={styles.commentItemNickNameAndTime}>
                <View style={styles.commentItemNickNameContainer}>
                    <Text style={styles.commentItemNickName} numberOfLines={1}>
                        {data.userName}
                    </Text>
                </View>
                <Text style={styles.commentItemTime} numberOfLines={1}>
                    <Moment>{data.createTime}</Moment>
                </Text>
            </View>


            <Text style={styles.commentItemContent} onPress={() => withAuth(() => onReadyReply?.(data))}>
                {data.content}
            </Text>

            {/* 回复 */}
            {
                Array.isArray(data.subComments) && data.subComments.map(sub => <View style={[styles.commentItemContainer, styles.commentItemReplyContainer]} key={`reply_${sub.id}`}>
                    <Avator source={{ uri: sub.avatarUrl }} size={getLogicPixel(32)} />
                    <View style={[styles.commentItemContentContainer, styles.commentItemReplyContentContainer]}>
                        <View style={styles.commentItemNickNameAndTime}>
                            <View style={[styles.commentItemNickNameContainer, { maxWidth: "38%" }]}>
                                <Text style={styles.commentItemNickName} numberOfLines={1}>
                                    {sub.userName}
                                </Text>
                                {
                                    sub.master &&
                                    <Tag style={styles.commentItemSellerNameTag} textStyle={styles.commentItemSellerName}>Seller</Tag>
                                }
                            </View>
                            <Text style={styles.commentItemTime} numberOfLines={1}>
                                <Moment>{sub.createTime}</Moment>
                            </Text>
                        </View>

                        <Text style={[styles.commentItemContent, styles.commentItemReply]} onPress={() => onReadyReply?.(data)}>
                            <Text style={styles.replyUserName}>Reply @{sub.replyUserName}: </Text>{sub.content}
                        </Text>
                    </View>
                </View>)
            }

        </View>
    </View>;
}

function comment(props: CommentProps) {
    const { data, onReadyReply, onOpenMore } = props;

    return <View style={styles.commentContainer}>
        <Text style={styles.commentTitle} onPress={onOpenMore}>Message Board <Text style={styles.total}>{data.total}</Text> </Text>
        <PlaceHolder.NoDataView isEmpty={!Array.isArray(data?.list) || data.list.length === 0} text={"No Comment"}>
            {data.list.map((d, index) => renderItem(d, index === 0, () => onReadyReply(d)))}
            {data.isLastPage === false &&
                <TouchableOpacity activeOpacity={1} style={styles.commentLoadMoreContainer} onPress={onOpenMore}>
                    <Text style={styles.commentLoadMoreText}>
                        Check more messages <IconFont name="liebiaozhedie1x" size={14} color={Color.WARNING} />
                    </Text>
                </TouchableOpacity>
            }
        </PlaceHolder.NoDataView>
    </View>;
}

export default memo(comment) as typeof comment;