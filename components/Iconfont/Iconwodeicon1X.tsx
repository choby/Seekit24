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

let Iconwodeicon1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 118.857143c217.124571 0 393.142857 176.018286 393.142857 393.142857S729.124571 905.142857 512 905.142857 118.857143 729.124571 118.857143 512 294.875429 118.857143 512 118.857143z m-35.108571 489.874286a27.428571 27.428571 0 0 0-36.022858 41.252571 100.571429 100.571429 0 0 0 142.262858 0 27.428571 27.428571 0 0 0-35.730286-41.435429l-3.072 2.633143-3.474286 3.145143a45.714286 45.714286 0 0 1-57.417143 0.219429l-6.582857-5.814857zM402.285714 402.285714a36.571429 36.571429 0 1 0 0 73.142857 36.571429 36.571429 0 0 0 0-73.142857z m219.428572 0a36.571429 36.571429 0 1 0 0 73.142857 36.571429 36.571429 0 0 0 0-73.142857z"
        fill={getIconColor(color, 0, '#131A25')}
        opacity=".398"
      />
    </Svg>
  );
};

Iconwodeicon1X.defaultProps = {
  size: 18,
};

Iconwodeicon1X = React.memo ? React.memo(Iconwodeicon1X) : Iconwodeicon1X;

export default Iconwodeicon1X;
