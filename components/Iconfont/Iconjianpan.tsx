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

let Iconjianpan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1063 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.781538 0 512 229.218462 512 512s-229.218462 512-512 512S0 794.781538 0 512 229.218462 0 512 0z m0 59.076923C261.868308 59.076923 59.076923 261.868308 59.076923 512S261.868308 964.923077 512 964.923077 964.923077 762.131692 964.923077 512 762.131692 59.076923 512 59.076923zM787.692308 669.538462v59.076923H236.307692V669.538462h551.384616z m-393.846154-177.23077v118.153846H275.692308v-118.153846h118.153846z m175.655384 0v118.153846h-118.153846v-118.153846h118.153846z m178.806154 0v118.153846h-118.153846v-118.153846h118.153846zM335.123692 334.454154v118.153846h-118.153846v-118.153846h118.153846z m157.538462 0v118.153846h-118.153846v-118.153846h118.153846z m157.538461 0v118.153846h-118.153846v-118.153846h118.153846z m157.538462 0v118.153846h-118.153846v-118.153846h118.153846z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconjianpan.defaultProps = {
  size: 18,
};

Iconjianpan = React.memo ? React.memo(Iconjianpan) : Iconjianpan;

export default Iconjianpan;
