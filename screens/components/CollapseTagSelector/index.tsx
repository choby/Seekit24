import IconFont from '@/components/Iconfont';
import { Category } from '@/types/data/CategoryConfig';
import { getLogicPixel } from '@/utils/pixelRatio';
import _ from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';

export interface CollapseTagSelectorDataItem extends Category {
    imageUrl?: string;
    children?: Category[];
}
export interface CollapseTagSelectorProps<CollapseTagSelectorDataItem> {
    data: CollapseTagSelectorDataItem[];
    onItemSelected?: (value: CollapseTagSelectorDataItem[]) => void;
    style?: StyleProp<ViewStyle>;
    selectedids?: number[];
}

const ToggleUp = () => <View>
    <IconFont name="liebiaozhedieshang1x" size={getLogicPixel(14)} />
</View>;

const ToggleDown = () => <View>
    <IconFont name="liebiaozhedie1x" size={getLogicPixel(14)} />
</View>;

function categoryTagSelector({ data, onItemSelected, style, selectedids }: CollapseTagSelectorProps<CollapseTagSelectorDataItem>) {
    const [items, setItems] = useState(data);
    const [selectedItems, setSelectedItems] = useState<CollapseTagSelectorDataItem[]>([]);



    useEffect(() => {
        setItems(data);
    }, [data]);


    useEffect(() => {
        reverseSelectedItems();
    }, []);

    useEffect(() => {
        reverseSelectedItems();
    }, [selectedids]);

    const reverseSelectedItems = () => {
        const list = items.filter(item => selectedids?.includes(item.categoryId));
        setSelectedItems(list);
    };

    const triggerItemSelect = (items: CollapseTagSelectorDataItem[]) => {
        // 选中末级分类后触发选中事件
        if (items.length > 0 && items[items.length - 1].children === undefined)
            onItemSelected?.(items);
    };

    const onPress = (item: CollapseTagSelectorDataItem, isChild: boolean) => {
        if (!isChild) {
            if (_.isEqual(item, selectedItems[0]))
                return;
            setSelectedItems([item]);
            triggerItemSelect([item]);
        }
        else {
            if (_.isEqual(item, selectedItems[1]))
                return;
            setSelectedItems([selectedItems[0], item]);
            triggerItemSelect([selectedItems[0], item]);
        }

    };

    const isSelected = (item: CollapseTagSelectorDataItem) => {
        return selectedItems.map(x => x.categoryId).includes(item.categoryId);
    };

    const getItemStyle = (item: CollapseTagSelectorDataItem) => [styles.listItem, item.imageUrl ? { paddingLeft: getLogicPixel(3) } : {}, isSelected(item) ? styles.listItemSelected : {}];
    const getLabelStyle = (item: CollapseTagSelectorDataItem) => [styles.listItemText, item.imageUrl ? { paddingLeft: getLogicPixel(20) } : {}, isSelected(item) ? styles.listItemTextSelected : {}];

    return <View style={style}>
        {
            Array.isArray(items) && items.map((d, i) => <View style={styles.listItemContainer} key={i}>
                <TouchableOpacity onPress={() => onPress(d, false)} key={`${d.categoryId}`}>
                    <View style={getItemStyle(d)}>
                        <View style={styles.listitemLabelContainer}>
                            <View style={{ flex: 1 }}>
                                {d.imageUrl && <Image source={{ uri: d.imageUrl }} width={getLogicPixel(40)} height={getLogicPixel(40)} style={styles.listItemImage} />}
                                <Text numberOfLines={1} style={getLabelStyle(d)}>{d.categoryName}</Text>
                            </View>
                            {isSelected(d) && !(d.children?.length ?? 0 > 0) && <IconFont name="duihao1x" />}
                        </View>
                        {
                            Array.isArray(d.children) && d.children.length > 0 && (isSelected(d) ? <ToggleUp /> : <ToggleDown />)
                        }
                    </View>
                </TouchableOpacity>
                {
                    isSelected(d) && <View style={styles.listItemTagsContainer}>
                        {
                            Array.isArray(d.children) && d.children.length > 0 &&
                            d.children.map(child => <TouchableOpacity key={child.categoryId} style={[styles.listitemTag, isSelected(child) ? styles.listitemTagSelected : undefined]} onPress={() => onPress(child, true)} >
                                <Text numberOfLines={1} style={[styles.listitemTagText, isSelected(child) ? styles.listitemTagTextSelected : undefined]}>{child.categoryName}</Text>
                            </TouchableOpacity>)
                        }
                    </View>
                }

            </View>)
        }
    </View>;
}

export default memo(categoryTagSelector) as typeof categoryTagSelector;