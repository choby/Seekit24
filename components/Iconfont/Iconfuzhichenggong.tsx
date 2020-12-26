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

let Iconfuzhichenggong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1000.228571C242.358857 1000.228571 23.771429 781.641143 23.771429 512 23.771429 242.358857 242.358857 23.771429 512 23.771429 781.641143 23.771429 1000.228571 242.358857 1000.228571 512c0 269.641143-218.587429 488.228571-488.228571 488.228571z m0-54.857142c239.36 0 433.371429-194.011429 433.371429-433.371429S751.36 78.628571 512 78.628571 78.628571 272.64 78.628571 512 272.64 945.371429 512 945.371429z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M442.88 640.256l273.627429-273.627429c11.629714-11.629714 31.085714-10.971429 43.52 1.426286 12.397714 12.397714 13.019429 31.853714 1.389714 43.483429l-294.656 294.656c-11.629714 11.629714-31.085714 11.008-43.52-1.389715l-179.565714-179.565714c-12.434286-12.434286-13.019429-31.890286-1.426286-43.52 11.629714-11.629714 31.085714-10.971429 43.52 1.389714l157.147428 157.147429z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconfuzhichenggong.defaultProps = {
  size: 18,
};

Iconfuzhichenggong = React.memo ? React.memo(Iconfuzhichenggong) : Iconfuzhichenggong;

export default Iconfuzhichenggong;
