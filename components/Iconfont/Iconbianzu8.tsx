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

let Iconbianzu8: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 102.4C285.7728 102.4 102.4 285.7728 102.4 512s183.3728 409.6 409.6 409.6 409.6-183.3728 409.6-409.6S738.2272 102.4 512 102.4z"
        fill={getIconColor(color, 0, '#E4E8EF')}
      />
      <Path
        d="M413.3376 286.5664a25.6 25.6 0 0 1 32.768 39.2192l-2.4832 2.048-32.64 23.9616h136.192a169.7024 169.7024 0 0 1 169.5744 163.7632l0.1024 5.9392a169.7024 169.7024 0 0 1-163.7376 169.6l-5.9648 0.1024h-86.2976a25.6 25.6 0 0 1-2.9952-51.0208l2.9952-0.1792h86.2976a118.5024 118.5024 0 0 0 5.4272-236.8512l-5.4272-0.128h-214.2976c-23.7568 0-34.2272-29.1328-17.408-44.416l2.2528-1.8176 95.6416-70.2208z"
        fill={getIconColor(color, 1, '#4D5B72')}
      />
    </Svg>
  );
};

Iconbianzu8.defaultProps = {
  size: 18,
};

Iconbianzu8 = React.memo ? React.memo(Iconbianzu8) : Iconbianzu8;

export default Iconbianzu8;
