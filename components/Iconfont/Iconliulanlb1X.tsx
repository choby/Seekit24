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

let Iconliulanlb1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M505.173333 904.362667c-146.432 0-295.651556-129.194667-451.356444-383.374223l-9.102222-14.848 21.731555-35.214222C217.543111 230.229333 362.666667 107.918222 505.173333 107.918222c146.432 0 295.367111 129.194667 450.56 383.431111l8.988445 14.791111-21.617778 35.157334c-150.584889 240.696889-295.480889 363.064889-437.930667 363.064889z m0-56.888889c120.945778 0 256.170667-117.304889 401.976889-356.124445l-9.159111 14.791111-15.758222-24.974222C750.08 275.512889 626.915556 171.235556 515.527111 165.091556l-10.353778-0.284445c-114.119111 0-241.095111 104.277333-377.856 316.416l-15.758222 24.917333 15.758222 24.917334c132.608 205.710222 256 309.987556 367.445334 316.131555z m-0.455111-170.666667a170.666667 170.666667 0 1 1 0-341.333333 170.666667 170.666667 0 0 1 0 341.333333z m0-56.888889a113.777778 113.777778 0 1 0 0-227.555555 113.777778 113.777778 0 0 0 0 227.555555z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconliulanlb1X.defaultProps = {
  size: 18,
};

Iconliulanlb1X = React.memo ? React.memo(Iconliulanlb1X) : Iconliulanlb1X;

export default Iconliulanlb1X;
