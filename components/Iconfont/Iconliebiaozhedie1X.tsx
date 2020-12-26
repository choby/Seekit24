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

let Iconliebiaozhedie1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M536.507733 823.978667a34.133333 34.133333 0 0 1-44.2368 4.096l-4.778666-4.096L107.178667 432.128a34.133333 34.133333 0 0 1 44.305066-51.541333l4.642134 3.959466 356.010666 366.728534 355.874134-366.728534a34.133333 34.133333 0 0 1 43.485866-4.573866l4.778667 3.8912a34.133333 34.133333 0 0 1 4.573867 43.485866l-3.8912 4.778667L536.576 823.978667z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconliebiaozhedie1X.defaultProps = {
  size: 18,
};

Iconliebiaozhedie1X = React.memo ? React.memo(Iconliebiaozhedie1X) : Iconliebiaozhedie1X;

export default Iconliebiaozhedie1X;
