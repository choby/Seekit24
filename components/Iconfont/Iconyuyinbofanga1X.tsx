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

let Iconyuyinbofanga1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M396.209231 471.985231a59.076923 59.076923 0 1 1-83.495385 83.574154 59.076923 59.076923 0 0 1 83.495385-83.574154z m79.714461-144.935385a265.846154 265.846154 0 0 1 7.089231 368.64l-7.089231 7.364923-41.747692-41.787077a206.769231 206.769231 0 0 0 6.695385-285.380923l-6.695385-7.049846 41.747692-41.747692z m122.919385-83.495384c147.180308 147.140923 149.937231 384.118154 8.192 534.606769l-8.192 8.428307-41.747692-41.747692a324.923077 324.923077 0 0 0 7.758769-451.505231l-7.758769-8.034461 41.747692-41.747692z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconyuyinbofanga1X.defaultProps = {
  size: 18,
};

Iconyuyinbofanga1X = React.memo ? React.memo(Iconyuyinbofanga1X) : Iconyuyinbofanga1X;

export default Iconyuyinbofanga1X;
