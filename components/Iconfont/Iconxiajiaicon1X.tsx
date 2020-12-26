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

let Iconxiajiaicon1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M972.8 499.2a38.4 38.4 0 0 1 38.0416 33.1776l0.3584 5.2224v292.5568c0 82.6368-63.7952 150.4256-144.5376 155.136l-9.0624 0.3072H166.4c-81.92 0-148.6848-64.8192-153.344-146.3296l-0.256-9.1136V537.6a38.4 38.4 0 0 1 76.4416-5.2224l0.3584 5.2224v292.5568c0 41.1648 30.7712 74.752 69.8368 78.336l6.9632 0.3072h691.2c39.936 0 72.96-31.2832 76.4928-71.4752l0.3072-7.168V537.6a38.4 38.4 0 0 1 38.4-38.4z m-460.8-486.4a38.4 38.4 0 0 1 38.0416 33.1776L550.4 51.2v555.3152l224.1024-224.0512a38.4 38.4 0 0 1 50.3296-3.4304l3.9424 3.4304a38.4 38.4 0 0 1 3.4304 50.3808l-3.4304 3.8912-289.6384 289.6384a38.4 38.4 0 0 1-50.3808 3.4304l-3.8912-3.4304L195.2256 436.736a38.4 38.4 0 0 1 50.3808-57.7024l3.8912 3.4304 224.1024 224.0512V51.2A38.4 38.4 0 0 1 512 12.8z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconxiajiaicon1X.defaultProps = {
  size: 18,
};

Iconxiajiaicon1X = React.memo ? React.memo(Iconxiajiaicon1X) : Iconxiajiaicon1X;

export default Iconxiajiaicon1X;
