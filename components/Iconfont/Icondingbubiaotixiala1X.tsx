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

let Icondingbubiaotixiala1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M540.19413334 803.157333a51.2 51.2 0 0 1-68.1984 4.778667l-5.256533-4.778667-285.354667-293.956266a51.2 51.2 0 0 1 68.334933-75.9808l5.188267 4.642133L503.46666634 693.998933l248.490667-256.136533a51.2 51.2 0 0 1 67.106133-5.597867l5.3248 4.5056a51.2 51.2 0 0 1 5.5296 67.106134l-4.5056 5.3248-285.2864 293.956266z"
        fill={getIconColor(color, 0, '#4D5B72')}
      />
    </Svg>
  );
};

Icondingbubiaotixiala1X.defaultProps = {
  size: 18,
};

Icondingbubiaotixiala1X = React.memo ? React.memo(Icondingbubiaotixiala1X) : Icondingbubiaotixiala1X;

export default Icondingbubiaotixiala1X;
