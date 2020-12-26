import { PreLoader } from "@/components/animations";
import Avator from "@/components/Avator";
import Divider from "@/components/Divider";
import IconFont from "@/components/Iconfont";
import PlaceHolder from "@/components/Placeholder";
import Tip from "@/components/Tip";
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from "@/navigation/pages";
import { get, getComments, getRecommend, sendComment } from "@/services/goods";
import { useStore } from "@/stores";
import theme from "@/theme";
import { Color } from "@/theme/variables";
import { Comment, SubComment } from "@/types/data/Comment";
import { Goods } from "@/types/data/Goods";
import { GoodsRecommend } from "@/types/data/GoodsRecommend";
import { PagedList } from "@/types/data/PagedList";
import { EnumBusinessType, EnumGoodsState } from "@/types/enums";
import { getLogicPixel } from "@/utils/pixelRatio";
import { withAuthDelegate } from "@/utils/withAuth";
import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";
import { InteractionManager, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NavigationBar } from "reactive";
import CommentComponent from "../components/Comment";
import { MoreComment } from "../components/Comment/more";
import MessageInput from "../components/MessageInput";
import Recommended from "../components/Recommended";
import { BottomBar } from "./components/BottomBar";
import SelfBottomBar from "./components/BottomBar/self";
import GoodsInfo from "./components/GoodsInfo";
import styles from "./styles";

export interface GoodsRouteParams {
    id: string;
    fromSuccess?: boolean;
}

export default () => {
    //#region hooks
    const scrollView = useRef<ScrollView>(null);
    const navigation = useNavigation<Navigation>();
    const route = useRoute<Route<Pages.GoodsDetail>>();
    const [goods, setGoods] = useState<Goods>();
    const appState = useStore("appState");
    const moreComment = useRef<MoreComment>(null);
    const [recommend, setRecommend] = useState<GoodsRecommend>({ total: 0, nextPage: 1, list: [] });
    const [readyRepliedComent, setReadyRepliedComent] = useState<Comment>();
    const [showMessageInput, setShowMessageInput] = useState(false);
    const [commentList, setCommentList] = useState<PagedList<Comment>>({ total: 0, nextPage: 1, list: [] });
    const [moreCommentList, setMoreCommentList] = useState<PagedList<Comment>>({ total: 0, nextPage: 1, list: [] });
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const [initializing, setInitializing] = useState(true);

    useNetworkEffect(() => {
        InteractionManager.runAfterInteractions(async () => {
            await Promise.all([
                getGoodsDetail(),
                getGoodsRecommend(),
                getGoodsComments()
            ]);
            setInitializing(false);
        });
    }, true);

    useFocusEffect(useCallback(() => {
        getGoodsDetail();
        scrollView.current?.scrollTo();
    }, []));



    //#endregion

    const getGoodsDetail = async () => {
        const id = route.params.id;
        const goods = await get(id, "show");
        if (goods)
            setGoods(goods);
    };



    const getGoodsComments = async () => {
        if (commentList.isLastPage) return;
        const id = route.params.id;
        const data = await getComments({ goodsId: id, pageNum: commentList.nextPage });
        if (data && Array.isArray(data?.list))
            setCommentList({
                ...commentList,
                ...data,
                list: commentList.list.concat(data.list)
            });
    };


    const getMoreGoodsComments = async (reload?: boolean) => {
        if (reload !== true && moreCommentList.isLastPage) return;
        const id = route.params.id;
        const data = await getComments({
            goodsId: id,
            pageNum: reload ? undefined : moreCommentList.nextPage
        });
        if (data) {
            setMoreCommentList({
                ...data,
                list: reload ? data.list : moreCommentList.list.concat(data.list)
            });
        }
    };

    const getGoodsRecommend = async () => {
        if (recommend.isLastPage) return;
        const goodsId = route.params.id;
        const data = await getRecommend({ type: "guess", pageNum: recommend.nextPage, goodsId });
        if (data) {
            setRecommend({
                ...data,
                list: recommend.list.concat(data.list)
            });
        }
    };



    const isNotReply = (comment: Comment | SubComment): comment is Comment => {
        return comment.replyId === 0;
    };

    const onSendComment = async (value: string, comment?: Comment,) => {
        const masterComment = comment ?? readyRepliedComent;
        const data = await sendComment(goods!.goodsId, value, masterComment?.id);
        if (data)
            data.master = goods?.pushUser?.userId === appState.session?.userId;
        if (data && !isNotReply(data) && readyRepliedComent) {
            readyRepliedComent.subComments = readyRepliedComent.subComments ?? [];
            readyRepliedComent.subComments.splice(0, 0, data);
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

    const goBack = () => {
        const fromSuccess = route.params?.fromSuccess;
        if (fromSuccess)
            return navigation.dispatch(StackActions.popToTop());
        navigation.goBack();
    };

    const goodsNotFound = () => {
        return initializing !== true && (goods === undefined || goods.state === EnumGoodsState.DELETED);
    };

    const goodsIsOffShelf = () => {
        return initializing !== true && (goods === undefined || goods.state !== EnumGoodsState.ON_THE_SHELF);
    };

    return <View style={[theme.screenView, theme.statusBar]}>

        <NavigationBar
            backLabel={<IconFont name="fanhui-heise1x" />}
            onPressBack={goBack}
            titleContainer={false}
            style={theme.navigationBar}
            forwardLabel={(goodsNotFound() || goodsIsOffShelf() || goods?.master) ? undefined : <IconFont name="xuanxiang" size={getLogicPixel(20)} />}
            onPressForward={(goodsNotFound() || goodsIsOffShelf() || goods?.master) ?
                undefined :
                withAuthDelegate(() => navigation.navigate(Pages.Report, { type: EnumBusinessType.GOODS, id: goods!.goodsId }))
            }
        />


        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <PreLoader.View loading={initializing}>
                <PlaceHolder.NotFoundGoodsView isEmpty={goodsNotFound()}>
                    <ScrollView showsVerticalScrollIndicator={false} ref={scrollView}>
                        <View style={theme.paddingHorizontal}>
                            <View style={styles.userContainer}>
                                <TouchableOpacity activeOpacity={1} style={styles.userInfoContainer}
                                    onPress={() => navigation.navigate(Pages.UserProfile, { userId: goods?.pushUser?.userId! })}
                                >
                                    <Avator source={{ uri: goods?.pushUser?.avatarUrl }} size={getLogicPixel(32)} />

                                    <View style={styles.userInfoDescContainer}>
                                        <Text style={styles.userInfoNameText} numberOfLines={1}>{goods?.pushUser?.userName}</Text>
                                        {/* <Text style={styles.userInfoPositionText} numberOfLines={1}>{goods?.pushUser?.location}</Text>  */}
                                    </View>
                                </TouchableOpacity>
                                {/* <Button type="secondary" size="sm">Follow</Button> */}
                            </View>

                            {goods && <GoodsInfo goods={goods} />}
                        </View>
                        <Divider />
                        {/* <View style={styles.socialInfoContainer}>
                    <View style={styles.socialInfoContainerLeft}>
                        <Image style={styles.socialInfoAvator} source={{ uri: goods?.pushUser?.avatarUrl }}
                            width={styles.socialInfoAvator.width}
                            height={styles.socialInfoAvator.height} resizeMethod="resize" resizeMode="contain" />
                        <View style={styles.socialInfoDescContainer}>
                            <Text style={styles.socialInfoNameText} numberOfLines={1}>
                                {goods?.pushUser?.userName}
                            </Text>
                            <Text style={styles.socialInfoPositionText} numberOfLines={2}>{goods?.pushUser?.location}</Text> 
                        </View>
                    </View>
                    <IconFont name="lie-jinru1x" size={15} />
                </View>
 */}
                        <Divider style={{ backgroundColor: "#F8F9FA" }} height={8} />
                        <View style={theme.paddingHorizontal}>
                            <Divider height={20} />

                            {
                                commentList &&
                                <CommentComponent data={commentList}
                                    onLoadMore={getGoodsComments}
                                    onReadyReply={comment => {
                                        setReadyRepliedComent(comment);
                                        setShowMessageInput(true);
                                    }}
                                    onOpenMore={() => moreComment.current?.open()}
                                />
                            }
                            <Divider />
                        </View>
                        <Divider style={{ backgroundColor: "#F8F9FA" }} height={8} />
                        <Divider height={20} />
                        <Recommended data={recommend.list} title="Guess you like it" />
                        <Divider style={{ backgroundColor: Color.PAGEBACK }} height={20} />
                    </ScrollView>
                    {
                        goods && goods?.state !== EnumGoodsState.ON_THE_SHELF && <View style={styles.availableMask}>
                            <Text style={styles.availableText}>This product is no longer available</Text>
                        </View>
                    }

                    {
                        goods && goods?.master && !showMessageInput && <SelfBottomBar goods={goods}
                            onOffshelfGoods={() => { navigation.goBack(); }}
                            onDeletedGoods={() => { navigation.goBack(); }}

                        />
                    }
                    {
                        goods && !goods?.master && !showMessageInput && <BottomBar
                            goods={goods}
                            onStartMessage={() => {
                                //onStartMessage?.();
                                setShowMessageInput(true);
                            }}
                            //onStartChat={onStartChat}
                            onCollect={getGoodsDetail}
                            onCancelCollect={getGoodsDetail}
                        />
                    }
                </PlaceHolder.NotFoundGoodsView>
            </PreLoader.View>
        </PlaceHolder.NoNetworkView>


        {
            goods && showMessageInput && <MessageInput onSendMessage={(value) => {
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
        {
            goods && commentList.total > 0 && <MoreComment ref={moreComment}
                data={moreCommentList}
                onReload={() => getMoreGoodsComments(true)}
                onLoadMore={() => getMoreGoodsComments()}
                onSendComment={(reply, comment) => {
                    onSendComment(reply, comment);
                }}
            />
        }

    </View>;
};