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

let Iconanzhushuohua1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M827.076923 433.230769a39.384615 39.384615 0 0 1 39.108923 34.776616L866.461538 472.615385v39.384615c0 182.429538-137.846154 332.681846-315.076923 352.295385V984.615385a39.384615 39.384615 0 0 1-78.493538 4.608L472.615385 984.615385v-120.32a354.540308 354.540308 0 0 1-314.919385-341.858462L157.538462 512v-39.384615a39.384615 39.384615 0 0 1 78.493538-4.608L236.307692 472.615385v39.384615a275.692308 275.692308 0 0 0 551.227077 9.452308L787.692308 512v-39.384615a39.384615 39.384615 0 0 1 39.384615-39.384616zM511.960615 0a216.615385 216.615385 0 0 1 216.418462 207.911385l0.196923 8.704v275.692307a216.615385 216.615385 0 0 1-433.073231 8.704l-0.157538-8.704v-275.692307a216.615385 216.615385 0 0 1 216.615384-216.615385z m0 78.769231a137.846154 137.846154 0 0 0-137.64923 130.284307l-0.196923 7.561847v275.692307a137.846154 137.846154 0 0 0 275.456 7.561846l0.236307-7.561846v-275.692307a137.846154 137.846154 0 0 0-137.846154-137.846154z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconanzhushuohua1X.defaultProps = {
  size: 18,
};

Iconanzhushuohua1X = React.memo ? React.memo(Iconanzhushuohua1X) : Iconanzhushuohua1X;

export default Iconanzhushuohua1X;
