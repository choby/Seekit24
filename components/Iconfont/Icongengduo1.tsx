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

let Icongengduo1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.781538 0 512 229.218462 512 512s-229.218462 512-512 512S0 794.781538 0 512 229.218462 0 512 0z m0 59.076923C261.868308 59.076923 59.076923 261.868308 59.076923 512S261.868308 964.923077 512 964.923077 964.923077 762.131692 964.923077 512 762.131692 59.076923 512 59.076923z m29.538462 216.615385v206.76923H748.307692v59.076924h-206.76923V748.307692h-59.076924v-206.76923H275.692308v-59.076924h206.76923V275.692308h59.076924z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Icongengduo1.defaultProps = {
  size: 18,
};

Icongengduo1 = React.memo ? React.memo(Icongengduo1) : Icongengduo1;

export default Icongengduo1;
