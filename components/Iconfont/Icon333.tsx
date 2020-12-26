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

let Icon333: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M515.04761933 123.904c-206.994286 0-374.857143 167.862857-374.857143 374.857143s167.862857 374.857143 374.857143 374.857143h263.789714a64 64 0 0 0 61.366857-82.102857l-18.176-61.805715a9.142857 9.142857 0 0 1 1.243429-7.789714l9.947428-14.628571a313.417143 313.417143 0 0 0 14.445715-23.844572 357.851429 357.851429 0 0 0 42.24-169.179428v-15.506286c0-206.994286-167.862857-374.857143-374.857143-374.857143z"
        fill={getIconColor(color, 0, '#131A25')}
      />
      <Path
        d="M569.90476233 411.428571a27.428571 27.428571 0 0 1 27.172571 23.698286l0.256 3.730286v73.142857a27.428571 27.428571 0 0 1-54.601143 3.730286L542.47619033 512v-73.142857a27.428571 27.428571 0 0 1 27.428572-27.428572z m-219.428572 0a27.428571 27.428571 0 0 1 27.172572 23.698286L377.90476233 438.857143v73.142857a27.428571 27.428571 0 0 1-54.601143 3.730286L323.04761933 512v-73.142857a27.428571 27.428571 0 0 1 27.428571-27.428572z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Icon333.defaultProps = {
  size: 18,
};

Icon333 = React.memo ? React.memo(Icon333) : Icon333;

export default Icon333;
