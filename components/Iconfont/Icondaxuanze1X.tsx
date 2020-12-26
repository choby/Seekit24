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

let Icondaxuanze1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 59.733333C262.229333 59.733333 59.733333 262.229333 59.733333 512c0 249.770667 202.496 452.266667 452.266667 452.266667 249.770667 0 452.266667-202.496 452.266667-452.266667 0-249.770667-202.496-452.266667-452.266667-452.266667z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
      <Path
        d="M488.106667 700.416a42.666667 42.666667 0 0 1-57.813334 2.816l-3.498666-3.242667-176.682667-185.344a42.666667 42.666667 0 0 1 58.112-62.293333l3.626667 3.413333 146.346666 153.386667 256-260.864a42.666667 42.666667 0 0 1 56.533334-3.84l3.754666 3.285333a42.666667 42.666667 0 0 1 3.84 56.618667l-3.242666 3.712-286.933334 292.352z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Icondaxuanze1X.defaultProps = {
  size: 18,
};

Icondaxuanze1X = React.memo ? React.memo(Icondaxuanze1X) : Icondaxuanze1X;

export default Icondaxuanze1X;
