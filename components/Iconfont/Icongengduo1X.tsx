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

let Icongengduo1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.781538 0 512 229.218462 512 512s-229.218462 512-512 512S0 794.781538 0 512 229.218462 0 512 0z m0 59.076923C261.868308 59.076923 59.076923 261.868308 59.076923 512S261.868308 964.923077 512 964.923077 964.923077 762.131692 964.923077 512 762.131692 59.076923 512 59.076923z m146.195692 264.940308l41.787077 41.747692L553.747692 512l146.235077 146.195692-41.747692 41.787077L512 553.747692l-146.195692 146.235077-41.787077-41.747692L470.252308 512 324.017231 365.804308l41.747692-41.787077L512 470.252308l146.195692-146.235077z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Icongengduo1X.defaultProps = {
  size: 18,
};

Icongengduo1X = React.memo ? React.memo(Icongengduo1X) : Icongengduo1X;

export default Icongengduo1X;
