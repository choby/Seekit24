import { Color } from "@/theme/variables";
import { scrollViewEndLoad } from '@/utils';
import LottieView from 'lottie-react-native';
import React from 'react';
import { FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent, ScrollView, ScrollViewProps, View } from 'react-native';
import PlaceHolder from "../Placeholder";
import { tipImages } from "../Placeholder/PlaceHolderContent";
import RefreshControl from '../RefreshControl';
import AnimationBase, { AnimatedLottieViewProps } from './animationBase';

interface LoadingViewProps {
    loading?: boolean;
}

export class LoadingView extends React.Component<LoadingViewProps> {
    private preLoader = React.createRef<Loading>();
    componentDidMount() {
        this.preLoader.current?.play();
    }
    render() {
        const { loading, children } = this.props;
        return loading === true ? <View style={{ alignItems: "center", marginTop: "45%" }}>
            <Loading ref={this.preLoader} />
        </View> : children;
    }
}

type LoadingScrollViewProps = ScrollViewProps
    & ({ isLastPage?: false; } | { isLastPage: true, lastPageFooterComponent: React.ReactNode; })
    & {
        onScrollEndLoad?: () => void;
        onScrollTopLoad?: () => void;
    };

export class LoadingScrollView extends React.Component<LoadingScrollViewProps>{

    constructor(props: LoadingScrollViewProps) {
        super(props);
    }
    private loadLock = false; //加载锁, 防止重复刷新
    private scrollView = React.createRef<ScrollView>();
    private loader = React.createRef<Loading>();

    private async onMomentumScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const { isLastPage, onScrollEndLoad, onMomentumScrollEnd } = this.props;
        onMomentumScrollEnd?.(event);
        if (!this.loadLock && isLastPage !== true && onScrollEndLoad) {
            scrollViewEndLoad(event, async () => {
                this.loadLock = true;
                await onScrollEndLoad();
                this.loadLock = false;
            });
        }
    }

    componentDidMount() {
        this.loader.current?.play();
    }

    public scrollTo(y?: number | { x?: number; y?: number; animated?: boolean; }, x?: number, animated?: boolean) {
        this.scrollView.current?.scrollTo(y, x, animated);
    }

    public scrollToTop() {
        this.scrollView.current?.scrollTo({ x: 0, y: 0, animated: true });
    }

    render() {
        const { children, isLastPage, onScrollTopLoad, ...otherProps } = this.props;
        return <ScrollView
            ref={this.scrollView}
            refreshControl={onScrollTopLoad ? <RefreshControl onRefresh={onScrollTopLoad} /> : undefined}
            {...otherProps}
            onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}>
            {children}
            {
                isLastPage !== true && <View style={{ alignItems: "center", backgroundColor: Color.PAGEBACK }}>
                    <Loading autoPlay ref={this.loader} />
                </View>
            }
            {
                this.props.isLastPage === true && this.props.lastPageFooterComponent
            }

        </ScrollView>;
    }
}

type LoadingFlatListProps<T> = Omit<FlatListProps<T>, "ListFooterComponent" | "onMomentumScrollEnd"> & (
    { isLastPage?: false; }
    | { isLastPage: true, lastPageFooterComponent: React.ComponentType<T> | React.ReactElement; })
    & {
        onScrollEndLoad?: () => void;
        onScrollTopLoad?: () => void;
        emptyDataText?: string;
        emptyPlaceType?: keyof typeof tipImages;
    };
class LoadingFlatList<T> extends React.PureComponent<LoadingFlatListProps<T>>{
    private loadLock = false; //加载锁, 防止重复刷新
    private loader = React.createRef<Loading>();
    private async onMomentumScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const { isLastPage, onScrollEndLoad } = this.props;
        if (!this.loadLock && isLastPage !== true && onScrollEndLoad) {
            scrollViewEndLoad(event, async () => {
                this.loadLock = true;
                await onScrollEndLoad();
                this.loadLock = false;
            });

        }
    }

    componentDidMount() {
        this.loader.current?.play();
    }

    render() {
        const { onScrollTopLoad, data, emptyDataText, emptyPlaceType } = this.props;
        const footerComponent: React.ComponentType<T> | React.ReactElement | null
            = data && data.length > 0 ? (this.props.isLastPage === true ? this.props.lastPageFooterComponent : <View style={{ alignItems: "center", backgroundColor: Color.PAGEBACK }}>
                <Loading autoPlay />
            </View>) : null;

        return <FlatList<T>
            ListEmptyComponent={<PlaceHolder type={emptyPlaceType ?? "empty"} text={emptyDataText ?? "No list information"} />}
            refreshControl={onScrollTopLoad ? <RefreshControl onRefresh={onScrollTopLoad} /> : undefined}
            {...this.props}
            contentContainerStyle={!data || data.length === 0 ? { flex: 1, justifyContent: "center" } : undefined}
            onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
            ListFooterComponent={footerComponent}
        />;
    }
}


class Loading extends AnimationBase<AnimatedLottieViewProps> {
    static View = LoadingView;
    static ScrollView = LoadingScrollView;
    static FlatList = LoadingFlatList;
    /**
     *
     */
    constructor(props: AnimatedLottieViewProps) {
        super(props);

    }
    render() {
        return <LottieView
            {...this.props}
            ref={this.lottieView}
            {...this.props}
            style={{
                height: 44,
            }}
            source={require('@/assets/animation/loading.json')}
        />;
    }
}

export default Loading;

