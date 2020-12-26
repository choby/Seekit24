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

let Iconjingangqu41X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M473.6 146.2016a76.8 76.8 0 0 1 76.8 0l259.1744 149.6576a76.8 76.8 0 0 1 38.4 66.5088v299.264a76.8 76.8 0 0 1-38.4 66.5088L550.4 877.824a76.8 76.8 0 0 1-76.8 0L214.4256 728.1408a76.8 76.8 0 0 1-38.4-66.5088v-299.264a76.8 76.8 0 0 1 38.4-66.5088z m51.2 44.3392a25.6 25.6 0 0 0-25.6 0L240.0256 340.224a25.6 25.6 0 0 0-12.8 22.1696v299.264a25.6 25.6 0 0 0 12.8 22.1696L499.2 833.4592a25.6 25.6 0 0 0 25.6 0l259.1744-149.6576a25.6 25.6 0 0 0 12.8-22.1696v-299.264a25.6 25.6 0 0 0-12.8-22.1696z m-124.1856 214.4768l2.6624 1.3824 109.5424 64.9472 107.2128-63.1552a25.6 25.6 0 0 1 33.3824 6.5792l1.664 2.4832a25.6 25.6 0 0 1-6.5792 33.3824l-2.4832 1.664-107.9296 63.5904v112.4352a25.6 25.6 0 0 1-51.0208 2.9696l-0.1792-2.9696v-112.8448l-109.7216-65.024a25.6 25.6 0 0 1 23.4496-45.44z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconjingangqu41X.defaultProps = {
  size: 18,
};

Iconjingangqu41X = React.memo ? React.memo(Iconjingangqu41X) : Iconjingangqu41X;

export default Iconjingangqu41X;
