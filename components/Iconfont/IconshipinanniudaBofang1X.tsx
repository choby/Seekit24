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

let IconshipinanniudaBofang1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M428.8 396.8a32 32 0 0 1 32 32v179.2a32 32 0 1 1-64 0v-179.2a32 32 0 0 1 32-32z m166.4 0a32 32 0 0 1 32 32v179.2a32 32 0 1 1-64 0v-179.2a32 32 0 0 1 32-32z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconshipinanniudaBofang1X.defaultProps = {
  size: 18,
};

IconshipinanniudaBofang1X = React.memo ? React.memo(IconshipinanniudaBofang1X) : IconshipinanniudaBofang1X;

export default IconshipinanniudaBofang1X;
