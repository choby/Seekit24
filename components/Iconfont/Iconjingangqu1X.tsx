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

let Iconjingangqu1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1049 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 268.8A89.6 89.6 0 0 1 217.6 179.2h588.8a89.6 89.6 0 0 1 89.6 89.6v435.2a89.6 89.6 0 0 1-89.6 89.6h-588.8A89.6 89.6 0 0 1 128 704zM179.2 537.6h665.6V268.8a38.4 38.4 0 0 0-34.7136-38.2208L806.4 230.4h-588.8A38.4 38.4 0 0 0 179.2 268.8V537.6z m38.4 204.8h588.8a38.4 38.4 0 0 0 38.4-38.4v-115.1744H179.2V704a38.4 38.4 0 0 0 34.7136 38.2208L217.6 742.4z m293.8368-33.536a42.3424 42.3424 0 1 1 0-84.736 42.3424 42.3424 0 0 1 0 84.736zM326.4 870.4a19.2 19.2 0 0 1-19.2-19.2v-12.8a19.2 19.2 0 0 1 19.2-19.2h371.2a19.2 19.2 0 0 1 19.2 19.2v12.8a19.2 19.2 0 0 1-19.2 19.2h-371.2z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconjingangqu1X.defaultProps = {
  size: 18,
};

Iconjingangqu1X = React.memo ? React.memo(Iconjingangqu1X) : Iconjingangqu1X;

export default Iconjingangqu1X;
