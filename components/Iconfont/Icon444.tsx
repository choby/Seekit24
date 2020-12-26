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

let Icon444: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 118.857143C294.875429 118.857143 118.857143 294.875429 118.857143 512S294.875429 905.142857 512 905.142857 905.142857 729.124571 905.142857 512 729.124571 118.857143 512 118.857143z"
        fill={getIconColor(color, 0, '#131A25')}
      />
      <Path
        d="M440.868571 611.181714a27.428571 27.428571 0 0 1 35.986286-2.450285l2.816 2.450285a45.714286 45.714286 0 0 0 61.184 3.145143l3.474286-3.145143a27.428571 27.428571 0 1 1 38.765714 38.802286 100.571429 100.571429 0 0 1-142.226286 0 27.428571 27.428571 0 0 1 0-38.765714z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M402.285714 438.857143m-36.571428 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <Path
        d="M621.714286 475.428571a36.571429 36.571429 0 1 0 0-73.142857 36.571429 36.571429 0 0 0 0 73.142857z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
    </Svg>
  );
};

Icon444.defaultProps = {
  size: 18,
};

Icon444 = React.memo ? React.memo(Icon444) : Icon444;

export default Icon444;
