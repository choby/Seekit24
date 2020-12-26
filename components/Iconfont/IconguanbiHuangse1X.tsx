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

let IconguanbiHuangse1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M779.0592 812.0832l-3.584-2.9696-237.8752-237.8752-237.8752 237.8752a25.6 25.6 0 0 1-39.168-32.6656l2.9184-3.5328L498.8416 537.6 263.4752 302.2848a25.6 25.6 0 0 1-2.9184-32.6656l2.9184-3.584a25.6 25.6 0 0 1 32.6656-2.9184l3.584 2.9696L537.6 503.9616l237.8752-237.8752a25.6 25.6 0 0 1 39.168 32.6656l-2.9184 3.5328-235.3664 235.3152 235.3664 235.3152a25.6 25.6 0 0 1 2.9184 32.6656l-2.9184 3.584a25.6 25.6 0 0 1-32.6656 2.9184z"
        fill={getIconColor(color, 0, '#FF8F59')}
      />
    </Svg>
  );
};

IconguanbiHuangse1X.defaultProps = {
  size: 18,
};

IconguanbiHuangse1X = React.memo ? React.memo(IconguanbiHuangse1X) : IconguanbiHuangse1X;

export default IconguanbiHuangse1X;
