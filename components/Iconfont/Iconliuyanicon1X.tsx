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

let Iconliuyanicon1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M540.8256 13.6704c259.7376 0 470.3744 210.0736 470.3744 469.248 0 254.6688-203.264 461.9264-456.7552 469.0944l-13.6704 0.2048-52.4288-0.0512-27.2384 7.168-36.864 9.2672-44.9536 10.9568-133.3248 31.488a38.4 38.4 0 0 1-46.6944-31.8976 3015.2704 3015.2704 0 0 0-16.4864-102.8096l-3.328-17.9712-4.096-20.5824-13.1584-11.776A467.5072 467.5072 0 0 1 13.824 515.1232l-0.8192-16.384-0.256-15.872C12.8 228.352 216.064 21.0944 469.5552 13.8752l13.6704-0.2048h57.5488z m0 76.8H483.1744c-217.3952 0-393.5744 175.7184-393.5744 392.448a391.168 391.168 0 0 0 144.9984 304.2816 38.4 38.4 0 0 1 13.312 21.9136c5.8368 27.4944 11.5712 58.5216 17.2544 93.0816l3.84 24.576 130.3552-31.1296 51.0464-12.8512 22.6304-5.9904 10.1376-1.3824h57.6512c217.3952 0 393.5744-175.7696 393.5744-392.4992 0-212.5312-169.472-385.6896-381.0816-392.2432l-12.544-0.2048z m137.984 412.5696a38.4 38.4 0 0 1 14.1312 52.4288 205.5168 205.5168 0 0 1-356.1984 0 38.4 38.4 0 0 1 66.56-38.2976 128.7168 128.7168 0 0 0 223.0784 0 38.4 38.4 0 0 1 52.4288-14.1312z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconliuyanicon1X.defaultProps = {
  size: 18,
};

Iconliuyanicon1X = React.memo ? React.memo(Iconliuyanicon1X) : Iconliuyanicon1X;

export default Iconliuyanicon1X;
