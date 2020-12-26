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

let Iconshengchanerweima: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M225.28 495.12448h269.84448V225.28h-206.2336A63.61088 63.61088 0 0 0 225.28 288.89088v206.2336z m67.46112-202.38336h134.92224v134.92224h-134.92224v-134.92224z m236.1344 202.40384H798.72V288.89088A63.61088 63.61088 0 0 0 735.10912 225.28h-206.2336v269.86496z m67.46112-67.4816v-134.92224h134.92224v134.92224h-134.92224zM326.4512 393.9328h67.46112v-67.46112h-67.46112v67.46112zM288.89088 798.72h206.2336V528.87552H225.28v206.2336A63.61088 63.61088 0 0 0 288.89088 798.72z m3.85024-202.38336h134.92224v134.92224h-134.92224v-134.92224z m337.3056-269.86496v67.46112h67.4816v-67.46112h-67.46112zM596.35712 798.72v-67.46112h-67.46112V798.72h67.46112z m0-202.38336v134.92224h67.46112v-134.92224h-67.46112z m67.46112 134.92224V798.72h71.31136A63.61088 63.61088 0 0 0 798.72 735.10912v-71.31136h-67.46112v67.46112h-67.46112zM798.72 596.33664v-67.46112h-67.46112v67.46112H798.72z m-269.84448 0h67.46112v-67.46112h-67.46112v67.46112z m-202.40384 101.1712h67.46112v-67.44064h-67.46112v67.46112z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconshengchanerweima.defaultProps = {
  size: 18,
};

Iconshengchanerweima = React.memo ? React.memo(Iconshengchanerweima) : Iconshengchanerweima;

export default Iconshengchanerweima;
