import { Loading, PreLoader } from '@/components/animations';
import Release from "@/components/animations/Release";
import Divider from '@/components/Divider';
import Iconfont from '@/components/Iconfont';
import Input from "@/components/Input";
import PlaceHolder from "@/components/Placeholder";
import Tip from "@/components/Tip";
import useGpsLocation from "@/hooks/useGpsLocation";
import useNetworkListener from "@/hooks/useNetworkListener";
import NavigationHelper from '@/navigation/helper';
import { Pages } from '@/navigation/pages';
import { addComment, getCommentList, getLeadsList } from '@/services/leads';
import { useStore } from "@/stores";
import theme from '@/theme';
import { Color } from "@/theme/variables";
import { Category } from '@/types/data/CategoryConfig';
import { Leads } from '@/types/data/Leads';
import { LeadsComment, LeadsSubComment } from '@/types/data/LeadsComment';
import { PagedList } from '@/types/data/PagedList';
import { SystemUtils } from "@/utils";
import { getLogicPixel } from '@/utils/pixelRatio';
import { withAuthDelegate } from '@/utils/withAuth';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from "reactive";
import CategorySelectorModal from '../components/CategorySelectorModal';
import { MoreComment } from "../components/Comment/more";
import MessageInput from "../components/MessageInput";
import FilterParams from "./components/FilterParams";
import FilterTags from "./components/FilterTags";
import LeadsItem from './components/LeadsItem';
import Separator from "./components/LeadsItem/separator";
import styles from './styles';


export interface LeadsIndexRouteParams {
    reload?: boolean;
}


export default observer(() => {
    const categorySelectorModal = useRef<CategorySelectorModal>(null);
    const navigation = useNavigation<Navigation>();
    const appState = useStore("appState");
    const searchState = useStore("leadsSearchState");
    const route = useRoute<Route<Pages.LeadsIndex>>();
    const picker = useRef<Picker>(null);
    const [messageInputShow, setMessageInputShow] = useState(false);
    const [keyword, setKeyword] = useState<string>();
    const [leadsData, setLeadsData] = useState<PagedList<Leads>>({ total: 0, list: [] });
    const [readyReplyLeads, setReadyReplyLeads] = useState<Leads>();
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [initializing, setInitializing] = useState(true);
    const [locationInfo, getLocationInfo] = useGpsLocation();
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const moreComment = useRef<MoreComment>(null);
    const [moreCommentList, setMoreCommentList] = useState<PagedList<LeadsComment>>({ total: 0, nextPage: 1, list: [] });
    const lookCommentLeads = useRef<Leads>();
    const release = useRef<Release>(null);

    useNetworkEffect(() => {
        setInitializing(true);
        refresh(true);
    }, true);

    useFocusEffect(useCallback(() => {
        if (route.params?.reload === true) {
            setInitializing(true);
            refresh(true);
        }
        release.current?.play();
    }, []));

    useEffect(() => {
        refresh(true);
    }, [selectedCategories]);

    const refresh = async (reload?: boolean) => {
        if (!isConnected) return;
        await Promise.all([
            refreshLeads(reload),
        ]);
        setInitializing(false);
    };

    const refreshLeads = async (reload?: boolean) => {
        if (reload !== true && leadsData.isLastPage) return;
        if (searchState.queryParams.sort)
            await getLocationInfo();
        const data = await getLeadsList({
            keyword,
            categoryId: searchState.selectedCategories[searchState.selectedCategories.length - 1]?.categoryId,
            longitude: searchState.queryParams.sort ? locationInfo.coords?.longitude : undefined,
            latitude: searchState.queryParams.sort ? locationInfo.coords?.latitude : undefined,
            typed: searchState.queryParams.typed,
            pageNum: reload ? undefined : leadsData.nextPage
        });
        if (data) {
            setLeadsData({
                ...data,
                list: reload ? data.list : leadsData.list.concat(data.list)
            });
        }
    };

    const isNotReply = (comment: LeadsComment | LeadsSubComment): comment is LeadsComment => {
        return !(comment.replyId > 0);
    };

    const onSendComment = async (value: string) => {
        const data = await addComment(readyReplyLeads!.demandId, value);
        if (data)
            data.master = lookCommentLeads.current?.userId === appState.session?.userId;
        if (data && readyReplyLeads && isNotReply(data)) {
            readyReplyLeads.hotComments = readyReplyLeads.hotComments ?? [];
            readyReplyLeads.hotComments.splice(0, 0, data);
            readyReplyLeads.commentCount += 1;
            setLeadsData({
                ...leadsData
            });
            setReadyReplyLeads(undefined);
        }
    };

    const onModalSendComment = async (value: string, comment?: LeadsComment) => {
        const leads = lookCommentLeads.current!;
        const data = await addComment(leads.demandId, value, comment?.id);
        if (data)
            data.master = lookCommentLeads.current?.userId === appState.session?.userId;
        if (data && leads && !isNotReply(data) && comment) {
            comment.subComments = comment.subComments ?? [];
            comment.subComments.splice(0, 0, data);
            setMoreCommentList({
                ...moreCommentList
            });
        }
        else if (data && leads && isNotReply(data)) {
            moreCommentList.list = moreCommentList.list ?? [];
            moreCommentList.list.splice(0, 0, data);
            moreCommentList.total += 1;
            setMoreCommentList({
                ...moreCommentList
            });
        }
    };

    const getMoreComments = async (reload?: boolean) => {
        if (reload !== true && moreCommentList.isLastPage) return;
        const data = await getCommentList(
            lookCommentLeads.current!.demandId,
            reload ? undefined : moreCommentList.nextPage
        );
        if (data) {
            setMoreCommentList({
                ...data,
                list: reload ? data.list : moreCommentList.list.concat(data.list)
            });
        }
    };

    const memoizedLeadsItem = useMemo(() => ({ item }: { item: Leads; }) => <LeadsItem key={`leadsItem_${item.demandId}`}
        data={item}
        showReply
        onReadyReply={() => {
            setReadyReplyLeads(item);
            setMessageInputShow(true);
        }}
        onPressMessageIcon={() => {
            lookCommentLeads.current = item;
            setReadyReplyLeads(item);
            moreComment.current?.open();
        }}
        showTag
        onTagPress={typed => { searchState.setParams("typed", typed); refresh(true); }}
    />, [leadsData.list]);

    return <View style={[theme.screenView, styles.background]}>
        <View style={[theme.statusBar, styles.backgroundWhite]}></View>
        <View style={[theme.paddingHorizontal, styles.backgroundWhite]}>
            <View style={[styles.topBar]}>
                <Text style={styles.topBarLeft}>Leads</Text>
                <Text style={styles.topBarRight} onPress={withAuthDelegate(() => navigation.navigate(Pages.LeadsMy))}>My Leads</Text>
            </View>
        </View>
        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <View style={[styles.backgroundWhite]}>
                <Divider height={getLogicPixel(SystemUtils.isAndroid ? 6 : 4)} />
                <View style={[theme.paddingHorizontal, styles.searchBar]}>
                    <View style={styles.searchInputContainer}>
                        <View style={styles.searchIcon}>
                            <Iconfont name="sousuo1x" size={getLogicPixel(19)} color={Color.SECONDARY_3} />
                        </View>
                        <Input
                            style={styles.searchTextInput}

                            placeholder="Enter keyword search"
                            placeholderTextColor={Color.SECONDARY_4}
                            onChange={value => setKeyword(value)}
                            value={keyword}
                            onSubmitEditing={() => {
                                if (!keyword) searchState.clearParams();
                                refresh(true);
                            }}
                            blurOnSubmit
                            returnKeyLabel="Search"
                            returnKeyType="default"
                        />
                    </View>
                    <Picker
                        ref={picker}
                        label={false}
                        cancelable={true}
                        activeIcon={<Iconfont name="shaidexuanliebiao" />}
                        inactiveIcon={<Iconfont name="shaidexuanliebiao" color={searchState.hasFilterParams ? undefined : Color.SECONDARY_2} />}
                        style={styles.picker}
                    >
                        <View style={styles.slideModalContent} >
                            <View style={theme.paddingHorizontal}>
                                <Divider style={styles.divider} />
                            </View>

                            <FilterParams onConfirm={() => {
                                picker.current?.close();
                                refresh(true);
                            }}
                            />
                        </View>
                    </Picker>
                </View>
                <FilterTags onChange={() => refresh(true)} />
            </View>

            <View style={styles.separator} />
            <PreLoader.View loading={initializing}>
                <Loading.FlatList
                    data={leadsData.list}
                    renderItem={memoizedLeadsItem}
                    ItemSeparatorComponent={() => <Separator />}
                    keyExtractor={item => `leadsItem_${item.demandId}`}
                    isLastPage={leadsData.isLastPage}
                    lastPageFooterComponent={<></>}
                    onScrollTopLoad={() => refresh(true)}
                    onScrollEndLoad={refresh}
                    emptyPlaceType="nosearchdata"
                />

            </PreLoader.View>

            <TouchableOpacity style={styles.addButton} onPress={withAuthDelegate(() => NavigationHelper.goPostLeads(Pages.RootTab))}>
                {
                    SystemUtils.isAndroid ? <Image source={require('@/assets/images/leadsRelease.png')} /> : <Release ref={release} loop={false} onAnimationFinish={() => release.current?.pause()} />
                }

            </TouchableOpacity>

            {
                messageInputShow && <MessageInput
                    onSendMessage={(value) => {
                        if (!value) {
                            Tip.show("content must not be blank");
                            return;
                        }
                        value && onSendComment(value);
                        setMessageInputShow(false);
                    }}
                    onBlur={() => setMessageInputShow(false)}
                    onPressOut={() => setMessageInputShow(false)}
                    hasBottomBar
                />
            }
            <CategorySelectorModal
                selectedids={selectedCategories.map(x => x.categoryId)}
                ref={categorySelectorModal}
                onItemSelected={values => setSelectedCategories(values)}
            />

            <MoreComment ref={moreComment}
                data={moreCommentList}
                onReload={() => getMoreComments(true)}
                onLoadMore={() => getMoreComments()}
                onSendComment={(reply, comment) => {
                    onModalSendComment(reply, comment);
                }}

            />
        </PlaceHolder.NoNetworkView>
    </View>;
});