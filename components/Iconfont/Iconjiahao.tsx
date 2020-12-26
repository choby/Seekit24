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

let Iconjiahao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 921.6a409.6 409.6 0 1 1 0-819.2 409.6 409.6 0 0 1 0 819.2z m38.4-371.2H716.8a38.4 38.4 0 1 0 0-76.8h-166.4V307.2a38.4 38.4 0 1 0-76.8 0v166.4H307.2a38.4 38.4 0 0 0 0 76.8h166.4V716.8a38.4 38.4 0 1 0 76.8 0v-166.4z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconjiahao.defaultProps = {
  size: 18,
};

Iconjiahao = React.memo ? React.memo(Iconjiahao) : Iconjiahao;

export default Iconjiahao;
