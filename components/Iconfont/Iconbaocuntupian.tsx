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

let Iconbaocuntupian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M921.62048 0h-819.2C46.14144 0 0 46.12096 0 102.44096v819.2C0 977.98144 46.12096 1024 102.44096 1024h819.2A102.6048 102.6048 0 0 0 1024 921.62048v-819.2C1024 46.14144 978.00192 0 921.62048 0zM337.92 266.24a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 1 1 0-143.36zM225.28 757.76l205.68064-230.1952 51.89632 97.42336L676.33152 348.16 798.72 757.76H225.28z"
        fill={getIconColor(color, 0, '#FF8F59')}
      />
    </Svg>
  );
};

Iconbaocuntupian.defaultProps = {
  size: 18,
};

Iconbaocuntupian = React.memo ? React.memo(Iconbaocuntupian) : Iconbaocuntupian;

export default Iconbaocuntupian;
