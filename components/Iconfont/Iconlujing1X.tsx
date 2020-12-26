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

let Iconlujing1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0z m0 224a288 288 0 0 0 0 576 32 32 0 1 0 0-64A224 224 0 1 1 736 512c0 28.586667 34.133333 42.154667 53.802667 23.466667l2.986666-3.242667 29.141334-36.096 29.312-37.12 10.325333-13.610667 2.56-3.498666a32 32 0 0 0-49.024-40.917334l-2.986667 3.669334-8.234666 10.965333-14.549334 18.645333-3.157333-10.666666A288.128 288.128 0 0 0 512 224z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconlujing1X.defaultProps = {
  size: 18,
};

Iconlujing1X = React.memo ? React.memo(Iconlujing1X) : Iconlujing1X;

export default Iconlujing1X;
