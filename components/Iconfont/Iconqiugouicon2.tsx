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

let Iconqiugouicon2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M240.164571 869.814857h548.571429a100.571429 100.571429 0 0 0 100.571429-100.571428v-475.428572a100.571429 100.571429 0 0 0-100.571429-100.571428h-548.571429a100.571429 100.571429 0 0 0-100.571428 100.571428v475.428572a100.571429 100.571429 0 0 0 100.571428 100.571428z"
        fill={getIconColor(color, 0, '#131A25')}
      />
      <Path
        d="M668.562286 355.218286l-23.478857-28.013715a64 64 0 0 0-90.185143-7.899428L351.853714 489.691429a64 64 0 0 0-21.577143 36.132571l-14.701714 71.570286a27.428571 27.428571 0 0 0 26.88 32.950857H416.914286c15.030857 0 29.622857-5.302857 41.142857-14.994286l202.605714-169.984a64 64 0 0 0 7.862857-90.148571z m-65.499429 7.241143l23.478857 28.013714a9.142857 9.142857 0 0 1-1.097143 12.873143l-202.605714 170.020571-1.828571 1.170286a9.142857 9.142857 0 0 1-4.059429 0.950857h-40.850286l7.936-38.619429a9.142857 9.142857 0 0 1 3.072-5.12l203.044572-170.422857a9.142857 9.142857 0 0 1 12.909714 1.097143zM658.285714 684.617143a27.428571 27.428571 0 0 1 3.730286 54.601143L658.285714 739.474286h-292.571428a27.428571 27.428571 0 0 1-3.730286-54.637715L365.714286 684.617143h292.571428z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconqiugouicon2.defaultProps = {
  size: 18,
};

Iconqiugouicon2 = React.memo ? React.memo(Iconqiugouicon2) : Iconqiugouicon2;

export default Iconqiugouicon2;
