import React from 'react';
import Input, { InputProps } from '../Input';
import styles from './styles';
import Iconfont from '../Iconfont';

export default (props: InputProps) => {
    return <Input
        style={styles.inputContainer}
        focusingStyle={styles.inputContainerFocusing}
        inputStyle={styles.inputStyle}
        focusingInputStyle={styles.focusingInputStyle}
        prefix={<Iconfont name="sousuo1x" />}

        {...props}
    />
}