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

let Iconzhongfazhaopian1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M508.3648 307.2a205.7728 205.7728 0 0 1 194.2528 137.1648l2.176 6.5792 9.216-11.904 3.0464-4.096a25.6 25.6 0 1 1 41.5488 29.9008l-6.3744 8.5248c-2.5856 3.3536-5.632 7.2448-9.088 11.6224l-20.4032 25.4976-14.4128 17.7152-1.9968 2.2016c-15.7184 15.488-43.4176 4.6336-43.4176-18.4064 0-84.8128-69.1712-153.6-154.5472-153.6s-154.5216 68.7872-154.5216 153.6 69.1456 153.6 154.5216 153.6a25.6 25.6 0 0 1 0 51.2c-113.5872 0-205.7216-91.648-205.7216-204.8s92.1344-204.8 205.7216-204.8z"
        fill={getIconColor(color, 0, '#4D5B72')}
      />
    </Svg>
  );
};

Iconzhongfazhaopian1X.defaultProps = {
  size: 18,
};

Iconzhongfazhaopian1X = React.memo ? React.memo(Iconzhongfazhaopian1X) : Iconzhongfazhaopian1X;

export default Iconzhongfazhaopian1X;
