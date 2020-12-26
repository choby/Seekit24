import Input from "@/components/Input";
import { useStore } from '@/stores';
import { observer } from 'mobx-react';
import React from 'react';
import styles from './styles';

export default observer(() => {
    const publishState = useStore("goodsPublishState");

    return <Input style={styles.titleInputContainer}
        focusingStyle={styles.focusingTitleInputContainer}
        inputStyle={styles.inputStyle}
        focusingInputStyle={styles.focusingInputStyle}
        placeholder="Fill in product title"
        returnKeyType="next"
        onChange={value => {
            if (!!!value || value.length <= 60)
                publishState.setTitle(value);
        }}
        value={publishState.title}

    />;
});
