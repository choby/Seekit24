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

let Iconyuyin1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.781538 0 512 229.218462 512 512s-229.218462 512-512 512S0 794.781538 0 512 229.218462 0 512 0z m0 59.076923C261.868308 59.076923 59.076923 261.868308 59.076923 512S261.868308 964.923077 512 964.923077 964.923077 762.131692 964.923077 512 762.131692 59.076923 512 59.076923z m86.843077 184.438154c147.180308 147.180308 149.937231 384.157538 8.192 534.646154l-8.192 8.428307-41.747692-41.747692a324.923077 324.923077 0 0 0 7.758769-451.505231l-7.758769-8.034461 41.747692-41.747692z m-122.919385 83.574154a265.846154 265.846154 0 0 1 7.089231 368.64l-7.089231 7.325538-41.747692-41.787077a206.769231 206.769231 0 0 0 6.695385-285.380923l-6.695385-7.049846 41.747692-41.747692z m-163.24923 144.935384a59.076923 59.076923 0 1 1 83.574153 83.495385 59.076923 59.076923 0 0 1-83.574153-83.495385z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconyuyin1X.defaultProps = {
  size: 18,
};

Iconyuyin1X = React.memo ? React.memo(Iconyuyin1X) : Iconyuyin1X;

export default Iconyuyin1X;
