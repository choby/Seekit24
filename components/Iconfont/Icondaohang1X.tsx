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

let Icondaohang1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M827.245714 230.351238L547.108571 958.512762a25.990095 25.990095 0 0 1-48.810666-0.828952l-106.788572-309.052953a25.990095 25.990095 0 0 0-16.091428-16.091428l-309.150476-106.837334a25.990095 25.990095 0 0 1-0.877715-48.761905l728.259048-280.137142a25.990095 25.990095 0 0 1 33.596952 33.54819z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Icondaohang1X.defaultProps = {
  size: 18,
};

Icondaohang1X = React.memo ? React.memo(Icondaohang1X) : Icondaohang1X;

export default Icondaohang1X;
