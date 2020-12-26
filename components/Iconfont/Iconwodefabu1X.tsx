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

let Iconwodefabu1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1075 1024" width={size} height={size} {...rest}>
      <Path
        d="M204.8 952.32a81.92 81.92 0 0 1-81.5616-74.4448L122.88 870.4V153.6a81.92 81.92 0 0 1 74.4448-81.5616L204.8 71.68h614.4a81.92 81.92 0 0 1 81.5616 74.4448L901.12 153.6v630.272l-68.608 69.4272-100.7616 99.0208H204.8z m0-61.44h501.9136l82.432-81.1008 50.5856-51.1488L839.68 153.6a20.48 20.48 0 0 0-12.4928-18.8928l-3.84-1.1776L819.2 133.12H204.8a20.48 20.48 0 0 0-20.0704 16.384L184.32 153.6v716.8a20.48 20.48 0 0 0 16.384 20.0704L204.8 890.88z m153.6-476.16a30.72 30.72 0 0 1-4.9664-61.0304L358.4 353.28h307.2a30.72 30.72 0 0 1 4.9664 61.0304L665.6 414.72H358.4z m0 256a30.72 30.72 0 0 1-4.9664-61.0304L358.4 609.28h307.2a30.72 30.72 0 0 1 4.9664 61.0304L665.6 670.72H358.4z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconwodefabu1X.defaultProps = {
  size: 18,
};

Iconwodefabu1X = React.memo ? React.memo(Iconwodefabu1X) : Iconwodefabu1X;

export default Iconwodefabu1X;
