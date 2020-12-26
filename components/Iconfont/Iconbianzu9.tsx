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

let Iconbianzu9: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 155.428571A173.714286 173.714286 0 0 1 941.714286 329.142857v365.714286A173.714286 173.714286 0 0 1 768 868.571429H256A173.714286 173.714286 0 0 1 82.285714 694.857143V329.142857A173.714286 173.714286 0 0 1 256 155.428571z m0 54.857143H256A118.857143 118.857143 0 0 0 137.142857 329.142857v365.714286A118.857143 118.857143 0 0 0 256 813.714286h512A118.857143 118.857143 0 0 0 886.857143 694.857143V329.142857A118.857143 118.857143 0 0 0 768 210.285714z m-256 128a173.714286 173.714286 0 1 1 0 347.428572 173.714286 173.714286 0 0 1 0-347.428572z m0 54.857143a118.857143 118.857143 0 1 0 0 237.714286 118.857143 118.857143 0 0 0 0-237.714286z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconbianzu9.defaultProps = {
  size: 18,
};

Iconbianzu9 = React.memo ? React.memo(Iconbianzu9) : Iconbianzu9;

export default Iconbianzu9;
