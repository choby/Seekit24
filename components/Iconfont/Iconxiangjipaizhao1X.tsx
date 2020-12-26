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

let Iconxiangjipaizhao1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M716.8 245.76a102.4 102.4 0 0 1 102.2976 97.95584L819.2 348.16v327.68a102.4 102.4 0 0 1-97.95584 102.2976L716.8 778.24H307.2a102.4 102.4 0 0 1-102.2976-97.95584L204.8 675.84V348.16a102.4 102.4 0 0 1 97.95584-102.2976L307.2 245.76h409.6z m0 40.96H307.2a61.44 61.44 0 0 0-61.3376 57.83552L245.76 348.16v327.68a61.44 61.44 0 0 0 57.83552 61.3376L307.2 737.28h409.6a61.44 61.44 0 0 0 61.3376-57.83552L778.24 675.84V348.16a61.44 61.44 0 0 0-57.83552-61.3376L716.8 286.72z m-204.8 81.92a143.36 143.36 0 1 1 0 286.72 143.36 143.36 0 0 1 0-286.72z m0 40.96a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"
        fill={getIconColor(color, 0, '#3B4657')}
      />
    </Svg>
  );
};

Iconxiangjipaizhao1X.defaultProps = {
  size: 18,
};

Iconxiangjipaizhao1X = React.memo ? React.memo(Iconxiangjipaizhao1X) : Iconxiangjipaizhao1X;

export default Iconxiangjipaizhao1X;
