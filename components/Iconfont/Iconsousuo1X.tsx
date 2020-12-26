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

let Iconsousuo1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M698.660571 226.06019a316.952381 316.952381 0 0 1 16.579048 430.372572l155.843048 155.794286a24.380952 24.380952 0 0 1-31.110096 37.302857l-3.413333-2.828191-155.794286-155.794285a316.952381 316.952381 0 1 1 17.895619-464.847239z m-34.474666 34.474667a268.190476 268.190476 0 1 0-379.270095 379.270095 268.190476 268.190476 0 0 0 379.270095-379.270095z"
        fill={getIconColor(color, 0, '#6B788F')}
      />
    </Svg>
  );
};

Iconsousuo1X.defaultProps = {
  size: 18,
};

Iconsousuo1X = React.memo ? React.memo(Iconsousuo1X) : Iconsousuo1X;

export default Iconsousuo1X;
