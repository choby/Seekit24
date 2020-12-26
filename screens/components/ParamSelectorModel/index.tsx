import React from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio';
import BottomModal from '@/components/BottomModal';
import Iconfont from '@/components/Iconfont';
import _ from 'lodash';
import { Brand } from '@/types/data/BrandConfig';
import { Attribute, AttributeValue, RelevanceAttribute } from '@/types/data/AttributeConfig';



export interface ParamSelectorModelProps {
    brand?: Brand;
    selected?: {
        [key: number]: AttributeValue;
    };
    relevanceAttributes?: RelevanceAttribute[];
    attributes: Attribute[];
    onItemSelected?: (value: {
        [key: number]: AttributeValue;
    }) => void;
}

/**
 * 商品属性选择弹窗 使用场景: 1: 商品发布/编辑 2: 商品搜索
 */
export default class ParamSelectorModel extends React.Component<ParamSelectorModelProps, {
    relevanceAttributes: RelevanceAttribute[];
    attributes: Attribute[];
    selected: {
        [key: number]: AttributeValue;
    };
}> {
    private bottomModal = React.createRef<BottomModal>();

    constructor(props: ParamSelectorModelProps) {
        super(props);
        this.state = {
            attributes: props.attributes,
            relevanceAttributes: props.relevanceAttributes ?? [],
            selected: props.selected ?? {} as any
        }
    }

    UNSAFE_componentWillReceiveProps(props: ParamSelectorModelProps) {
        if (!_.isEqual(props.attributes, this.props.attributes)) {
            this.setState({
                attributes: props.attributes
            });
        }
        if (!_.isEqual(props.relevanceAttributes, this.props.relevanceAttributes)) {
            this.setState({
                relevanceAttributes: props.relevanceAttributes ?? []
            });
        }
        if (props.selected && !_.isEqual(props.selected, this.props.selected)) {
            this.setState({
                selected: props.selected
            });
        }
    }

    // async componentDidMount() {
    //     this.refresh();
    // }

    // private async refresh() {
    //     const { categoryId } = this.props;
    //     const config = await getAttributeConfig(categoryId);
    //     if (config) this.setState({ config });
    // }

    open() {
        this.bottomModal.current?.open();
    }
    close() {
        this.bottomModal.current?.close();
    }


    onPress(attrId: number, item: AttributeValue) {
        const { selected } = this.state;
        this.setState({
            selected: {
                ...selected,
                [attrId]: item
            }
        }, () => {
            const { selected } = this.state;
            this.props.onItemSelected?.(selected);
        })
    }

    private isSelected(item: Attribute, child: AttributeValue) {
        const { selected } = this.state;
        return Object.keys(selected).includes(`${item.attrId}`) && _.isEqual(selected[item.attrId], child);
    }

    private getValues(attr: Attribute) {
        const { selected, relevanceAttributes } = this.state;
        if (!Array.isArray(relevanceAttributes) || relevanceAttributes.length === 0)
            return attr.values;

        //关联属性
        if (relevanceAttributes.map(rel => rel.attrId).includes(attr.attrId)) {
            const valueIds = relevanceAttributes.filter(rel => rel.attrId === attr.attrId).map(rel => rel.valueId);
            return attr.values.filter(val => valueIds.includes(val.attrValId));
        }

        const selectedValues = Object.keys(selected).map(key => ({ id: Number(key), value: selected[Number(key)] }));

        // 关联属性1
        const relAttr = relevanceAttributes.find(a => selectedValues.some(x => x.id === a.attrId && x.value.attrValId === a.valueId));
        if (!!!relAttr) return attr.values;

        const valueIds = relAttr.relevances.filter(x => x.attrId === attr.attrId).map(x => x.valueId);
        if (valueIds.length > 0) {
            return attr.values.filter(a => valueIds.includes(a.attrValId));
        }

        // 关联属性2
        const relValues = relAttr.relevances.filter(a => selectedValues.some(x => x.id === a.attrId && x.value.attrValId === a.valueId));
        if (relValues.length === 0 || relValues.filter(a => a.attrId === attr.attrId).length === 0)
            return attr.values;

        return attr.values.filter(a => relValues.map(x => x.valueId).includes(a.attrValId));

    }

    render() {
        const { attributes } = this.state;

        return <BottomModal ref={this.bottomModal}>
            <View style={{ height: pixelRatio.screenSize.height - getLogicPixel(13) - pixelRatio.statusBarHeight }}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => this.close()}>
                        <Iconfont name="yemianguanbi-hei1x" size={getLogicPixel(20)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Product Parameters</Text>
                </View>

                <ScrollView>
                    <View style={styles.tipContainer}>
                        <Text style={styles.tipText}>
                            Warm tip: the more detailed the product
                            parameters are, the better the sales rate of your
                            products will be
                    </Text>
                    </View>
                    {Array.isArray(attributes) && attributes.map(item => <View key={item.attrId}>
                        <View style={styles.listItemTitleContainer}>
                            <Text style={styles.listItemTitleText}>{item.attrName}</Text>
                        </View>
                        <View style={styles.listItemContainer}>
                            {
                                Array.isArray(item.values) && item.values.map(child => <TouchableOpacity
                                    style={[styles.listitemTag, this.isSelected(item, child) ? styles.listitemTagSelected : undefined]}
                                    key={child.valueName}
                                    onPress={() => this.onPress(item.attrId, child)}>
                                    <Text style={[styles.listitemTagText, this.isSelected(item, child) ? styles.listitemTagTextSelected : undefined]}>{child.valueName}</Text>
                                </TouchableOpacity>)
                            }
                        </View>
                    </View>)}
                </ScrollView>
            </View>

        </BottomModal>;
    }
}
