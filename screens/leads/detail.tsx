import { PreLoader } from "@/components/animations";
import Avator from "@/components/Avator";
import Divider from "@/components/Divider";
import IconFont from "@/components/Iconfont";
import Moment from "@/components/Moment";
import PlaceHolder from "@/components/Placeholder";
import Tip from "@/components/Tip";
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from "@/navigation/pages";
import { addComment, getCommentList, getLeads } from "@/services/leads";
import { useStore } from "@/stores";
import theme from "@/theme";
import { Comment as CommentData } from "@/types/data/Comment";
import { Leads } from "@/types/data/Leads";
import { LeadsComment, LeadsSubComment } from "@/types/data/LeadsComment";
import { PagedList } from "@/types/data/PagedList";
import { EnumBusinessType } from "@/types/enums";
import { getLogicPixel } from "@/utils/pixelRatio";
import { withAuthDelegate } from "@/utils/withAuth";
//import SelfBottomBar from "./components/BottomBar/self";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { InteractionManager, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NavigationBar } from "reactive";
import Comment from "../components/Comment";
import { MoreComment } from "../components/Comment/more";
import MessageInput from "../components/MessageInput";
import { BottomBar } from "./components/BottomBar";
import LeadsInfo from "./components/LeadsInfo";
import styles from "./styles/detail";

export interface LeadsDetailRouteParams {
    id: string;
    fromSuccess?: boolean;
}

export default () => {
    //#region hooks
    const scrollView = useRef<ScrollView>(null);
    const appState = useStore("appState");
    const navigation = useNavigation<Navigation>();
    const route = useRoute<Route<Pages.LeadsDetail>>();
    const moreComment = useRef<MoreComment>(null);
    const [leads, setLeads] = useState<Leads>();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const [readyRepliedComent, setReadyRepliedComent] = useState<LeadsComment>();
    const [showMessageInput, setShowMessageInput] = useState(false);
    const [commentList, setCommentList] = useState<PagedList<LeadsComment>>({ total: 0, nextPage: 1, list: [] });
    const [moreCommentList, setMoreCommentList] = useState<PagedList<LeadsComment>>({ total: 0, nextPage: 1, list: [] });
    const [initializing, setInitializing] = useState(true);

    useNetworkEffect(() => {
        setInitializing(true);
        InteractionManager.runAfterInteractions(async () => {
            await Promise.all([
                getLeadsDetail(),
                getComments()
            ]);
            setInitializing(false);
        });
    }, true);

    useEffect(() => {
        getLeadsDetail();
        scrollView.current?.scrollTo();
    }, [route.params.id]);

    //#endregion

    const getLeadsDetail = async () => {
        const id = route.params.id;
        const goods = await getLeads(id);
        if (goods)
            setLeads(goods);
    };

    const getComments = async () => {
        if (commentList.isLastPage) return;
        const id = route.params.id;
        const data = await getCommentList(id, commentList.nextPage);
        if (data && Array.isArray(data?.list))
            setCommentList({
                ...commentList,
                ...data,
                list: commentList.list.concat(data.list)
            });
    };

    const getMoreComments = async (reload?: boolean) => {
        if (reload !== true && moreCommentList.isLastPage) return;
        const id = route.params.id;
        const data = await getCommentList(
            id,
            reload ? undefined : moreCommentList.nextPage
        );
        if (data) {
            setMoreCommentList({
                ...data,
                list: reload ? data.list : moreCommentList.list.concat(data.list)
            });
        }
    };

    const isNotReply = (comment: LeadsComment | LeadsSubComment): comment is LeadsComment => {
        return comment.replyId === 0;
    };

    const onSendComment = async (reply: string, comment?: CommentData,) => {
        if (!reply) {
            Tip.show("content must not be blank");
            return;
        }
        const masterComment = comment ?? readyRepliedComent;
        const data = await addComment(leads!.demandId, reply, masterComment?.id);
        if (data)
            data.master = leads?.userId === appState.session?.userId;
        if (data && !isNotReply(data) && masterComment) {
            masterComment.subComments = masterComment.subComments ?? [];
            masterComment.subComments.splice(0, 0, data);
            setCommentList({
                ...commentList
            });
            setReadyRepliedComent(undefined);
        } else if (data && isNotReply(data)) {
            commentList.list = commentList.list ?? [];
            commentList.list.splice(0, 0, data);
            commentList.total += 1;
            setCommentList({
                ...commentList
            });
        }
    };


    return <View style={[theme.screenView, theme.statusBar]}>

        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            onPressBack={() => navigation.goBack()}
            titleContainer={false}
            style={theme.navigationBar}
            forwardLabel={leads?.userId === appState.userInfo?.userId ? undefined : <IconFont name="xuanxiang" size={getLogicPixel(20)} />}
            onPressForward={leads?.userId === appState.userInfo?.userId ?
                undefined :
                withAuthDelegate(() => navigation.navigate(Pages.Report, { type: EnumBusinessType.LEADS, id: leads!.demandId }))
            }
        />

        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <ScrollView showsVerticalScrollIndicator={false} ref={scrollView}>
                <PreLoader.View loading={initializing}>
                    <View style={theme.paddingHorizontal}>
                        <View style={styles.userContainer}>
                            <TouchableOpacity activeOpacity={1} style={styles.userInfoContainer}
                                onPress={() => navigation.navigate(Pages.UserProfile, { userId: leads?.userId! })}
                            >
                                <Avator source={{ uri: leads?.avatarUrl }} size={getLogicPixel(32)} />

                                <View style={styles.userInfoDescContainer}>
                                    <Text style={styles.userInfoNameText} numberOfLines={1}>{leads?.userName}</Text>
                                    <Moment calendar={true} style={styles.userInfoPositionText} >{leads?.createTime}</Moment>
                                </View>
                            </TouchableOpacity>
                            {/* <Button type="secondary" size="sm">Follow</Button> */}
                        </View>
                        {leads && <LeadsInfo leads={leads} />}
                        <Divider height={20} />
                    </View>
                    <Divider style={{ backgroundColor: "#F8F9FA" }} height={8} />


                    <View style={theme.paddingHorizontal}>
                        <Divider height={20} />

                        {
                            commentList &&
                            <Comment data={commentList}
                                onLoadMore={getComments}
                                onReadyReply={comment => {
                                    setReadyRepliedComent(comment);
                                    setShowMessageInput(true);
                                }}
                                onOpenMore={() => moreComment.current?.open()}
                            />
                        }

                        <Divider height={20} />
                    </View>
                </PreLoader.View>
            </ScrollView>
        </PlaceHolder.NoNetworkView>
        {
            leads && !showMessageInput && <BottomBar
                // goodsId={leads.goodsId}
                // isCollected={leads.collect}
                // isOnSale={false}
                onStartMessage={() => {
                    //onStartMessage?.();
                    setShowMessageInput(true);
                }}
                isMaster={false}
            //onStartChat={onStartChat}
            //onCollect={onCollect}
            //onCancelCollect={onCancelCollect}
            />
        }
        {
            showMessageInput && <MessageInput onSendMessage={(value) => {
                if (!value) {
                    Tip.show("content must not be blank");
                    return;
                }
                value && onSendComment(value);
                setShowMessageInput(false);
            }}
                placeholder={readyRepliedComent ? `reply to @${readyRepliedComent.userName}` : undefined}
                onBlur={() => setShowMessageInput(false)}
                onPressOut={() => setShowMessageInput(false)}
            />
        }
        <MoreComment ref={moreComment}
            data={moreCommentList}
            onReload={() => getMoreComments(true)}
            onLoadMore={() => getMoreComments()}
            onSendComment={(reply, comment) => onSendComment(reply, comment)}
        />


    </View>;
};