import IconFont from '@/components/Iconfont';
import useGpsLocation from "@/hooks/useGpsLocation";
import RegionSelector from "@/screens/components/RegionSelector";
import { useStore } from '@/stores';
import { Region } from '@/types/data/Region';
import { EnumErrorType } from '@/types/enums';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import NoPermission from './noPermission';
import styles from './styles/regionList';

interface RegionListProps {
    onConfirm?: () => void;
}

export default observer(({ onConfirm }: RegionListProps) => {
    const searchState = useStore("searchState");
    const [location, getLocation] = useGpsLocation();
    const [selected, setSelected] = useState<{
        level1?: Region;
        level2?: Region;
    }>({
        level1: {
            children: []
        } as any,
        level2: {} as any,
        ...searchState.selectedRegion
    });
    useEffect(() => {
        getLocation(false);
    }, []);

    //#region method



    const getGpsAddress = () => {
        (async () => {
            await getLocation(false);
        })();
    };

    //#endregion


    //#region events
    const selectGpsLocation = () => {
        if (location.loading) return;
        const s = {
            level1: {
                children: []
            } as any,
            level2: {} as any
        };
        setSelected(s);
        searchState.setSelectedRegion(s);
        searchState.setParams("cityCode", location.address?.getAdministrative_Area_Level_1());
        onConfirm?.();
    };

    const selectLevel2 = (item: Region[]) => {
        if (Array.isArray(item) && item.length === 2) {
            setSelected({
                ...selected,
                level2: item[1]
            });

            searchState.setParams("cityCode", item[1].en_name);
            searchState.setSelectedRegion({
                ...selected,
                level2: item[1]
            });
            onConfirm?.();
        }
    };
    //#endregion

    return <View>
        <View style={[styles.paramsContainer, styles.currentLocation]}>
            <View>
                <Text style={styles.currentLocationText}>Current position</Text>
            </View>
            {
                location.error === EnumErrorType.NOPERMISSIONS &&
                <NoPermission />
            }
            {
                location.error !== EnumErrorType.NOPERMISSIONS && <View style={styles.gpsLocation}>
                    <Text style={styles.gpsLocationText} onPress={selectGpsLocation}>
                        <IconFont name="dingwei-cu1x" size={17} />&nbsp;
                    {location.loading && "正在获取定位..."}
                        {!location.loading && location.address?.getAdministrative_Area_Level_1()}
                        {location.error}
                    </Text>
                    <TouchableOpacity onPress={() => getGpsAddress()}>
                        <View style={styles.gpsRefreshIcon}>
                            <IconFont name="zhongfa-qiandi1x" />
                        </View>
                    </TouchableOpacity>
                </View>
            }

        </View>

        <View style={styles.regionContainer}>
            <RegionSelector onConfirm={selectLevel2} />
        </View>

        {/* <View style={styles.paramSubmitContainer}>
            <Button size="lg" style={styles.paramRest} onPress={onReset} >Reset</Button>
            <Button type="primary" size="lg" style={styles.paramDetermine} onPress={onDetermine}>Determine</Button>
        </View> */}
    </View>;
});