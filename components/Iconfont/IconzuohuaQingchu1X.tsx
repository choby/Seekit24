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

let IconzuohuaQingchu1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870.4 230.4a25.6 25.6 0 0 1 3.4816 50.961067l-3.4816 0.238933h-76.8V819.2a128 128 0 0 1-121.173333 127.829333l-6.826667 0.170667h-307.2a128 128 0 0 1-127.829333-121.173333L230.4 819.2V281.6H153.6a25.6 25.6 0 0 1-3.4816-50.961067L153.6 230.4h716.8z m-128 51.2H281.6V819.2a76.8 76.8 0 0 0 66.1504 76.0832l5.393067 0.546133 5.256533 0.170667h307.2a76.8 76.8 0 0 0 76.629333-71.543467L742.4 819.2V281.6zM614.4 435.2a25.6 25.6 0 0 1 25.361067 22.1184l0.238933 3.4816V716.8a25.6 25.6 0 0 1-50.961067 3.4816L588.8 716.8v-256a25.6 25.6 0 0 1 25.6-25.6z m-204.8 0a25.6 25.6 0 0 1 25.361067 22.1184l0.238933 3.4816V716.8a25.6 25.6 0 0 1-50.961067 3.4816L384 716.8v-256a25.6 25.6 0 0 1 25.6-25.6z m204.8-327.748267l3.4816 0.238934a25.6 25.6 0 0 1 0 50.756266L614.4 158.651733h-204.8l-3.4816-0.2048a25.6 25.6 0 0 1 0-50.756266L409.6 107.451733h204.8z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconzuohuaQingchu1X.defaultProps = {
  size: 18,
};

IconzuohuaQingchu1X = React.memo ? React.memo(IconzuohuaQingchu1X) : IconzuohuaQingchu1X;

export default IconzuohuaQingchu1X;
