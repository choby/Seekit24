import { Loading, PreLoader } from '@/components/animations';
import Avator from '@/components/Avator';
import IconFont from "@/components/Iconfont";
import Modal from '@/components/Modal';
import Moment from "@/components/Moment";
import PlaceHolder from '@/components/Placeholder';
import RefreshControl from '@/components/RefreshControl';
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from '@/navigation/pages';
import { deleteMessage, getMessageList, updateMessageState } from '@/services/message';
import { Message } from '@/types/data/MessageList';
import { PagedList } from '@/types/data/PagedList';
import { EnumMsgReadState, EnumMsgType } from '@/types/enums';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Badge } from 'reactive';
import styles from "./styles";

export default () => {
    const navigation = useNavigation<Navigation>();
    const [messageList, setMessageList] = useState<PagedList<Message>>({ total: 0, list: [], pageNum: 1 });
    const [initializing, setInitializing] = useState(true);
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();

    useNetworkEffect(() => {
        refreshMessage().then(() => setInitializing(false));
    }, true);

    const refreshMessage = async (reload?: boolean) => {
        if (reload !== true && messageList.isLastPage) return;
        const data = await getMessageList(EnumMsgType.LEADS, reload ? 1 : messageList.nextPage);
        if (data) {
            setMessageList({
                ...data,
                list: reload ? data.list : messageList.list.concat(data.list)
            });
        }
    };

    const renderRightAction = (x: number, progress: Animated.AnimatedInterpolation, item: Message) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
            extrapolate: "clamp"
        });
        const pressHandler = () => {
            Modal.show({
                content: "Delete message cannot be recovered. Are you sure you want to delete?",
                okText: "Delete",
                cancelText: "Cancel",
                onCancelPress: () => { },
                onOkPress: async () => {
                    const result = await deleteMessage(item.msgId);
                    if (result) {
                        setMessageList({
                            ...messageList,
                            list: messageList.list.filter(x => x.msgId !== item.msgId)
                        });
                    }
                }
            });
        };
        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <TouchableOpacity activeOpacity={1}
                    style={[styles.rightAction]}
                    onPress={pressHandler}>
                    <IconFont name="zuohua-qingchu1x" size={30} />
                </TouchableOpacity>
            </Animated.View>
        );
    };

    const onMessagePress = (item: Message) => {
        setMsgRead(item);
        navigation.navigate(Pages.LeadsDetail, { id: item.objectKey });
    };

    const setMsgRead = async (item: Message) => {
        const state = EnumMsgReadState.READED;
        const result = await updateMessageState(item.msgId, state);
        if (result) {
            item.readState = state;
            setMessageList({
                ...messageList
            });
        }
    };

    const renderRightActions: (
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation,
        item: Message
    ) => React.ReactNode = (progress, _drag, item) => (
        <View style={{ width: 98, flexDirection: "row" }}>
            <View style={{ width: "100%", flexDirection: "row" }}>
                {renderRightAction(98, progress, item)}
            </View>
        </View>
    );

    return <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
        <PreLoader.View loading={initializing} >
            <PlaceHolder.NoMessageView isEmpty={messageList.total === 0} canRefresh={true} onRefresh={() => refreshMessage(true)} >
                <Loading.FlatList<Message>
                    data={messageList.list}
                    renderItem={({ item }) => <TouchableOpacity
                        onPress={() => onMessagePress(item)}
                        activeOpacity={1}
                        style={styles.notifyItemContainer}
                        key={`leads_${item.msgId}`}
                    >
                        <Swipeable
                            renderRightActions={(progressAnimatedValue, dragAnimatedValue) => renderRightActions(progressAnimatedValue, dragAnimatedValue, item)}
                            friction={2}
                            leftThreshold={80}
                            rightThreshold={10}
                        >
                            <View style={styles.notifyItemSwiper}>
                                <View>
                                    {
                                        item.readState === EnumMsgReadState.UNREAD && <Badge style={styles.badge} />
                                    }
                                    <Avator source={{ uri: item.avatarUrl }} size={48} />
                                </View>

                                <View style={styles.notifyContentContainer}>
                                    <Text style={styles.notifyTitle} numberOfLines={1}>{item.userName}</Text>
                                    <Text style={styles.notifyContent} numberOfLines={1}>{item.msgContent}</Text>
                                    <Moment calendar={true} style={styles.notifyTime} >{item.createTime}</Moment>
                                </View>
                                <Image source={{ uri: item.coverUrl }} style={styles.notifyImage} />
                            </View>
                            <View style={styles.leadsContent}>
                                <Text numberOfLines={1} style={styles.leadsContentText}>{item.description}</Text>
                            </View>
                        </Swipeable>
                    </TouchableOpacity>}
                    refreshControl={<RefreshControl onRefresh={() => refreshMessage(true)} />}
                    keyExtractor={item => `leads_${item.msgId}`}
                    isLastPage={messageList.isLastPage}
                    lastPageFooterComponent={<></>}
                    onScrollEndLoad={refreshMessage}
                    onScrollTopLoad={() => refreshMessage(true)}
                />
            </PlaceHolder.NoMessageView>
        </PreLoader.View>
    </PlaceHolder.NoNetworkView>;

};