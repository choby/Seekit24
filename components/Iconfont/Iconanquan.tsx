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

let Iconanquan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M522.007273 88.808727a25.925818 25.925818 0 0 0-20.200728 0l-322.048 138.705455a27.601455 27.601455 0 0 0-16.756363 25.320727v335.499636c0 164.957091 284.532364 288.907636 339.735273 311.296 6.004364 2.373818 12.567273 2.373818 18.385454 0 55.342545-22.341818 339.688727-146.152727 339.688727-311.296V252.834909a27.322182 27.322182 0 0 0-16.570181-25.274182l-322.234182-138.705454zM512 687.755636v-159.278545H401.687273L512 300.171636v159.278546h110.312727L512 687.755636z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconanquan.defaultProps = {
  size: 18,
};

Iconanquan = React.memo ? React.memo(Iconanquan) : Iconanquan;

export default Iconanquan;
