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

let Iconshezhi1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M311.1424 941.7728a81.92 81.92 0 0 1-66.6112-34.304l-4.3008-6.656L39.3728 552.96a81.92 81.92 0 0 1-3.9424-74.1376L39.3728 471.04l200.8576-347.8528a81.92 81.92 0 0 1 62.976-40.6016l7.936-0.3584h401.7152a81.92 81.92 0 0 1 66.6112 34.304l4.3008 6.656L984.6272 471.04a81.92 81.92 0 0 1 3.9424 74.1376l-3.9424 7.7824-200.8576 347.8528a81.92 81.92 0 0 1-62.976 40.6016l-7.936 0.3584H311.1424z m0-61.44h401.7152a20.48 20.48 0 0 0 15.1552-6.7072l2.56-3.5328 200.8576-347.8528a20.48 20.48 0 0 0 1.7408-16.5376l-1.7408-3.9424-200.8576-347.8528a20.48 20.48 0 0 0-13.4144-9.7792l-4.3008-0.512H311.1424a20.48 20.48 0 0 0-15.1552 6.7584l-2.56 3.5328L92.5696 501.76a20.48 20.48 0 0 0-1.7408 16.5376l1.7408 3.9424 200.8576 347.8528a20.48 20.48 0 0 0 13.4144 9.7792l4.3008 0.512zM512 696.32a184.32 184.32 0 1 1 0-368.64 184.32 184.32 0 0 1 0 368.64z m0-61.44a122.88 122.88 0 1 0 0-245.76 122.88 122.88 0 0 0 0 245.76z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconshezhi1X.defaultProps = {
  size: 18,
};

Iconshezhi1X = React.memo ? React.memo(Iconshezhi1X) : Iconshezhi1X;

export default Iconshezhi1X;
