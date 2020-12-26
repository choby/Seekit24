/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconyemianguanbiBai1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M179.297524 871.814095a36.571429 36.571429 0 0 1-3.267048-47.981714l3.267048-3.754667 284.42819-284.525714-284.42819-284.379429a36.571429 36.571429 0 0 1-3.267048-47.981714l3.267048-3.754667a36.571429 36.571429 0 0 1 47.981714-3.267047l3.705905 3.267047L512 480.402286l281.014857-280.966096a36.571429 36.571429 0 0 1 54.954667 47.981715l-3.267048 3.754666-284.476952 284.476953 284.476952 284.42819a36.571429 36.571429 0 0 1 3.267048 47.981715l-3.267048 3.754666a36.571429 36.571429 0 0 1-47.981714 3.267048l-3.705905-3.267048L512 590.799238 230.985143 871.862857a36.571429 36.571429 0 0 1-51.687619 0z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconyemianguanbiBai1X.defaultProps = {
  size: 18,
};

IconyemianguanbiBai1X = React.memo ? React.memo(IconyemianguanbiBai1X) : IconyemianguanbiBai1X;

export default IconyemianguanbiBai1X;
