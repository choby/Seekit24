import React, { memo, useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import GoMore from '@/components/GoMore';
import styles from './styles';
import { Color } from '@/theme/variables';
import { getLogicPixel } from '@/utils/pixelRatio';

export type ValueType<T> = number | string | T;
export interface CategorySelectorDataItem<T> {
    label: string;
    value: ValueType<T>;
    imageUrl?: string;
    selected?: boolean;
    haveMore?: boolean;
}
export interface CategorySelectorProps<T> {
    data: CategorySelectorDataItem<T>[];
    onItemSelected?: (value: ValueType<T>) => void;
}

function categorySelector<T>({ data, onItemSelected }: CategorySelectorProps<T>) {
    const [items, setItems] = useState(data);

    useEffect(() => {
        setItems(data);
    }, [data]);

    const onPress = (item: CategorySelectorDataItem<T>) => {
        item.selected = true;
        setItems(items);
        onItemSelected?.(item.value);
    }

    const getItemStyle = (item: CategorySelectorDataItem<T>) => [styles.listItem, item.imageUrl ? { paddingLeft: getLogicPixel(3) } : {}, item.selected ? styles.listItemSelected : {}];
    const getLabelStyle = (item: CategorySelectorDataItem<T>) => [styles.listItemText, item.imageUrl ? { paddingLeft: getLogicPixel(20) } : {}, item.selected ? styles.listItemTextSelected : {}]

    return <ScrollView>
        {
            items.map((d, i) => <TouchableOpacity onPress={() => onPress(d)} key={i}>
                <View style={getItemStyle(d)}>
                    <View style={styles.listitemLabelContainer}>
                        {d.imageUrl && <Image source={{ uri: d.imageUrl }} width={getLogicPixel(40)} height={getLogicPixel(40)} style={styles.listItemImage} />}
                        <Text style={getLabelStyle(d)}>{d.label}</Text>
                    </View>
                    {
                        d.haveMore && <GoMore color={d.selected ? Color.ERROR : undefined} />
                    }
                </View>
            </TouchableOpacity>)
        }
    </ScrollView>
}

export default memo(categorySelector);