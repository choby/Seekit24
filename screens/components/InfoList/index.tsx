import Avator from '@/components/Avator';
import IconFont from "@/components/Iconfont";
import NavigationHelper from "@/navigation/helper";
import { Pages } from '@/navigation/pages';
import React from 'react';
import { ImageSourcePropType, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';


export interface InfoItem {
    label: string;
    labelStyle?: StyleProp<TextStyle>,
    labelDesc?: string;
    labelDescStyle?: StyleProp<TextStyle>,
    labelContainerstyle?: StyleProp<ViewStyle>;
    value?: string | number;
    valuePlaceHolder?: string;
    avator?: ImageSourcePropType & { size?: number; };
    nextPage?: Pages;
    onPress?: (item: InfoItem) => void;
    primary?: boolean;
    hasIcon?: boolean;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}
export interface InfoListProps {
    style?: StyleProp<ViewStyle>;
    items: InfoItem[];
}

export default React.memo(({ style, items }: InfoListProps) => {
    const navigation = NavigationHelper.Navigation;
    return <View style={[styles.listContainer, style]}>
        {
            Array.isArray(items) && items.map((item, index) => <TouchableOpacity
                activeOpacity={1}
                key={index}
                style={[styles.listItemContainer, item.style]}
                onPress={() => {
                    if (item.onPress) {
                        item.onPress(item);
                        return;
                    }
                    item.nextPage ? navigation.navigate(item.nextPage) : {};
                }}
                disabled={item.disabled}
            >
                <View style={item.labelContainerstyle}>
                    <Text numberOfLines={1} style={[styles.listItemLabel, item.disabled ? styles.listItemLabelDisabled : undefined, item.labelStyle]}>{item.label}</Text>
                    {item.labelDesc && <Text numberOfLines={2} style={[styles.listItemLabelDesc, item.labelDescStyle]}>{item.labelDesc}</Text>}
                </View>
                {
                    (item.value || item.valuePlaceHolder || item.avator || item.hasIcon !== false) &&
                    <View style={styles.listItemRightContainer}>
                        <Text numberOfLines={1} style={[styles.listItemValue, item.primary ? styles.listItemPrimaryValue : (item.value ? undefined : styles.listItemNoValue)]}>
                            {item.value ? item.value : item.valuePlaceHolder}
                        </Text>
                        {item.avator && <Avator source={item.avator} size={item.avator.size ?? 40} style={styles.listItemAvator} />}
                        {item.hasIcon !== false && <IconFont name="lie-jinru1x" size={14} />}
                    </View>
                }
            </TouchableOpacity>)
        }
    </View>;
});