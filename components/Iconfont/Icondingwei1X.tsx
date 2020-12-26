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

let Icondingwei1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 32A416 416 0 0 1 928 448c0 149.76-125.696 321.6-374.08 519.68L512 1000.576l-41.92-32.896C221.696 769.6 96 597.76 96 448A416 416 0 0 1 512 32z m0 64A352 352 0 0 0 160 448c0 117.312 102.08 263.744 308.736 436.032l20.352 16.768 22.912 18.432 22.912-18.432c206.528-168.32 315.072-312.576 327.808-429.76l0.96-11.584L864 448A352 352 0 0 0 512 96z m0 192a160 160 0 1 1 0 320 160 160 0 0 1 0-320z m0 64a96 96 0 1 0 0 192 96 96 0 0 0 0-192z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Icondingwei1X.defaultProps = {
  size: 18,
};

Icondingwei1X = React.memo ? React.memo(Icondingwei1X) : Icondingwei1X;

export default Icondingwei1X;
