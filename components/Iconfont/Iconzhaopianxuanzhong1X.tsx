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

let Iconzhaopianxuanzhong1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 51.2a460.8 460.8 0 1 0 0 921.6 460.8 460.8 0 0 0 0-921.6z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
      <Path
        d="M485.0688 697.4464a38.4 38.4 0 0 1-51.2 3.1744l-3.9936-3.584-176.64-185.344a38.4 38.4 0 0 1 51.712-56.5248l3.84 3.5328 149.3504 156.6208 259.072-264.0384a38.4 38.4 0 0 1 50.3296-3.8912l3.9936 3.3792a38.4 38.4 0 0 1 3.8912 50.3808l-3.4304 3.9424-286.9248 292.352z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconzhaopianxuanzhong1X.defaultProps = {
  size: 18,
};

Iconzhaopianxuanzhong1X = React.memo ? React.memo(Iconzhaopianxuanzhong1X) : Iconzhaopianxuanzhong1X;

export default Iconzhaopianxuanzhong1X;
