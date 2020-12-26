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

let Iconbiaoqing1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.781538 0 512 229.218462 512 512s-229.218462 512-512 512S0 794.781538 0 512 229.218462 0 512 0z m0 59.076923C261.868308 59.076923 59.076923 261.868308 59.076923 512S261.868308 964.923077 512 964.923077 964.923077 762.131692 964.923077 512 762.131692 59.076923 512 59.076923z m-90.505846 599.118769a128 128 0 0 0 181.011692 0 29.538462 29.538462 0 0 1 41.747692 41.787077 187.076923 187.076923 0 0 1-264.546461 0 29.538462 29.538462 0 0 1 41.747692-41.747692zM374.153846 354.461538a59.076923 59.076923 0 1 1 0 118.153847 59.076923 59.076923 0 0 1 0-118.153847z m275.692308 0a59.076923 59.076923 0 1 1 0 118.153847 59.076923 59.076923 0 0 1 0-118.153847z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconbiaoqing1X.defaultProps = {
  size: 18,
};

Iconbiaoqing1X = React.memo ? React.memo(Iconbiaoqing1X) : Iconbiaoqing1X;

export default Iconbiaoqing1X;
