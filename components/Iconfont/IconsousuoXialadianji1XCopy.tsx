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

let IconsousuoXialadianji1XCopy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M548.2496 693.31626665a51.2 51.2 0 0 1-65.3312 5.83680001l-7.168-5.83680001-307.2-307.19999999a51.2 51.2 0 0 1 65.3312-78.336l7.168 5.8368L512 584.66986666 782.9504 313.61706666a51.2 51.2 0 0 1 65.3312-5.8368l7.168 5.8368a51.2 51.2 0 0 1 5.83680001 65.3312l-5.83680001 7.168-307.2 307.19999999z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

IconsousuoXialadianji1XCopy.defaultProps = {
  size: 18,
};

IconsousuoXialadianji1XCopy = React.memo ? React.memo(IconsousuoXialadianji1XCopy) : IconsousuoXialadianji1XCopy;

export default IconsousuoXialadianji1XCopy;
