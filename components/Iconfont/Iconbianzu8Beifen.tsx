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

let Iconbianzu8Beifen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 102.4C285.7728 102.4 102.4 285.7728 102.4 512s183.3728 409.6 409.6 409.6 409.6-183.3728 409.6-409.6S738.2272 102.4 512 102.4z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
      <Path
        d="M658.432 390.4512a25.6 25.6 0 0 1 39.2448 32.7168l-2.048 2.4576-204.8 216.576a25.6 25.6 0 0 1-34.2528 2.7136l-2.4576-2.176-128-128a25.6 25.6 0 0 1 33.792-38.3488l2.4064 2.1504 109.3888 109.3632 186.7008-197.4528z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconbianzu8Beifen.defaultProps = {
  size: 18,
};

Iconbianzu8Beifen = React.memo ? React.memo(Iconbianzu8Beifen) : Iconbianzu8Beifen;

export default Iconbianzu8Beifen;
