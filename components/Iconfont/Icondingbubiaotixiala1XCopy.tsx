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

let Icondingbubiaotixiala1XCopy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M483.80586666 284.84266699a51.2 51.2 0 0 1 68.1984-4.778667l5.256533 4.778667 285.354667 293.95626599a51.2 51.2 0 0 1-68.334933 75.98080001l-5.18826699-4.642133L520.53333366 394.00106699l-248.490667 256.136533a51.2 51.2 0 0 1-67.106133 5.597867l-5.3248-4.5056a51.2 51.2 0 0 1-5.5296-67.106134l4.5056-5.3248 285.2864-293.956266z"
        fill={getIconColor(color, 0, '#4D5B72')}
      />
    </Svg>
  );
};

Icondingbubiaotixiala1XCopy.defaultProps = {
  size: 18,
};

Icondingbubiaotixiala1XCopy = React.memo ? React.memo(Icondingbubiaotixiala1XCopy) : Icondingbubiaotixiala1XCopy;

export default Icondingbubiaotixiala1XCopy;
