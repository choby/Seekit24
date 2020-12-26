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

let Iconshanguangdeng1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M353.6384 984.8832L870.0928 645.12c11.776-7.7312 21.504-18.1248 28.4672-30.2592l3.584-6.912a89.6 89.6 0 0 0-36.7104-115.4048l-224.5632-128.8704 69.376-277.4016a38.4 38.4 0 0 0-57.344-42.0864L109.4144 376.9344a89.6 89.6 0 0 0-31.6416 33.0752l-3.4304 6.912a89.6 89.6 0 0 0 38.5024 114.8416l238.3872 131.7376-56.32 281.7536a38.4 38.4 0 0 0 58.7264 39.6288z m474.2656-403.8656l-439.7056 289.28 43.776-219.2896a38.4 38.4 0 0 0-19.0464-41.1648L150.016 464.5376a12.8 12.8 0 0 1-5.0176-17.408l1.2288-1.8432a12.8 12.8 0 0 1 3.2768-2.8672l463.4624-283.648-53.6576 214.528a38.4 38.4 0 0 0 18.1248 42.5984l249.8048 143.3088a12.8 12.8 0 0 1 0.6656 21.8112z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconshanguangdeng1X.defaultProps = {
  size: 18,
};

Iconshanguangdeng1X = React.memo ? React.memo(Iconshanguangdeng1X) : Iconshanguangdeng1X;

export default Iconshanguangdeng1X;
