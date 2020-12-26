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

let Iconshuruzhengque: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 972.8a460.8 460.8 0 1 0 0-921.6 460.8 460.8 0 0 0 0 921.6z m0 51.2C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m-60.0064-405.9648l235.3664-235.3152a25.6 25.6 0 0 1 36.1984 36.1984l-253.44 253.44a25.6 25.6 0 0 1-36.1984 0l-144.8448-144.8448a25.6 25.6 0 0 1 36.2496-36.1984l126.6688 126.72z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconshuruzhengque.defaultProps = {
  size: 18,
};

Iconshuruzhengque = React.memo ? React.memo(Iconshuruzhengque) : Iconshuruzhengque;

export default Iconshuruzhengque;
