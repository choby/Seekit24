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

let Iconfenxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1075 1024" width={size} height={size} {...rest}>
      <Path
        d="M434.176 72.8576a38.4 38.4 0 1 1 15.1552 75.264 371.2 371.2 0 1 0 437.4016 439.7056 38.4 38.4 0 0 1 75.2128 15.6672A448 448 0 1 1 434.1248 72.9088z m242.688 67.9424a38.4 38.4 0 0 1 0-76.8h153.6A140.8 140.8 0 0 1 971.264 204.8v153.6a38.4 38.4 0 1 1-76.8 0V204.8c0-35.328-28.6208-64-64-64h-153.6z"
        fill={getIconColor(color, 0, '#131A25')}
      />
      <Path
        d="M857.6512 127.5392a38.4 38.4 0 0 1 54.1184 54.528L421.376 668.8256a38.4 38.4 0 0 1-54.0672-54.528l490.3424-486.7584z"
        fill={getIconColor(color, 1, '#131A25')}
      />
    </Svg>
  );
};

Iconfenxiang.defaultProps = {
  size: 18,
};

Iconfenxiang = React.memo ? React.memo(Iconfenxiang) : Iconfenxiang;

export default Iconfenxiang;
