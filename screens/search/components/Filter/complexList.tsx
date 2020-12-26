import IconFont from '@/components/Iconfont';
import { useStore } from '@/stores';
import { Color } from "@/theme/variables";
import { EnumSearchSortType } from '@/types/enums';
import { SystemUtils } from "@/utils";
import { observer } from 'mobx-react';
import React from 'react';
import { Text, View } from 'react-native';
import { Radio } from 'reactive';
import styles from './styles/complexList';

interface ComplexListProps {
    onConfirm?: () => void;
}

export default observer(({ onConfirm }: ComplexListProps) => {
    const searchState = useStore("searchState");

    const setSort = async (value: any) => {
        searchState.setParams("sort", await changeSort(value));
        onConfirm?.();
    };

    const changeSort = async (value: any) => {
        if (value === EnumSearchSortType.DISTANCE) {
            const permission = await SystemUtils.permissions.checkLocation();
            if (permission !== "granted")
                return undefined;
        }
        return value === searchState.queryParams.sort ? undefined : value;
    };

    return <View style={styles.paramsContainer}>
        <Radio
            style={styles.radio}
            iconPosition="right"
            checkedIcon={<IconFont name="duihao1x" size={20} />}
            onChange={setSort}
            value={searchState.queryParams.sort}
        >
            <Radio.Item label={<Text style={{ color: !searchState.queryParams.sort ? Color.PRIMARY : undefined }}>Sort</Text>} style={styles.radioItem} />
            <Radio.Item label={<Text style={{ color: searchState.queryParams.sort === EnumSearchSortType.DISTANCE ? Color.PRIMARY : undefined }}>Nearby me</Text>} value={EnumSearchSortType.DISTANCE} style={styles.radioItem} />
        </Radio>
    </View>;
});