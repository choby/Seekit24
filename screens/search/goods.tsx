import { Loading } from "@/components/animations";
import { LoadingScrollView } from "@/components/animations/Loading";
import LinearGradient from "@/components/LinearGradient";
import PlaceHolder from "@/components/Placeholder";
import useNetworkListener from "@/hooks/useNetworkListener";
import { searchGoods } from "@/services/goods";
import { useStore } from "@/stores";
import theme from "@/theme/index";
import { Category } from "@/types/data/CategoryConfig";
import type { GoodsSearch } from "@/types/data/GoodsSearch";
import { EnumSearchSortType } from "@/types/enums";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { InteractionManager, View } from "react-native";
import GoodsFalls from "../components/GoodsFalls";
import Filter from "./components/Filter";
import NoData from "./components/NoData";



interface SearchGoodsProps {
    keyword?: string;
    categoryId?: number;
}

export default observer(({ keyword, categoryId }: SearchGoodsProps) => {
    const appState = useStore("appState");
    const searchState = useStore("searchState");
    const scrollView = useRef<LoadingScrollView>(null);
    const [searchKeyword, setKeyword] = useState<string | undefined>(keyword);
    const [searchData, setSearchData] = useState<GoodsSearch>({ total: 0, nextPage: 1, list: [] });
    const [noData, setNoData] = useState(false);
    const [isConnected, fetchNetState, useNetworkEffect] = useNetworkListener();
    const filter = useRef<Filter>(null);
    const navigation = useNavigation<Navigation>();

    useNetworkEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            refreshSearch(true);
            handleState();
        });
    }, true);


    useEffect(() => {
        navigation.addListener("blur", () => {
            filter.current?.closeAll(-1);
        });
        return () => navigation.removeListener("blur", () => { });
    }, []);

    useEffect(() => {
        setKeyword(keyword);
    }, [keyword]);

    useEffect(() => {
        refreshSearch(true);
        handleState();
    }, [searchKeyword]);

    const handleState = () => {
        searchState.clearParams();
        if (searchKeyword) {
            searchState.getFilter(searchKeyword);
        }
        if (categoryId) {
            searchState.getFilter(undefined, categoryId);
            searchState.setParams("categoryId", categoryId);
            searchState.setSelectedCategories([{ categoryId: categoryId } as Category]);
        }

    };

    const refreshSearch = async (reload?: boolean) => {
        if (!isConnected || (reload !== true && searchData.isLastPage)) return;
        const data = await searchGoods({
            ...searchState.queryParams,
            location: searchState.queryParams.sort === EnumSearchSortType.DISTANCE && appState.location.coords ? `${appState.location.coords?.latitude},${appState.location.coords?.longitude}` : undefined,
            keyword: searchKeyword,
            pageNum: reload ? undefined : searchData.nextPage
        });
        if (data && reload) {
            setSearchData({
                ...searchData,
                ...data,
                list: data.list
            });
            scrollView.current?.scrollTo(0);
        }
        else if (data) {
            setSearchData({
                ...searchData,
                ...data,
                list: searchData.list.concat(data.list)
            });
        }

        setNoData(!!!(data && data.total > 0));
    };

    return <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
        <View style={theme.paddingHorizontal}>
            <Filter ref={filter} onRefresh={() => {
                refreshSearch(true);
            }} />
        </View>

        <Loading.ScrollView
            ref={scrollView}
            onScrollEndLoad={refreshSearch}
            onScrollTopLoad={() => refreshSearch(true)}
            isLastPage={searchData.isLastPage}
            lastPageFooterComponent={<></>}
        >

            {
                noData && <NoData />
            }
            <View style={[theme.paddingHorizontal, theme.grayBackground]}>
                <LinearGradient />
                {
                    searchData.total > 0 && <GoodsFalls data={searchData.list} />
                }
            </View>
        </Loading.ScrollView>
    </PlaceHolder.NoNetworkView>;
});


