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

let IcondingweiCu1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 14.222222c243.313778 0 440.888889 193.536 440.888889 432.753778 0 156.899556-132.892444 334.336-394.581333 538.282667L512 1020.814222l-46.307556-35.555555c-261.688889-203.946667-394.581333-381.383111-394.581333-538.282667C71.111111 207.758222 268.686222 14.222222 512 14.222222z m0 85.333334c-196.551111 0-355.555556 155.761778-355.555556 347.420444 0 116.280889 106.496 264.647111 322.787556 440.035556l19.342222 15.587555 13.425778 10.467556 13.368889-10.467556c216.234667-171.804444 328.874667-318.236444 341.048889-434.744889l0.853333-10.808889 0.284445-10.069333c0-191.715556-159.004444-347.420444-355.555556-347.420444z m0 199.111111a156.444444 156.444444 0 1 1 0 312.888889 156.444444 156.444444 0 0 1 0-312.888889z m0 85.333333a71.111111 71.111111 0 1 0 0 142.222222 71.111111 71.111111 0 0 0 0-142.222222z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

IcondingweiCu1X.defaultProps = {
  size: 18,
};

IcondingweiCu1X = React.memo ? React.memo(IcondingweiCu1X) : IcondingweiCu1X;

export default IcondingweiCu1X;
