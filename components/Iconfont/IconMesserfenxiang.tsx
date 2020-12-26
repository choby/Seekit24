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

let IconMesserfenxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m245.76 0l532.48 0q245.76 0 245.76 245.76l0 532.48q0 245.76-245.76 245.76l-532.48 0q-245.76 0-245.76-245.76l0-532.48q0-245.76 245.76-245.76Z"
        fill={getIconColor(color, 0, '#007FFF')}
      />
      <Path
        d="M501.76 204.8C326.4512 204.8 184.32 336.40448 184.32 498.72896c0 92.50816 46.16192 175.0016 118.29248 228.88448V839.68l108.09344-59.33056c28.83584 7.9872 59.392 12.30848 91.05408 12.30848 175.3088 0 317.44-131.60448 317.44-293.92896C819.2 336.384 677.0688 204.8 501.76 204.8z m31.5392 395.81696l-80.83456-86.2208-157.73696 86.2208 173.50656-184.19712 82.80064 86.2208 155.79136-86.2208-173.52704 184.19712z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconMesserfenxiang.defaultProps = {
  size: 18,
};

IconMesserfenxiang = React.memo ? React.memo(IconMesserfenxiang) : IconMesserfenxiang;

export default IconMesserfenxiang;
