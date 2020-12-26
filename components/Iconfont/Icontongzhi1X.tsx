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

let Icontongzhi1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M658.656 362.144a30.4 30.4 0 0 0-40.288 14.336 30.752 30.752 0 0 0 13.952 40.768c1.952 0.992 47.68 24.8 47.68 92.48 0 72.384-42.752 96.352-44.16 97.152a30.56 30.56 0 0 0 13.696 57.92 30.464 30.464 0 0 0 13.632-3.232c3.168-1.6 77.952-40.32 77.952-151.808 0-107.584-79.104-146.016-82.464-147.616z m-118.432-152.736a30.56 30.56 0 0 0-32.512 4.16l-175.68 146.24L192 359.264h-0.128a30.4 30.4 0 0 0-30.528 30.496l-0.64 244.352a30.56 30.56 0 0 0 30.528 30.656h141.696l174.816 145.664a30.56 30.56 0 0 0 32.512 4.16 30.528 30.528 0 0 0 17.6-27.648V237.056a30.56 30.56 0 0 0-17.632-27.648z m213.536 63.04a30.496 30.496 0 0 0-41.952 9.12 30.656 30.656 0 0 0 8.864 42.24c3.296 2.144 81.568 55.488 81.568 188.192 0 133.024-75.104 186.4-78.08 188.448a30.528 30.528 0 1 0 33.92 50.816c4.256-2.848 105.248-72.064 105.248-239.264 0-167.552-105.056-236.704-109.568-239.584z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Icontongzhi1X.defaultProps = {
  size: 18,
};

Icontongzhi1X = React.memo ? React.memo(Icontongzhi1X) : Icontongzhi1X;

export default Icontongzhi1X;
