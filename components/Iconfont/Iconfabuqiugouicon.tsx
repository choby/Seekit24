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

let Iconfabuqiugouicon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736.365714 251.904l-35.254857-42.020571A82.285714 82.285714 0 0 0 585.142857 199.753143L280.576 455.314286a82.285714 82.285714 0 0 0-27.684571 46.445714l-22.089143 107.373714a27.428571 27.428571 0 0 0 26.843428 32.987429h111.762286a82.285714 82.285714 0 0 0 52.918857-19.273143l303.908572-255.012571a82.285714 82.285714 0 0 0 10.130285-115.931429z m-77.275428-6.765714l35.254857 42.057143a27.428571 27.428571 0 0 1-3.401143 38.619428l-303.908571 255.012572-3.108572 2.267428a27.428571 27.428571 0 0 1-14.518857 4.169143l-78.116571-0.036571 15.36-74.386286a27.428571 27.428571 0 0 1 9.216-15.506286l304.566857-255.561143a27.428571 27.428571 0 0 1 38.656 3.364572zM804.571429 750.884571a27.428571 27.428571 0 0 1 3.730285 54.601143l-3.730285 0.256H256a27.428571 27.428571 0 0 1-3.730286-54.601143L256 750.884571h548.571429z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconfabuqiugouicon.defaultProps = {
  size: 18,
};

Iconfabuqiugouicon = React.memo ? React.memo(Iconfabuqiugouicon) : Iconfabuqiugouicon;

export default Iconfabuqiugouicon;
