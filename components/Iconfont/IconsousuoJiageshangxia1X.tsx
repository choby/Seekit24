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

let IconsousuoJiageshangxia1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M856.064 681.1648l5.7344 7.168a51.2 51.2 0 0 1-6.9632 65.3312l-7.168 5.7344-307.2 204.8a51.2 51.2 0 0 1-47.9232 4.8128l-8.9088-4.8128-307.2-204.8a51.2 51.2 0 0 1 48.64-89.6l8.192 4.4032L512 860.0576l278.8352-185.856a51.2 51.2 0 0 1 65.1264 6.9632zM531.456 54.9888l8.9088 4.8128 307.2 204.8a51.2 51.2 0 0 1-48.64 89.6l-8.192-4.4032L512 163.9424 233.1648 349.7984a51.2 51.2 0 0 1-65.1264-6.9632l-5.8368-7.168a51.2 51.2 0 0 1 6.9632-65.2288l7.168-5.8368 307.2-204.8A51.2 51.2 0 0 1 531.456 54.9888z"
        fill={getIconColor(color, 0, '#4D5B72')}
      />
    </Svg>
  );
};

IconsousuoJiageshangxia1X.defaultProps = {
  size: 18,
};

IconsousuoJiageshangxia1X = React.memo ? React.memo(IconsousuoJiageshangxia1X) : IconsousuoJiageshangxia1X;

export default IconsousuoJiageshangxia1X;
