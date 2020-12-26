import DotIndicator from "@/components/DotIndicator";
import IconFont from "@/components/Iconfont";
import { getRegions } from "@/services/common";
import { Region } from "@/types/data/Region";
import _ from "lodash";
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Longlist } from 'reactive';
import styles from './styles';

interface RegionSelectorProps {
    selectedids?: number[];
    onConfirm: (values: Region[]) => void;
    regions?: Region[];
}

/**
 * 区划选择器
 * 使用场景:
 * 1: 个人信息设置
 */

export default class RegionSelector extends React.Component<RegionSelectorProps, {
    selectedRegion: {
        level1?: Region;
        level2?: Region;
    };
    regions: Region[];
}> {
    /**
     *
     */
    constructor(props: RegionSelectorProps) {
        super(props);
        const { regions, selectedids } = this.props;

        this.state = {
            selectedRegion: {
                level1: selectedids && regions ? regions.find(x => x.id === selectedids[0]) as any : {
                    children: []
                },
                level2: selectedids && regions ? this.state.regions.find(x => x.id === selectedids[1]) as any : {
                    children: []
                }
            },
            regions: regions ?? []
        };
    }

    componentDidMount() {
        this.getRegionList().then(() => {
            this.setSelected(this.props);
        });
    }

    private getRegionList = async (region_code?: string) => {
        const data = await getRegions(region_code);

        if (data) {
            this.setState({ regions: data });
        }
    };

    UNSAFE_componentWillReceiveProps(nextProps: RegionSelectorProps) {
        this.setSelected(nextProps);
        if (!_.isEqual(this.props.regions, nextProps.regions)) {
            this.setState({ regions: nextProps.regions ?? [] });
        }
    }


    private setSelected(nextProps: RegionSelectorProps) {
        const { selectedids } = nextProps;
        const { regions } = this.state;
        const selectedRegion = {
            level1: selectedids && regions ? regions.find(x => x.id === selectedids[0]) as any : {
                children: []
            },
            level2: selectedids && regions ? this.state.regions.find(x => x.id === selectedids[1]) as any : {
                children: []
            }
        };
        this.setState({ selectedRegion });

    }


    // onItemSelected(values: Region[]) {
    //     this.setState({ selectedRegion: [...values] }, () => {
    //         const { selectedRegion: selectedData, } = this.state;
    //         this.props?.onItemSelected?.(selectedData);
    //     });
    // }

    private selectLevel2 = (item: Region) => {
        this.setState({
            selectedRegion: {
                ...this.state.selectedRegion,
                level2: item
            }
        }, () => {
            const { selectedRegion: { level1, level2 } } = this.state;
            if (level1 && level2) {
                const { onConfirm } = this.props;
                onConfirm?.([level1, level2]);
            }
        });


    };

    render() {
        const { regions, selectedRegion } = this.state;
        return <View style={styles.regionContainer}>
            <Longlist
                data={regions}
                renderItem={({ item, index }: { item: Region, index: number; }) => <TouchableOpacity
                    key={index} style={[styles.levelOneItemContainer, selectedRegion.level1?.region_code === item.region_code && styles.levelOneItemContainerActive]}
                    onPress={() => {
                        this.setState({
                            selectedRegion: {
                                level1: item,
                            }
                        });
                        this.getRegionList(item.region_code);
                    }}
                >
                    <Text numberOfLines={1} style={[styles.levelOneItemText, selectedRegion.level1?.region_code === item.region_code && styles.levelOneItemTextActive]}>{item.en_name}</Text>
                    {selectedRegion.level1?.region_code === item.region_code && <DotIndicator />}
                    {/* {selectedData.length === 0 && <GoMore text={""} />} */}
                </TouchableOpacity>}
                renderFooter={() => <></>}
                style={styles.levelOne}

            />

            <View style={[styles.levelTwo, (selectedRegion.level1?.children?.length ?? 0) > 0 ? styles.levelTwoActive : undefined]}>
                <Longlist
                    data={selectedRegion.level1?.children ?? []}
                    renderItem={({ item, index }: { item: Region, index: number; }) => <TouchableOpacity
                        key={index}
                        style={[styles.levelOneItemContainer, selectedRegion.level2?.region_code === item.region_code && styles.levelOneItemContainerActive]}
                        onPress={() => this.selectLevel2(item)}
                    >
                        <Text numberOfLines={1} style={[styles.levelOneItemText, selectedRegion.level2?.region_code === item.region_code && styles.levelOneItemTextActive]}>{item.en_name}</Text>

                        {selectedRegion.level2?.region_code === item.region_code && <IconFont name="duihao1x" />}
                    </TouchableOpacity>}
                    renderFooter={() => <></>}
                />
            </View>
        </View>;
    }
}