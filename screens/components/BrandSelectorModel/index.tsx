import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio';
import BottomModal from '@/components/BottomModal';
import Iconfont from '@/components/Iconfont';
import _ from 'lodash';
import { Brand } from '@/types/data/BrandConfig';



export interface BrandSelectorModalProps {
    selected?: Brand;
    brands: Brand[];
    canSkip?: boolean;
    onItemSelected?: (value: Brand) => void;
}

/**
 * 品牌选择弹窗 使用场景: 1: 商品发布/编辑 2: 商品搜索
 */
export default class BrandSelectorModal extends React.Component<BrandSelectorModalProps, {
    items: Brand[];
    selected: Brand;
}> {
    private bottomModal = React.createRef<BottomModal>();

    constructor(props: BrandSelectorModalProps) {
        super(props);
        this.state = {
            items: props.brands,
            selected: props.selected ?? {} as any
        }
    }

    UNSAFE_componentWillReceiveProps(props: BrandSelectorModalProps) {
        if (!_.isEqual(props.brands, this.props.brands)) {
            this.setState({
                items: props.brands
            });
        }
        if (props.selected && !_.isEqual(props.selected, this.props.selected)) {
            this.setState({
                selected: props.selected
            });
        }
    }



    open() {
        this.bottomModal.current?.open();
    }
    close() {
        this.bottomModal.current?.close();
    }


    onPress(item: Brand) {
        this.setState({ selected: item }, () => {
            const { selected } = this.state;
            this.props.onItemSelected?.(selected);
        })
    }

    render() {
        const { items, selected } = this.state;

        return <BottomModal ref={this.bottomModal}>
            <View style={{ height: pixelRatio.screenSize.height - getLogicPixel(13) - pixelRatio.statusBarHeight }}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => this.close()}>
                        <Iconfont name="yemianguanbi-hei1x" size={getLogicPixel(20)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose Brand</Text>
                </View>
                <ScrollView>
                    <View style={styles.listItemContainer}>
                        {
                            Array.isArray(items) && items.map(item => <TouchableOpacity
                                style={[styles.listitemTag, selected.brandId === item.brandId ? styles.listitemTagSelected : undefined]}
                                key={item.brandId}
                                onPress={() => this.onPress(item)}>
                                <Text style={[styles.listitemTagText, selected.brandId === item.brandId ? styles.listitemTagTextSelected : undefined]}>{item.brandName}</Text>
                            </TouchableOpacity>)
                        }
                    </View>
                </ScrollView>
            </View>

        </BottomModal>;
    }
}
