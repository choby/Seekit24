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

let Iconshanchuzhaopian1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M392.6528 334.4896l4.2496 3.7888L512 456.8064l115.0976-118.528a38.4 38.4 0 0 1 58.7776 49.152l-3.6864 4.352-116.736 120.1664 116.736 120.32a38.4 38.4 0 0 1-50.8416 57.2416l-4.2496-3.7888L512 567.1424l-115.0976 118.5792a38.4 38.4 0 0 1-49.92 4.4544l-4.4032-3.6352a38.4 38.4 0 0 1-4.4544-49.9712l3.6864-4.352L458.496 512l-116.736-120.1664a38.4 38.4 0 0 1 50.8928-57.2928z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconshanchuzhaopian1X.defaultProps = {
  size: 18,
};

Iconshanchuzhaopian1X = React.memo ? React.memo(Iconshanchuzhaopian1X) : Iconshanchuzhaopian1X;

export default Iconshanchuzhaopian1X;
