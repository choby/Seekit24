import BottomModal from '@/components/BottomModal';
import DotIndicator from "@/components/DotIndicator";
import GoMore from '@/components/GoMore';
import Iconfont from '@/components/Iconfont';
import { getCategoryConfig } from '@/services/category';
import { Category } from '@/types/data/CategoryConfig';
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio';
import _ from "lodash";
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Longlist } from 'reactive';
import CollapseTagSelector from '../CollapseTagSelector';
import styles from './styles';

interface CategorySelectorModalProps {
    selectedids?: number[];
    onItemSelected?: (values: Category[]) => void;
    onClose?: () => void;
    categories?: Category[];
}

/**
 * 分类选择弹窗
 * 使用场景:
 * 1: 商品发布/编辑
 * 2: 商品搜索
 * 3: 求购发布
 * 4: 求购搜索
 */

export default class CategorySelectorModal extends React.Component<CategorySelectorModalProps, {
    selectedData: Category[];
    categories: Category[];
}> {
    /**
     *
     */
    constructor(props: CategorySelectorModalProps) {
        super(props);
        const { categories } = this.props;
        this.state = {
            selectedData: [],
            categories: categories ?? []
        };
    }
    private bottomModal = React.createRef<BottomModal>();

    componentDidMount() {
        if (!this.props.categories) {
            (async () => {
                const configs = await getCategoryConfig();
                if (configs) {

                    const ids = this.props.selectedids ?? [];
                    const selectedData = configs.categoryData.filter(x => ids.includes(x.categoryId));
                    this.setState({
                        selectedData,
                        categories: configs.categoryData
                    });
                }
            })();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps: CategorySelectorModalProps) {
        const ids = nextProps.selectedids ?? [];
        const selectedData = this.state.categories.filter(x => ids.includes(x.categoryId));
        this.setState({ selectedData });
        if (!_.isEqual(this.props.categories, nextProps.categories)) {
            this.setState({ categories: nextProps.categories ?? [] });
        }
    }

    open() {
        this.bottomModal.current?.open();
    }
    close() {
        this.bottomModal.current?.close();
        this.props.onClose?.();
    }

    onItemSelected(values: Category[]) {
        this.setState({ selectedData: [...values] }, () => {
            const { selectedData, } = this.state;
            this.props?.onItemSelected?.(selectedData);
        });
    }

    render() {
        const { categories, selectedData } = this.state;
        const { selectedids } = this.props;

        return <BottomModal ref={this.bottomModal}>
            <View style={{ height: pixelRatio.screenSize.height - getLogicPixel(13) - pixelRatio.statusBarHeight }}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => this.close()}>
                        <Iconfont name="yemianguanbi-hei1x" size={getLogicPixel(20)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onItemSelected([])}>
                        <Text style={styles.reselectText}>Reselect</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Category</Text>
                </View>
                <View style={styles.categoryContainer}>

                    <Longlist
                        data={categories}
                        renderItem={({ item, index }: { item: Category, index: number; }) => <TouchableOpacity
                            key={index} style={[styles.levelOneItemContainer, selectedData.includes(item) ? styles.levelOneItemContainerActive : undefined]}
                            onPress={() => {
                                this.onItemSelected([item]);
                                if (!item.children || item.children.length === 0) {
                                    this.close();
                                }
                            }}
                        >
                            <Text numberOfLines={1} style={[styles.levelOneItemText, selectedData.includes(item) ? styles.levelOneItemTextActive : undefined]}>{item.categoryName}</Text>
                            {selectedData.includes(item) && <DotIndicator />}
                            {selectedData.length === 0 && <GoMore text={""} />}
                        </TouchableOpacity>}
                        renderFooter={() => <></>}
                        style={styles.levelOne} />
                    {selectedData.length > 0 && Array.isArray(selectedData[0].children) && selectedData[0].children.length > 0 &&
                        <View style={styles.levelTwo}>
                            <ScrollView>
                                <CollapseTagSelector
                                    selectedids={selectedids}
                                    data={selectedData[0].children ?? []}
                                    onItemSelected={values => {
                                        this.onItemSelected([selectedData[0], ...values]);
                                        if (values && values.length > 0 && !values[values.length - 1].children) {
                                            this.close();
                                        }
                                    }}
                                    style={{ paddingRight: getLogicPixel(20), paddingLeft: getLogicPixel(12) }}
                                />
                            </ScrollView>
                        </View>
                    }
                </View>
            </View>
        </BottomModal>;
    }
}