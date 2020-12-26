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

let Iconxiaoxiliebiao1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M534.016 160C716.256 160 864 307.36 864 489.152c0 181.76-147.744 329.12-330.016 329.12h-44l-25.28 6.656c-35.52 9.088-89.696 22.112-162.56 39.072l-4.512-30.176a1726.752 1726.752 0 0 0-16.064-89.504A328.16 328.16 0 0 1 160 489.152C160 307.36 307.744 160 490.016 160h43.968z m105.44 344.48a29.344 29.344 0 0 0-40.064 10.784 98.304 98.304 0 0 1-170.4 0 29.344 29.344 0 1 0-50.88 29.28 156.96 156.96 0 0 0 272.128 0 29.344 29.344 0 0 0-10.784-40.064z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconxiaoxiliebiao1X.defaultProps = {
  size: 18,
};

Iconxiaoxiliebiao1X = React.memo ? React.memo(Iconxiaoxiliebiao1X) : Iconxiaoxiliebiao1X;

export default Iconxiaoxiliebiao1X;
