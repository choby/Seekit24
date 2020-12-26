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

let Iconjianhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 870.4a358.4 358.4 0 1 0 0-716.8 358.4 358.4 0 0 0 0 716.8z m0 51.2a409.6 409.6 0 1 1 0-819.2 409.6 409.6 0 0 1 0 819.2z m204.8-448a38.4 38.4 0 1 1 0 76.8H307.2a38.4 38.4 0 1 1 0-76.8h409.6z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconjianhao.defaultProps = {
  size: 18,
};

Iconjianhao = React.memo ? React.memo(Iconjianhao) : Iconjianhao;

export default Iconjianhao;
