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

let IconsousuoQingchu1X1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870.4 217.6a38.4 38.4 0 1 1 11.3664 74.9568l-5.632 1.3824L870.4 294.4l-64-0.0512V819.2a140.8512 140.8512 0 0 1-114.4832 138.2912l-8.704 1.3824-8.8064 0.8704-8.8064 0.256H358.4a140.8512 140.8512 0 0 1-139.6736-123.136l-0.8704-8.8576L217.6 819.2V294.3488L153.6 294.4a38.4 38.4 0 0 1-37.0176-28.16l-1.024-5.0176L115.2 256a38.4 38.4 0 0 1 27.0336-36.5568l5.632-1.3824L153.6 217.6h716.8z m-140.8 76.8h-435.2V819.2c0 28.6208 18.944 53.2992 45.056 61.2352l6.144 1.536 5.9904 0.8704 6.8096 0.3584h307.2a64 64 0 0 0 62.72-50.8928l0.9216-6.2976 0.3584-6.8096V294.4zM614.4 422.4a38.4 38.4 0 0 1 36.5568 27.0336l1.3824 5.632 0.4608 5.7344v256a38.4 38.4 0 1 1-74.9568 11.3664l-1.3824-5.632L576 716.8V460.8a38.4 38.4 0 0 1 38.4-38.4z m-204.8 0a38.4 38.4 0 0 1 36.5568 27.0336l1.3824 5.632L448 460.8v256a38.4 38.4 0 1 1-74.9568 11.3664l-1.3824-5.632L371.2 716.8V460.8A38.4 38.4 0 0 1 409.6 422.4z m0-327.7312h204.8l6.912 0.6144a38.4 38.4 0 1 1 4.4544 74.3424l-5.632 1.3824-5.7344 0.4608-205.9264-0.0512-5.7856-0.5632a38.4 38.4 0 1 1-4.4544-74.3424l5.632-1.3824L409.6 94.6688z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconsousuoQingchu1X1.defaultProps = {
  size: 18,
};

IconsousuoQingchu1X1 = React.memo ? React.memo(IconsousuoQingchu1X1) : IconsousuoQingchu1X1;

export default IconsousuoQingchu1X1;
