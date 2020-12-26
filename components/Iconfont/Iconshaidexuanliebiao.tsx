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

let Iconshaidexuanliebiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M614.4 345.6a140.8512 140.8512 0 0 1-135.5264-102.4H96.512a38.4 38.4 0 0 1-5.2224-76.4416l5.2224-0.3584h382.4128a140.8512 140.8512 0 0 1 270.9504 0h165.8368a38.4 38.4 0 0 1 5.2224 76.4416l-5.2224 0.3584h-165.7856a140.8512 140.8512 0 0 1-135.5264 102.4z m0-76.8a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m-256 384a140.8512 140.8512 0 0 1-135.5264-102.4H96.512a38.4 38.4 0 0 1-5.2224-76.4416l5.2224-0.3584h126.4128a140.8512 140.8512 0 0 1 270.9504 0h421.8368a38.4 38.4 0 0 1 5.2224 76.4416l-5.2224 0.3584H493.9264a140.8512 140.8512 0 0 1-135.5264 102.4z m0-76.8a64 64 0 1 0 0-128 64 64 0 0 0 0 128z m256 384a140.8512 140.8512 0 0 1-135.5264-102.4H96.512a38.4 38.4 0 0 1-5.2224-76.4416l5.2224-0.3584h382.4128a140.8512 140.8512 0 0 1 270.9504 0h165.8368a38.4 38.4 0 0 1 5.2224 76.4416l-5.2224 0.3584h-165.7856a140.8512 140.8512 0 0 1-135.5264 102.4z m0-76.8a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconshaidexuanliebiao.defaultProps = {
  size: 18,
};

Iconshaidexuanliebiao = React.memo ? React.memo(Iconshaidexuanliebiao) : Iconshaidexuanliebiao;

export default Iconshaidexuanliebiao;
