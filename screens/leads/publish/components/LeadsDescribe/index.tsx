import { useStore } from '@/stores';
import { Color } from "@/theme/variables";
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default () => {
    const [descriptionHeight, setDescriptionHeight] = useState<number>();
    const [descriptionIsEditing, setDescriptionIsEditing] = useState<boolean>();
    const publishState = useStore("leadsPublishState");
    const [value, setValue] = useState(publishState.description);

    return <TextInput style={[
        styles.infoText,
        { height: Math.min(18 * 6, Math.max(35, descriptionHeight ?? 18)) },
        descriptionIsEditing ? styles.focusingInfoText : undefined]
    }
        onContentSizeChange={e => setDescriptionHeight(e.nativeEvent.contentSize.height)}
        onFocus={() => setDescriptionIsEditing(true)}
        onBlur={() => setDescriptionIsEditing(false)}
        multiline={true}
        placeholder="Enter your description"
        placeholderTextColor={Color.SECONDARY_4}
        onChangeText={(text) => {
            // if (!!!text || text.length <= 60)
            setValue(text);
            publishState.setDescribe(text);
        }}
        returnKeyType="default"
        value={value}
    />;
};