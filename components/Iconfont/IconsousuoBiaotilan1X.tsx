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

let IconsousuoBiaotilan1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M452.461714 66.56A394.142476 394.142476 0 0 1 755.809524 712.411429l186.075428 186.026666a36.571429 36.571429 0 0 1-47.981714 55.003429l-3.754667-3.267048-186.026666-186.075428A394.142476 394.142476 0 1 1 452.461714 66.56z m320.999619 394.191238a320.999619 320.999619 0 1 0-641.999238 0 320.999619 320.999619 0 0 0 641.999238 0z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

IconsousuoBiaotilan1X.defaultProps = {
  size: 18,
};

IconsousuoBiaotilan1X = React.memo ? React.memo(IconsousuoBiaotilan1X) : IconsousuoBiaotilan1X;

export default IconsousuoBiaotilan1X;
