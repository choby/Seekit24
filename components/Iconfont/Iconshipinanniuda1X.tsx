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

let Iconshipinanniuda1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M460.8 378.9824l192 110.848a25.6 25.6 0 0 1 0 44.3392l-192 110.848a25.6 25.6 0 0 1-38.4-22.1696V401.152a25.6 25.6 0 0 1 38.4-22.1696z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconshipinanniuda1X.defaultProps = {
  size: 18,
};

Iconshipinanniuda1X = React.memo ? React.memo(Iconshipinanniuda1X) : Iconshipinanniuda1X;

export default Iconshipinanniuda1X;
