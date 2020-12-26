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

let Iconsanjiaoxing1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1365 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.333333 0l1024 1024H0l183.751111-158.72A455.111111 455.111111 0 0 0 341.333333 520.817778V0z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconsanjiaoxing1X.defaultProps = {
  size: 18,
};

Iconsanjiaoxing1X = React.memo ? React.memo(Iconsanjiaoxing1X) : Iconsanjiaoxing1X;

export default Iconsanjiaoxing1X;
