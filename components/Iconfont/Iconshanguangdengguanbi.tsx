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

let Iconshanguangdengguanbi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M100.3008 62.3616a38.4 38.4 0 0 0 6.656 9.7792l819.2 870.4c3.3792 3.584 7.2704 6.3488 11.4688 8.3456a38.4 38.4 0 0 1-62.6176 42.8544l-204.544-217.2928-316.8256 208.384a38.4 38.4 0 0 1-58.7776-39.5776l56.32-281.7536-238.336-131.7376a89.6 89.6 0 0 1-38.5024-114.8416l3.4304-6.912a89.6 89.6 0 0 1 31.6416-33.0752L226.816 305.0496 55.808 123.392a38.4 38.4 0 0 1 44.4928-60.9792z m256.512 163.1232l296.0896-181.248a38.4 38.4 0 0 1 57.344 42.0864l-69.376 277.4016 224.5632 128.8704a89.6 89.6 0 0 1 36.7104 115.4048l-3.584 6.912a89.6 89.6 0 0 1-28.4672 30.208l-73.0624 48.128-53.4528-56.832 84.3264-55.3984a12.8 12.8 0 0 0-0.6656-21.8112l-249.8048-143.3088a38.4 38.4 0 0 1-18.1248-42.5984l53.6576-214.528L410.624 282.624l-53.76-57.1904z m260.2496 494.2336L280.576 362.1888 149.504 442.4192a12.8 12.8 0 0 0-3.2768 2.8672l-1.2288 1.8432a12.8 12.8 0 0 0 5.0176 17.408l262.912 145.3056a38.4 38.4 0 0 1 19.0464 41.1648l-43.776 219.2384 228.864-150.528z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconshanguangdengguanbi.defaultProps = {
  size: 18,
};

Iconshanguangdengguanbi = React.memo ? React.memo(Iconshanguangdengguanbi) : Iconshanguangdengguanbi;

export default Iconshanguangdengguanbi;
