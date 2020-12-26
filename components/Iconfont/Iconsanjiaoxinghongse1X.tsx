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

let Iconsanjiaoxinghongse1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1365 1024" width={size} height={size} {...rest}>
      <Path
        d="M1024 0L0 1024h1365.333333l-179.598222-151.381333A455.111111 455.111111 0 0 1 1024 524.629333V0z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconsanjiaoxinghongse1X.defaultProps = {
  size: 18,
};

Iconsanjiaoxinghongse1X = React.memo ? React.memo(Iconsanjiaoxinghongse1X) : Iconsanjiaoxinghongse1X;

export default Iconsanjiaoxinghongse1X;
