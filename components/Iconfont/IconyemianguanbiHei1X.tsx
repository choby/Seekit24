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

let IconyemianguanbiHei1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M179.297524 823.05219a36.571429 36.571429 0 0 1-3.267048-47.981714l3.267048-3.754666L463.725714 486.790095 179.297524 202.410667a36.571429 36.571429 0 0 1-3.267048-47.981715l3.267048-3.754666a36.571429 36.571429 0 0 1 47.981714-3.267048l3.705905 3.267048L512 431.640381l281.014857-280.966095a36.571429 36.571429 0 0 1 54.954667 47.981714l-3.267048 3.754667-284.476952 284.476952 284.476952 284.428191a36.571429 36.571429 0 0 1 3.267048 47.981714l-3.267048 3.754666a36.571429 36.571429 0 0 1-47.981714 3.267048l-3.705905-3.267048L512 542.037333 230.985143 823.100952a36.571429 36.571429 0 0 1-51.687619 0z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

IconyemianguanbiHei1X.defaultProps = {
  size: 18,
};

IconyemianguanbiHei1X = React.memo ? React.memo(IconyemianguanbiHei1X) : IconyemianguanbiHei1X;

export default IconyemianguanbiHei1X;
