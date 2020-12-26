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

let IconyonghuSousuo1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M716.8 537.6a179.2 179.2 0 0 1 178.944 169.3696L896 716.8v102.4a76.8 76.8 0 0 1-69.4272 76.4416L819.2 896H204.8a76.8 76.8 0 0 1-76.4416-69.4272L128 819.2v-102.4a179.2 179.2 0 0 1 169.3696-178.944L307.2 537.6h409.6z m0 51.2H307.2a128 128 0 0 0-127.744 119.6032L179.2 716.8v102.4a25.6 25.6 0 0 0 20.992 25.1904L204.8 844.8h614.4a25.6 25.6 0 0 0 25.1904-20.992L844.8 819.2v-102.4a128 128 0 0 0-119.6032-127.744L716.8 588.8z m-204.8-460.8a179.2 179.2 0 1 1 0 358.4 179.2 179.2 0 0 1 0-358.4z m0 51.2a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

IconyonghuSousuo1X.defaultProps = {
  size: 18,
};

IconyonghuSousuo1X = React.memo ? React.memo(IconyonghuSousuo1X) : IconyonghuSousuo1X;

export default IconyonghuSousuo1X;
