import React, { memo, useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles/brandSelector';
import { getLogicPixel } from '@/utils/pixelRatio';
import IconFont from '@/components/Iconfont';

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

const ToggleUp = () => <View>
    <IconFont name="liebiaozhedieshang1x" size={getLogicPixel(14)} />
</View>

// const ToggleDown = () => <View>
//     <IconFont name="liebiaozhedie1x" size={getLogicPixel(14)} />
// </View>

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
                <View style={styles.listItemContainer}>
                    <View style={getItemStyle(d)}>
                        <View style={styles.listitemLabelContainer}>
                            {d.imageUrl && <Image source={{ uri: d.imageUrl }} width={getLogicPixel(40)} height={getLogicPixel(40)} style={styles.listItemImage} />}
                            <Text style={getLabelStyle(d)}>{d.label}</Text>
                        </View>
                        {
                            d.haveMore && <ToggleUp />
                        }

                    </View>
                    <View style={styles.listItemTagsContainer}>
                        <View style={[styles.listitemTag]}>
                            <Text style={[styles.listitemTagText]}>xiaomi 6</Text>
                        </View>
                        <View style={[styles.listitemTag]}>
                            <Text style={[styles.listitemTagText]}>xiaomi 7</Text>
                        </View>
                        <View style={[styles.listitemTag, styles.listitemTagSelected]}>
                            <Text style={[styles.listitemTagText, styles.listitemTagTextSelected]}>xiaomi 8</Text>
                        </View>
                        <View style={[styles.listitemTag]}>
                            <Text style={[styles.listitemTagText]}>xiaomi 9</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>)
        }
    </ScrollView>
}

export default memo(categorySelector);