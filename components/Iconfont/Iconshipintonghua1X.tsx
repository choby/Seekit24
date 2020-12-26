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

let Iconshipintonghua1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M573.44 286.72a102.4 102.4 0 0 1 102.2976 97.95584L675.84 389.12v60.49792l95.47776-85.9136a40.96 40.96 0 0 1 68.1984 26.66496l0.16384 3.76832v276.6848a40.96 40.96 0 0 1-65.4336 32.82944l-2.92864-2.39616L675.84 615.3216V675.84a102.4 102.4 0 0 1-97.95584 102.2976L573.44 778.24H286.72a102.4 102.4 0 0 1-102.2976-97.95584L184.32 675.84V389.12a102.4 102.4 0 0 1 97.95584-102.2976L286.72 286.72h286.72z m0 40.96H286.72a61.44 61.44 0 0 0-61.3376 57.83552L225.28 389.12v286.72a61.44 61.44 0 0 0 57.83552 61.3376L286.72 737.28h286.72a61.44 61.44 0 0 0 61.3376-57.83552L634.88 675.84V389.12a61.44 61.44 0 0 0-57.83552-61.3376L573.44 327.68z m225.28 66.4576l-110.1824 99.16416a20.39808 20.39808 0 0 1-12.6976 5.2224v69.79584a20.41856 20.41856 0 0 1 12.77952 3.62496l2.00704 1.59744L798.72 670.8224v-276.6848z"
        fill={getIconColor(color, 0, '#3B4657')}
      />
    </Svg>
  );
};

Iconshipintonghua1X.defaultProps = {
  size: 18,
};

Iconshipintonghua1X = React.memo ? React.memo(Iconshipintonghua1X) : Iconshipintonghua1X;

export default Iconshipintonghua1X;
