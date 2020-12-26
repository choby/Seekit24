import { Loading } from "@/components/animations";
import BottomModal from "@/components/BottomModal";
import Button from "@/components/Button";
import IconFont from "@/components/Iconfont";
import PlaceHolder from "@/components/Placeholder";
import Tip from "@/components/Tip";
import theme from "@/theme";
import { Comment } from "@/types/data/Comment";
import { PagedList } from "@/types/data/PagedList";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { renderItem } from ".";
import MessageInput from "../MessageInput";
import styles from './styles';

interface MoreCommentProps {
    onLoadMore: () => void;
    onReload: () => void;
    data: PagedList<Comment>;
    onSendComment: (reply: string, comment?: Comment) => void;
}

export class MoreComment extends React.Component<MoreCommentProps, {
    showMessageInput: boolean;
    readyRepliedComent?: Comment;
}>{
    constructor(props: MoreCommentProps) {
        super(props);
        this.state = {
            showMessageInput: false
        };
    }
    private bottomModal = React.createRef<BottomModal>();
    private onReadyReply(comment: Comment) {
        this.setState({
            showMessageInput: true,
            readyRepliedComent: comment
        });
    }
    public open() {
        const { onReload } = this.props;
        onReload();
        this.setState({
            showMessageInput: false,
            readyRepliedComent: undefined
        });
        this.bottomModal.current?.open();
    }

    private hiddenMessageInput() {
        this.setState({ showMessageInput: false, readyRepliedComent: undefined });
    }

    render() {
        const { data, onLoadMore, onReload, onSendComment } = this.props;
        const { showMessageInput, readyRepliedComent } = this.state;

        return <BottomModal ref={this.bottomModal}>
            <SafeAreaView style={[{ height: pixelRatio.screenSize.height - getLogicPixel(80) - pixelRatio.statusBarHeight }]}>
                <View style={theme.container}>
                    <View style={styles.closeContainer}>
                        <Text style={styles.commentTitle}>All Messages <Text style={styles.total}>{data.total}</Text> </Text>
                        <TouchableOpacity onPress={() => this.bottomModal.current?.close()}>
                            <IconFont name="yemianguanbi-hei1x" size={getLogicPixel(20)} />
                        </TouchableOpacity>
                    </View>
                    <PlaceHolder.NoDataView isEmpty={data.total === 0}>
                        <Loading.ScrollView scrollsToTop={true}
                            onScrollEndLoad={onLoadMore}
                            onScrollTopLoad={onReload}
                            showsVerticalScrollIndicator={false}
                            isLastPage={data.isLastPage}
                            lastPageFooterComponent={<></>}
                        >
                            {data.list.map((d, index) => renderItem(d, index === 0, comment => this.onReadyReply(comment)))}
                        </Loading.ScrollView>
                    </PlaceHolder.NoDataView>
                </View>
                {!showMessageInput && <TouchableOpacity activeOpacity={1} style={[styles.messageInputContainer]} onPress={() => this.setState({
                    showMessageInput: true,
                    readyRepliedComent: undefined
                })}>
                    <Text style={styles.messagePlaceholderText}>Say something</Text>
                    <Button type="primary" style={styles.bottomSendButton}>
                        <IconFont name="fasonganniu1x" />
                    </Button>
                </TouchableOpacity>
                }
                {
                    showMessageInput && <MessageInput onSendMessage={(value) => {
                        if (!value) {
                            Tip.show("content must not be blank");
                            return;
                        }
                        value && onSendComment?.(value, readyRepliedComent);
                        this.hiddenMessageInput();
                    }}
                        placeholder={readyRepliedComent ? `reply to @${readyRepliedComent.userName}` : undefined}
                        onBlur={this.hiddenMessageInput.bind(this)}
                        onPressOut={this.hiddenMessageInput.bind(this)}
                    />
                }
            </SafeAreaView>
        </BottomModal>;
    }
}

