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

let Iconqiugouicon21: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M276.736 869.814857h475.428571a137.142857 137.142857 0 0 0 137.142858-137.142857v-402.285714a137.142857 137.142857 0 0 0-137.142858-137.142857h-475.428571a137.142857 137.142857 0 0 0-137.142857 137.142857v402.285714a137.142857 137.142857 0 0 0 137.142857 137.142857z"
        fill={getIconColor(color, 0, '#131A25')}
      />
      <Path
        d="M658.285714 684.617143a27.428571 27.428571 0 0 1 3.730286 54.601143L658.285714 739.474286h-292.571428a27.428571 27.428571 0 0 1-3.730286-54.637715L365.714286 684.617143h292.571428zM554.898286 319.268571a64 64 0 0 1 90.185143 7.899429l23.478857 28.013714a64 64 0 0 1-7.862857 90.148572l-202.605715 170.020571a64 64 0 0 1-41.142857 14.994286H342.454857a27.428571 27.428571 0 0 1-26.88-32.987429l14.738286-71.570285a64 64 0 0 1 21.540571-36.132572z m48.164571 43.154286a9.142857 9.142857 0 0 0-12.909714-1.097143l-203.044572 170.349715a9.142857 9.142857 0 0 0-3.072 5.156571l-7.936 38.619429h40.850286a9.142857 9.142857 0 0 0 4.096-0.950858l1.792-1.170285 202.605714-170.020572a9.142857 9.142857 0 0 0 1.097143-12.873143z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconqiugouicon21.defaultProps = {
  size: 18,
};

Iconqiugouicon21 = React.memo ? React.memo(Iconqiugouicon21) : Iconqiugouicon21;

export default Iconqiugouicon21;
