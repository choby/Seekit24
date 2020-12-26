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

let Iconjingangqu31X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M770.3808 228.5056a121.856 121.856 0 0 1 121.856 121.856v358.0928a121.856 121.856 0 0 1-121.856 121.856H246.0928a121.856 121.856 0 0 1-121.856-121.856V350.3616a121.856 121.856 0 0 1 121.856-121.856z m0 51.2H246.0928a70.656 70.656 0 0 0-70.656 70.656v358.0928a70.656 70.656 0 0 0 70.656 70.656h524.288a70.656 70.656 0 0 0 70.656-70.656V350.3616a70.656 70.656 0 0 0-70.656-70.656zM444.672 360.96a168.448 168.448 0 1 1 0 336.896 168.448 168.448 0 0 1 0-336.896z m0 51.2a117.248 117.248 0 1 0 0 234.496 117.248 117.248 0 0 0 0-234.496z m293.0944-75.264a38.4 38.4 0 1 1 0 76.8 38.4 38.4 0 0 1 0-76.8zM537.6 153.6a25.6 25.6 0 0 1 0 51.2H281.6a25.6 25.6 0 1 1 0-51.2h256z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconjingangqu31X.defaultProps = {
  size: 18,
};

Iconjingangqu31X = React.memo ? React.memo(Iconjingangqu31X) : Iconjingangqu31X;

export default Iconjingangqu31X;
