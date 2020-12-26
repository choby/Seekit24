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

let Iconxuanxiangheise1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M102.4 614.4a102.4 102.4 0 1 1 0-204.8 102.4 102.4 0 0 1 0 204.8z m409.6 0a102.4 102.4 0 1 1 0-204.8 102.4 102.4 0 0 1 0 204.8z m409.6 0a102.4 102.4 0 1 1 0-204.8 102.4 102.4 0 0 1 0 204.8z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconxuanxiangheise1X.defaultProps = {
  size: 18,
};

Iconxuanxiangheise1X = React.memo ? React.memo(Iconxuanxiangheise1X) : Iconxuanxiangheise1X;

export default Iconxuanxiangheise1X;
