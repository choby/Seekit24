import { useStore } from '@/stores';
import { Color } from "@/theme/variables";
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default () => {
    const [descriptionHeight, setDescriptionHeight] = useState<number>();
    const publishState = useStore("goodsPublishState");
    const [value, setValue] = useState(publishState.describe);

    return <TextInput style={[
        styles.infoText,
        { height: Math.min(18 * 6, Math.max(35, descriptionHeight ?? 18)) },
        styles.focusingInfoText]
    }
        onContentSizeChange={e => setDescriptionHeight(e.nativeEvent.contentSize.height)}
        placeholderTextColor={Color.SECONDARY_4}
        multiline={true}
        placeholder="Input product's description"
        onChangeText={(text) => {
            // if (!!!text || text.length <= 60)
            setValue(text);
            publishState.setDescribe(text);
        }}
        returnKeyType="default"
        value={value}
    />;
};