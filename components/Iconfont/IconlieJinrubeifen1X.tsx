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

let IconlieJinrubeifen1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M846.262857 485.741714a36.571429 36.571429 0 0 1 4.388572 47.396572l-4.388572 5.12L426.422857 945.737143a36.571429 36.571429 0 0 1-55.222857-47.469714l4.242286-4.973715 392.923428-381.44-392.923428-381.293714a36.571429 36.571429 0 0 1-4.900572-46.592l4.169143-5.12a36.571429 36.571429 0 0 1 46.592-4.900571l5.12 4.169142L846.262857 485.668571z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

IconlieJinrubeifen1X.defaultProps = {
  size: 18,
};

IconlieJinrubeifen1X = React.memo ? React.memo(IconlieJinrubeifen1X) : IconlieJinrubeifen1X;

export default IconlieJinrubeifen1X;
