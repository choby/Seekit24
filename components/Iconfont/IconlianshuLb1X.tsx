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

let IconlianshuLb1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 514.340571C896 300.982857 724.077714 128 512 128S128 300.982857 128 514.340571c0 192.841143 140.434286 352.694857 324.022857 381.659429v-269.970286H354.450286v-111.689143h97.499428v-85.138285c0-96.804571 57.344-150.308571 145.078857-150.308572 41.984 0 85.942857 7.570286 85.942858 7.570286v95.085714h-48.420572c-47.725714 0-62.573714 29.769143-62.573714 60.342857v72.448h106.496l-17.005714 111.689143H571.977143V896c183.588571-28.964571 323.986286-188.818286 323.986286-381.659429"
        fill={getIconColor(color, 0, '#3B5792')}
      />
    </Svg>
  );
};

IconlianshuLb1X.defaultProps = {
  size: 18,
};

IconlianshuLb1X = React.memo ? React.memo(IconlianshuLb1X) : IconlianshuLb1X;

export default IconlianshuLb1X;
