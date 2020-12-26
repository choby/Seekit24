import React from 'react';
import { Switch, SwitchProps } from 'reactive';

export default ({ activeColor = "#4CD964", ...otherProps }: SwitchProps) => {
    return <Switch activeColor={activeColor} {...otherProps} />
}