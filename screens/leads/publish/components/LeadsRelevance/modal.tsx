import { Loading, PreLoader } from "@/components/animations";
import BottomModal from '@/components/BottomModal';
import Iconfont from '@/components/Iconfont';
import { getUserGoodsList } from "@/services/goods";
import theme from "@/theme";
import { Goods } from "@/types/data/Goods";
import { PagedList } from "@/types/data/PagedList";
import { EnumGoodsState } from "@/types/enums";
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

interface LeadsRelevanceModalProps {
    selectedids?: number[];
    onItemSelected?: (goods: Goods) => void;
    onClose?: () => void;
}

/**
 * 商品选择弹窗
 * 使用场景:
 * 1: 求购发布/编辑
 */

export default class LeadsRelevanceModal extends React.Component<LeadsRelevanceModalProps, {
    initializing: boolean;
    goodsList: PagedList<Goods>;
}> {
    /**
     *
     */
    constructor(props: LeadsRelevanceModalProps) {
        super(props);
        this.state = {
            initializing: true,
            goodsList: {
                total: 0, list: [], pageSize: 10
            }
        };
    }
    private bottomModal = React.createRef<BottomModal>();

    componentDidMount() {
        this.refreshGoodsList(true).then(() => this.setState({ initializing: false }));
    }

    private refreshGoodsList = async (reload?: boolean) => {
        const { goodsList } = this.state;
        if (reload !== true && goodsList.isLastPage === true) return;
        const data = await getUserGoodsList(`${EnumGoodsState.ON_THE_SHELF}`, reload ? undefined : goodsList.nextPage, undefined);
        if (data) {
            if (reload)
                this.setState({
                    goodsList: {
                        ...data
                    }
                });
            else
                this.setState({
                    goodsList: {
                        ...data,
                        list: goodsList.list?.concat(data.list)
                    }
                });
        }
    };



    open() {
        this.bottomModal.current?.open();
    }
    close() {
        this.bottomModal.current?.close();
        this.props.onClose?.();
    }

    private onItemSelected(goods: Goods) {
        const { onItemSelected } = this.props;
        onItemSelected?.(goods);
        this.close();
    }

    private renderItem = (goods: Goods) => <View key={`goods_${goods.goodsId}`} style={[theme.paddingHorizontal, styles.goodsInfoItemContainer]}>
        <TouchableOpacity activeOpacity={1} style={styles.goodsInfoContainer} onPress={() => this.onItemSelected(goods)}>
            <View style={styles.goodsImage}  >
                <Image
                    source={{ uri: goods.coverUrl }}
                    resizeMode="cover"
                    style={styles.goodsImage}
                    width={styles.goodsImage.width}
                    height={styles.goodsImage.height}
                />
            </View>


            <View style={styles.goodsInfoDesc} >
                <View>
                    <Text numberOfLines={2} style={styles.goodsInfoTitle}>{goods.goodsName}</Text>
                    <View style={styles.goodsInfoAssetsContainer}>
                        <View style={styles.goodsInfoAssetsItem}>
                            <Iconfont name="liuyanlb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssets}>{goods.chatCount}</Text>
                        </View>
                        <View style={styles.goodsInfoAssetsItem}>
                            <Iconfont name="liulanlb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssets}>{goods.pageViewCount}</Text>
                        </View>
                        <View style={styles.goodsInfoAssetsItem}>
                            <Iconfont name="xiangyaolb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssets}>{goods.collectionCount}</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.goodsInfoPriceCurrency}>$<Text style={styles.goodsInfoPriceAmount}>{goods.goodsPrice}</Text></Text>
            </View>
        </TouchableOpacity>

    </View>;


    render() {
        const { initializing, goodsList } = this.state;
        return <BottomModal ref={this.bottomModal}>
            <View style={[{ height: pixelRatio.screenSize.height - getLogicPixel(80) - pixelRatio.statusBarHeight }]}>
                <View style={[theme.paddingHorizontal, styles.closeContainer]}>
                    <Text style={styles.reselectText}>Add Product</Text>
                    <TouchableOpacity onPress={() => this.close()}>
                        <Iconfont name="yemianguanbi-hei1x" size={getLogicPixel(20)} />
                    </TouchableOpacity>
                </View>
                <PreLoader.View loading={initializing} >
                    <Loading.FlatList<Goods>
                        renderItem={({ item }) => this.renderItem(item)}
                        data={goodsList.list}
                        contentContainerStyle={theme.paddingHorizontal}

                        keyExtractor={(item) => `goods_${item.goodsId}`}
                        isLastPage={goodsList.isLastPage}
                        lastPageFooterComponent={<View style={styles.noMore}>
                            <Text style={styles.noMoreText}>
                                No more products
                            </Text>
                        </View>}
                        onScrollEndLoad={this.refreshGoodsList}
                        onScrollTopLoad={() => this.refreshGoodsList(true)}
                    />
                </PreLoader.View>
            </View>
        </BottomModal>;
    }
}