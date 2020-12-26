import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles/priceRange';
import Button from '@/components/Button';
import { observer } from 'mobx-react';
import { useStore } from '@/stores';
import Tip from '@/components/Tip';
import { Verification } from '@/utils';

interface PriceRangeProps {
    onConfirm?: () => void;
}
export default observer(({ onConfirm }: PriceRangeProps) => {
    const searchState = useStore("searchState");
    const prices = searchState.queryParams.price?.split("-");
    const [price, setPrice] = useState({
        min: prices && prices[0] && prices[0],
        max: prices && prices[1] && prices[1]
    });

    const setMinPrice = (value: string) => {

        setPrice({
            ...price,
            min: value
        });
    }

    const setMaxPrice = (value: string) => {
        setPrice({
            ...price,
            max: value
        });
    }

    const onDetermine = () => {
        if (price.max && price.min) {
            const max = Number(price.max);
            const min = Number(price.min);
            if (min > max) {
                return Tip.show("The highest price must not be lower than the lowest price");
            }
        }
        searchState.setParams("price", `${price.min || 0}-${price.max || 0}`);
        onConfirm?.();
    }

    return <View style={styles.paramsContainer}>
        <View style={styles.paramCateTitleContainer}>
            <Text style={styles.paramCateTitleText}>
                Price range($)
            </Text>
        </View>
        <View style={styles.paramCateContentContainer}>
            <View style={styles.paramPriceInputContainer}>
                <TextInput keyboardType="decimal-pad"
                    value={price.min}
                    onChangeText={value => {
                        if (value?.indexOf(".") === 0) value = "0" + value;
                        if (Verification.moneyIsValid(value)) {
                            setMinPrice(value);
                        } else
                            Tip.show("The price should be 8-12 decimal places, with a maximum of two decimal places");
                    }}
                    placeholder="Lowest price"
                    style={styles.paramPriceInput}
                //onBlur={onInputBlur}
                />
            </View>
            <View style={styles.paramPriceRangeSpace}></View>
            <View style={styles.paramPriceInputContainer}>
                <TextInput keyboardType="decimal-pad"
                    value={price.max}
                    onChangeText={value => {
                        if (value?.indexOf(".") === 0) value = "0" + value;
                        if (Verification.moneyIsValid(value)) {
                            setMaxPrice(value);
                        } else
                            Tip.show("The price should be 8-12 decimal places, with a maximum of two decimal places");
                    }}
                    placeholder="Highest price"
                    style={styles.paramPriceInput}
                //onBlur={onInputBlur}
                />
            </View>
        </View>

        <View style={styles.paramSubmitContainer}>
            <Button size="lg" style={styles.paramRest} onPress={() => {
                setPrice({
                    min: "",
                    max: ""
                });
                searchState.setParams("price", undefined);
                onConfirm?.();
            }}>Rest</Button>
            <Button type="primary" size="lg" style={styles.paramDetermine}
                onPress={onDetermine}
            >Determine</Button>
        </View>
    </View>;
});