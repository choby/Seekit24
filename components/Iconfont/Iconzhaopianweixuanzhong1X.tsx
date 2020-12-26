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

let Iconzhaopianweixuanzhong1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 51.2a460.8 460.8 0 1 0 0 921.6 460.8 460.8 0 0 0 0-921.6z m0 102.4a358.4 358.4 0 1 1 0 716.8 358.4 358.4 0 0 1 0-716.8z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconzhaopianweixuanzhong1X.defaultProps = {
  size: 18,
};

Iconzhaopianweixuanzhong1X = React.memo ? React.memo(Iconzhaopianweixuanzhong1X) : Iconzhaopianweixuanzhong1X;

export default Iconzhaopianweixuanzhong1X;
