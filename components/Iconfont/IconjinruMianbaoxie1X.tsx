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

let IconjinruMianbaoxie1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M858.989714 472.649143a54.857143 54.857143 0 0 1 5.12 73.069714l-5.12 5.632-419.913143 407.625143A54.857143 54.857143 0 0 1 357.668571 885.76l4.973715-5.558857L742.034286 512 362.642286 143.798857a54.857143 54.857143 0 0 1-5.997715-71.899428l4.827429-5.705143a54.857143 54.857143 0 0 1 71.899429-5.997715l5.705142 4.827429 419.913143 407.625143z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

IconjinruMianbaoxie1X.defaultProps = {
  size: 18,
};

IconjinruMianbaoxie1X = React.memo ? React.memo(IconjinruMianbaoxie1X) : IconjinruMianbaoxie1X;

export default IconjinruMianbaoxie1X;
