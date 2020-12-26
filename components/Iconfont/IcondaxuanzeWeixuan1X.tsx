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

let IcondaxuanzeWeixuan1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 59.733333C262.229333 59.733333 59.733333 262.229333 59.733333 512c0 249.770667 202.496 452.266667 452.266667 452.266667 249.770667 0 452.266667-202.496 452.266667-452.266667 0-249.770667-202.496-452.266667-452.266667-452.266667z m0 85.333334a366.933333 366.933333 0 1 1 0 733.866666 366.933333 366.933333 0 0 1 0-733.866666z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IcondaxuanzeWeixuan1X.defaultProps = {
  size: 18,
};

IcondaxuanzeWeixuan1X = React.memo ? React.memo(IcondaxuanzeWeixuan1X) : IcondaxuanzeWeixuan1X;

export default IcondaxuanzeWeixuan1X;
