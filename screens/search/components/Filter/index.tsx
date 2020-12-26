import IconFont from "@/components/Iconfont";
import { inject } from "@/stores";
import SearchState, { SearchQueryParamsType } from "@/stores/search";
import { observer } from "mobx-react";
import React, { Component, createRef } from "react";
import { View } from "react-native";
import { Picker } from "reactive";
import ComplexList from "./complexList";
import FilterParams from "./FilterParams";
import PriceRange from "./priceRange";
import Regionlist from "./regionList";
import styles from "./styles";

interface FilterProps {
    onRefresh?: () => void;
    searchState?: SearchState;
}

@inject("searchState")
@observer
class Filter extends Component<FilterProps> {
    private pickers = [createRef<Picker>(), createRef<Picker>(), createRef<Picker>(), createRef<Picker>()];


    public closeAll = (exclude: number) => {
        this.pickers.forEach((picker, index) => exclude !== index && picker.current?.close());
    };

    private pickerValue = (key: keyof SearchQueryParamsType) => {
        return this.props.searchState?.queryParams[key];
    };

    private filterHasValue = () => {
        return this.pickerValue("releaseTime") || this.pickerValue("categoryId");// || pickerValue("brandId") || pickerValue("attrValueIds");
    };
    render() {
        const { onRefresh } = this.props;
        return <>
            <View style={styles.filterContainer} onLayout={() => {
                // UIManager.measure(findNodeHandle(e.nativeEvent.layout.) ?? 0, (x, y, width, height, pageX, pageY) => {
                //     console.log(y)
                //     console.log(pageY)
                //     // todo
                // })
            }}>
                <Picker
                    ref={this.pickers[0]}
                    label={this.pickerValue("sort") ? "Nearby me" : 'Complex'}
                    labelStyle={this.pickerValue("sort") ? styles.labelHasValue : styles.label}
                    labelActiveStyle={styles.labelActive}
                    cancelable={true}
                    activeIcon={<IconFont name="sousuo-xialadianji1x" size={11} />}
                    inactiveIcon={<IconFont name="sousuo-xiala1x" size={11} />}
                    onToggle={active => active && this.closeAll(0)}
                    style={{ flex: 1 }}
                >
                    <View style={styles.slideModalContent}>
                        <ComplexList onConfirm={() => {
                            this.pickers[0].current?.close();
                            onRefresh?.();
                        }} />
                    </View>
                </Picker>

                <Picker
                    ref={this.pickers[1]}
                    label={this.pickerValue("cityCode") ? this.pickerValue("cityCode") : 'Region'}
                    labelStyle={this.pickerValue("cityCode") ? styles.labelHasValue : styles.label}
                    labelActiveStyle={styles.labelActive}
                    cancelable={true}
                    activeIcon={<IconFont name="sousuo-xialadianji1x" size={11} />}
                    inactiveIcon={<IconFont name="sousuo-xiala1x" size={11} />}
                    onToggle={active => active && this.closeAll(1)}
                    style={{ flex: 1 }}
                >
                    <View style={styles.slideModalContent}>
                        <Regionlist onConfirm={() => {
                            this.pickers[1].current?.close();
                            onRefresh?.();
                        }} />
                    </View>
                </Picker>

                <Picker
                    ref={this.pickers[2]}
                    label='Price'
                    labelStyle={this.pickerValue("price") ? styles.labelHasValue : styles.label}
                    labelActiveStyle={styles.labelActive}
                    cancelable={true}
                    activeIcon={<IconFont name="sousuo-xialadianji1x" size={11} />}
                    inactiveIcon={<IconFont name="sousuo-xiala1x" size={11} />}
                    onToggle={active => active && this.closeAll(2)}
                    style={{ flex: 1 }}
                >
                    <View style={styles.slideModalContent}>
                        <PriceRange onConfirm={() => {
                            this.pickers[2].current?.close();
                            onRefresh?.();
                        }} />
                    </View>
                </Picker>


                <Picker
                    ref={this.pickers[3]}
                    label='Filter'
                    labelStyle={this.filterHasValue() ? styles.labelHasValue : styles.label}
                    labelActiveStyle={styles.labelActive}
                    cancelable={true}
                    activeIcon={<IconFont name="sousuo-xialadianji1x" size={11} />}
                    inactiveIcon={<IconFont name="sousuo-xiala1x" size={11} />}
                    onToggle={active => active && this.closeAll(3)}
                    style={{ flex: 1 }}
                >
                    <View style={styles.slideModalContent}>
                        <FilterParams
                            onConfirm={() => {
                                this.pickers[3].current?.close();
                                onRefresh?.();
                            }}
                        />
                    </View>
                </Picker>


            </View>
        </>;
    }
}


export default Filter; 