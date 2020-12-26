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

let IconzhongfaQiandi1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 224a288.128 288.128 0 0 1 274.176 199.594667l3.157333 10.666666 14.549334-18.645333 8.192-10.965333a32 32 0 0 1 52.053333 37.248c-3.114667 4.309333-7.424 10.069333-12.885333 17.109333l-29.312 37.12-29.141334 36.096c-18.986667 23.338667-56.789333 9.898667-56.789333-20.224A224 224 0 1 0 512 736a32 32 0 1 1 0 64 288 288 0 1 1 0-576z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

IconzhongfaQiandi1X.defaultProps = {
  size: 18,
};

IconzhongfaQiandi1X = React.memo ? React.memo(IconzhongfaQiandi1X) : IconzhongfaQiandi1X;

export default IconzhongfaQiandi1X;
