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

let IconqingchuSousuo1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M308.9408 267.776l3.5328 2.9696 199.0656 199.1168 199.168-199.1168a25.6 25.6 0 0 1 39.168 32.6656l-2.9696 3.584-199.168 199.0656 199.168 199.168a25.6 25.6 0 0 1-32.6656 39.168l-3.5328-2.9696-199.168-199.168-199.0656 199.168a25.6 25.6 0 0 1-39.168-32.6656l2.9696-3.584 199.0656-199.1168-199.0656-199.0656a25.6 25.6 0 0 1 32.6656-39.168z"
        fill={getIconColor(color, 0, '#B6BECA')}
      />
    </Svg>
  );
};

IconqingchuSousuo1X.defaultProps = {
  size: 18,
};

IconqingchuSousuo1X = React.memo ? React.memo(IconqingchuSousuo1X) : IconqingchuSousuo1X;

export default IconqingchuSousuo1X;
