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

let Iconfacebookfenxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m245.76 0l532.48 0q245.76 0 245.76 245.76l0 532.48q0 245.76-245.76 245.76l-532.48 0q-245.76 0-245.76-245.76l0-532.48q0-245.76 245.76-245.76Z"
        fill={getIconColor(color, 0, '#3B5792')}
      />
      <Path
        d="M484.80256 1024V671.232H357.376V525.312h127.3856v-111.24736c0-126.50496 74.93632-196.4032 189.5424-196.4032 54.8864 0 112.31232 9.89184 112.31232 9.89184v124.23168h-63.2832c-62.34112 0-81.75616 38.89152-81.75616 78.848v94.67904h139.18208l-22.24128 145.92h-116.9408V1024h-156.79488z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconfacebookfenxiang.defaultProps = {
  size: 18,
};

Iconfacebookfenxiang = React.memo ? React.memo(Iconfacebookfenxiang) : Iconfacebookfenxiang;

export default Iconfacebookfenxiang;
