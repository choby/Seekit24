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

let Iconshipinluzhiwancheng1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 102.4c226.2272 0 409.6 183.3728 409.6 409.6s-183.3728 409.6-409.6 409.6S102.4 738.2272 102.4 512 285.7728 102.4 512 102.4z m182.6048 287.0528a25.6 25.6 0 0 0-36.1984 1.024l-186.7008 197.4272-109.3888-109.3632-2.4064-2.1504a25.6 25.6 0 0 0-33.792 38.3488l128 128 2.4576 2.176a25.6 25.6 0 0 0 34.2528-2.688l204.8-216.576 2.048-2.4832a25.6 25.6 0 0 0-3.072-33.7152z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconshipinluzhiwancheng1X.defaultProps = {
  size: 18,
};

Iconshipinluzhiwancheng1X = React.memo ? React.memo(Iconshipinluzhiwancheng1X) : Iconshipinluzhiwancheng1X;

export default Iconshipinluzhiwancheng1X;
