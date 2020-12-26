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

let Icontishi1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.888889a455.111111 455.111111 0 1 1 0 910.222222A455.111111 455.111111 0 0 1 512 56.888889z m0 56.888889a398.222222 398.222222 0 1 0 0 796.444444A398.222222 398.222222 0 0 0 512 113.777778z m0 516.949333a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m0-323.584a28.444444 28.444444 0 0 1 27.989333 23.324445l0.455111 5.12v170.666666a28.444444 28.444444 0 0 1-56.433777 5.12l-0.455111-5.12v-170.666666a28.444444 28.444444 0 0 1 28.444444-28.444445z"
        fill={getIconColor(color, 0, '#FF8F59')}
      />
    </Svg>
  );
};

Icontishi1X.defaultProps = {
  size: 18,
};

Icontishi1X = React.memo ? React.memo(Icontishi1X) : Icontishi1X;

export default Icontishi1X;
