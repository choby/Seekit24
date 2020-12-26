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

let Iconliebiaozhedieshang1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M487.492267 234.154667a34.133333 34.133333 0 0 1 44.2368-4.096l4.778666 4.096L916.821333 626.005333a34.133333 34.133333 0 0 1-44.305066 51.541334l-4.642134-3.959467-356.010666-366.728533-355.874134 366.728533a34.133333 34.133333 0 0 1-43.485866 4.573867l-4.778667-3.8912a34.133333 34.133333 0 0 1-4.573867-43.485867l3.8912-4.778667L487.424 234.154667z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconliebiaozhedieshang1X.defaultProps = {
  size: 18,
};

Iconliebiaozhedieshang1X = React.memo ? React.memo(Iconliebiaozhedieshang1X) : Iconliebiaozhedieshang1X;

export default Iconliebiaozhedieshang1X;
