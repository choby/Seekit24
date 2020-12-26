import Button from '@/components/Button';
import Tip from '@/components/Tip';
import { useStore } from '@/stores';
import { SystemUtils } from '@/utils';
import { getLogicPixel } from "@/utils/pixelRatio";
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles';

interface PriceInputProps {
    onInputBlur?: () => void;
    onSubmitEditing?: () => void;
}

export default observer(({ onSubmitEditing, onInputBlur }: PriceInputProps) => {
    const publishState = useStore("goodsPublishState");
    const [value, setValue] = useState(publishState.price);

    const handlerSubmit = () => {
        let price = value ? Number(value?.endsWith(".") ? value + "00" : value) : value;
        try {
            if (Number(price) === 0) price = undefined;

        } catch (e) { if (__DEV__) console.log(e); }
        publishState.setPrice(price !== undefined ? `${price}` : undefined);
        onSubmitEditing?.();
    };

    return <><View style={styles.mask} />

        <View style={styles.container}>
            <Text style={{ fontSize: getLogicPixel(16) }}>$&nbsp;</Text>
            <TextInput keyboardType="decimal-pad"
                value={value}
                onSubmitEditing={handlerSubmit}
                onChangeText={value => {
                    if (value?.indexOf(".") === 0) value = "0" + value;
                    const patten = /^\d{1,8}(\.\d{0,2})?$/;
                    if (!!!value || patten.test(value)) {
                        setValue(value);

                    } else
                        Tip.show("The price should be 8-12 decimal places, with a maximum of two decimal places");
                }}
                autoFocus
                placeholder="Fill in the price"
                style={styles.input}
                onBlur={onInputBlur}

            />
            <Button size="md" type="primary" style={styles.button} onPress={handlerSubmit}>OK</Button>
        </View>
        {
            SystemUtils.isIos && <KeyboardSpacer style={{ backgroundColor: "#FFF" }} />
        }
    </>;
});