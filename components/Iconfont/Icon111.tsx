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

let Icon111: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M433.481143 182.418286L211.748571 337.115429a137.142857 137.142857 0 0 0-58.660571 112.493714v296.265143a137.142857 137.142857 0 0 0 137.142857 137.142857h438.857143a137.142857 137.142857 0 0 0 137.142857-137.142857v-296.850286a137.142857 137.142857 0 0 0-57.782857-111.835429L591.36 183.076571a137.142857 137.142857 0 0 0-157.878857-0.658285z"
        fill={getIconColor(color, 0, '#131A25')}
      />
      <Path
        d="M619.373714 511.232h-219.428571a27.428571 27.428571 0 0 0-27.428572 27.428571v60.928a137.142857 137.142857 0 0 0 274.285715 0V538.697143a27.428571 27.428571 0 0 0-27.428572-27.428572z m-192.036571 54.820571h164.571428v33.536a82.285714 82.285714 0 0 1-82.285714 82.285715l-5.595428-0.182857a82.285714 82.285714 0 0 1-76.653715-82.102858l-0.036571-33.536z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Icon111.defaultProps = {
  size: 18,
};

Icon111 = React.memo ? React.memo(Icon111) : Icon111;

export default Icon111;
