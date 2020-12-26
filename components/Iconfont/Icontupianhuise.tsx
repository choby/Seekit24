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

let Icontupianhuise: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M106.112 103.7824c-24.832 0-44.9792 20.1472-44.9792 44.9792v719.4368c0 24.8064 20.1216 44.928 44.9536 44.928H915.456c24.832 0 44.9536-20.096 44.9792-44.928V148.7616c0-24.832-20.1216-44.9536-44.9536-44.9792H106.112zM510.1056 778.24H196.0448v-224.7936l134.8864-134.912 224.8192 224.8192 134.912-134.912 134.8864 134.912V778.24H510.1056z m225.5104-359.7056a89.9072 89.9072 0 1 1 0-179.84 89.9072 89.9072 0 0 1 0 179.84z"
        fill={getIconColor(color, 0, '#E4E8EF')}
      />
    </Svg>
  );
};

Icontupianhuise.defaultProps = {
  size: 18,
};

Icontupianhuise = React.memo ? React.memo(Icontupianhuise) : Icontupianhuise;

export default Icontupianhuise;
