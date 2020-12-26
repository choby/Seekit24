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

let IconfanhuiBaise1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M339.8144 902.4l-3.7376-3.6352-321.792-362.0352a38.4 38.4 0 0 1-3.2256-46.8992l3.2256-4.096 321.792-362.0864a38.4 38.4 0 0 1 60.6208 46.8992l-3.2256 4.096-265.728 299.008 839.168-0.0512a38.4 38.4 0 0 1 5.2224 76.4416l-5.2224 0.3584H129.1776l264.2944 297.3184a38.4 38.4 0 0 1 0.512 50.4832l-3.6864 3.7376a38.4 38.4 0 0 1-50.4832 0.512z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconfanhuiBaise1X.defaultProps = {
  size: 18,
};

IconfanhuiBaise1X = React.memo ? React.memo(IconfanhuiBaise1X) : IconfanhuiBaise1X;

export default IconfanhuiBaise1X;
