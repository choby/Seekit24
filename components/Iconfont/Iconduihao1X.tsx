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

let Iconduihao1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M466.9952 772.9152a38.4 38.4 0 0 1-51.2 3.2768l-3.9424-3.584-283.136-296.1408A38.4 38.4 0 0 1 180.2752 419.84l3.8912 3.584 255.744 267.4688 402.3296-410.5216a38.4 38.4 0 0 1 50.3296-3.9424l3.9936 3.4304a38.4 38.4 0 0 1 3.8912 50.3296l-3.3792 3.9424-430.08 438.784z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconduihao1X.defaultProps = {
  size: 18,
};

Iconduihao1X = React.memo ? React.memo(Iconduihao1X) : Iconduihao1X;

export default Iconduihao1X;
