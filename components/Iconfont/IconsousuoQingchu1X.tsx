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

let IconsousuoQingchu1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870.4 230.4a25.6 25.6 0 0 1 4.608 50.7904L870.4 281.6h-76.8V819.2a128 128 0 0 1-119.6032 127.744L665.6 947.2H358.4a128 128 0 0 1-127.744-119.6032L230.4 819.2V281.6H153.6a25.6 25.6 0 0 1-4.608-50.7904L153.6 230.4h716.8z m-128 51.2h-460.8V819.2a76.8 76.8 0 0 0 62.208 75.4176l7.168 1.024L358.4 896h307.2a76.8 76.8 0 0 0 76.4416-69.4272L742.4 819.2V281.6z m-128 153.6a25.6 25.6 0 0 1 25.1904 20.992L640 460.8v256a25.6 25.6 0 0 1-50.7904 4.608L588.8 716.8V460.8a25.6 25.6 0 0 1 25.6-25.6z m-204.8 0a25.6 25.6 0 0 1 25.1904 20.992L435.2 460.8v256a25.6 25.6 0 0 1-50.7904 4.608L384 716.8V460.8a25.6 25.6 0 0 1 25.6-25.6z m204.8-327.7312l4.608 0.4096a25.6 25.6 0 0 1 0 50.3808l-4.608 0.4096H409.6l-4.608-0.4096a25.6 25.6 0 0 1 0-50.3808L409.6 107.4688h204.8z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

IconsousuoQingchu1X.defaultProps = {
  size: 18,
};

IconsousuoQingchu1X = React.memo ? React.memo(IconsousuoQingchu1X) : IconsousuoQingchu1X;

export default IconsousuoQingchu1X;
