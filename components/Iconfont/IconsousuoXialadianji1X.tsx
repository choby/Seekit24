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

let IconsousuoXialadianji1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M475.7504 373.3504a51.2 51.2 0 0 1 65.3312-5.8368l7.168 5.8368 307.2 307.2a51.2 51.2 0 0 1-65.3312 78.336l-7.168-5.8368L512 481.9968 241.0496 753.0496a51.2 51.2 0 0 1-65.3312 5.8368l-7.168-5.8368a51.2 51.2 0 0 1-5.8368-65.3312l5.8368-7.168 307.2-307.2z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

IconsousuoXialadianji1X.defaultProps = {
  size: 18,
};

IconsousuoXialadianji1X = React.memo ? React.memo(IconsousuoXialadianji1X) : IconsousuoXialadianji1X;

export default IconsousuoXialadianji1X;
