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

let IconshouyeiconShense1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M454.582857 167.716571a100.571429 100.571429 0 0 1 109.568-3.657142l6.217143 4.096 253.513143 179.968a100.571429 100.571429 0 0 1 42.093714 75.081142l0.256 6.948572v352.292571a100.571429 100.571429 0 0 1-94.464 100.388572l-6.107428 0.182857h-512a100.571429 100.571429 0 0 1-100.388572-94.427429l-0.182857-6.144v-351.926857c0-30.537143 13.860571-59.245714 37.412571-78.262857l5.595429-4.205714 258.523429-180.333715z m164.790857 343.515429h-219.428571a27.428571 27.428571 0 0 0-27.428572 27.428571v60.928a137.142857 137.142857 0 0 0 274.285715 0V538.697143a27.428571 27.428571 0 0 0-27.428572-27.428572z m-27.465143 54.820571v33.536a82.285714 82.285714 0 0 1-82.285714 82.285715l-5.595428-0.182857a82.285714 82.285714 0 0 1-76.653715-82.102858l-0.036571-33.536h164.571428z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

IconshouyeiconShense1X.defaultProps = {
  size: 18,
};

IconshouyeiconShense1X = React.memo ? React.memo(IconshouyeiconShense1X) : IconshouyeiconShense1X;

export default IconshouyeiconShense1X;
