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

let Iconfasonganniu1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1075 1024" width={size} height={size} {...rest}>
      <Path
        d="M54.781206 866.824016L471.323163 23.449428c9.727504-19.6086 35.88937-28.670538 58.569812-20.376561 10.546662 3.942199 18.943034 11.263426 23.448405 20.376561L969.166573 867.847964c9.727504 19.659797-0.819158 42.391438-23.448405 50.685415a51.094994 51.094994 0 0 1-34.967816 0l-326.946526-120.313864c-15.768796-5.734108-26.315458-18.943034-27.134616-33.73908l-21.554101-383.161258c-0.716763-12.440966-12.952939-22.117272-27.288208-21.502904-13.311321 0.511974-23.960378 9.676307-24.779536 21.195719l-27.492998 384.799576c-1.075145 14.488861-11.417018 27.288208-26.827432 33.12471L113.504611 917.509431c-22.629246 8.498767-48.842309-0.511974-58.569813-20.069376a33.687882 33.687882 0 0 1-0.102394-30.667236z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconfasonganniu1X.defaultProps = {
  size: 18,
};

Iconfasonganniu1X = React.memo ? React.memo(Iconfasonganniu1X) : Iconfasonganniu1X;

export default Iconfasonganniu1X;
