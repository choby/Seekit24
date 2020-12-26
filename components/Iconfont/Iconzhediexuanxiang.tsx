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

let Iconzhediexuanxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m0 512a512 512 0 1 0 0-1024 512 512 0 1 0 0 1024Z"
        fill={getIconColor(color, 0, '#F3F6F8')}
      />
      <Path
        d="M530.1248 650.1888a25.6 25.6 0 0 1-32.6656 2.9696l-3.584-2.9696-204.8-204.8a25.6 25.6 0 0 1 32.6656-39.168l3.584 2.9696L512 595.8656l186.6752-186.6752a25.6 25.6 0 0 1 32.6656-2.9696l3.584 2.9696a25.6 25.6 0 0 1 2.9184 32.6144l-2.9184 3.584-204.8 204.8z"
        fill={getIconColor(color, 1, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconzhediexuanxiang.defaultProps = {
  size: 18,
};

Iconzhediexuanxiang = React.memo ? React.memo(Iconzhediexuanxiang) : Iconzhediexuanxiang;

export default Iconzhediexuanxiang;
