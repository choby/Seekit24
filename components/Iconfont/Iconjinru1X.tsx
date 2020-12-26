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

let Iconjinru1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M540.8256 64c258.816 0 470.3744 188.0576 470.3744 422.4 0 230.0928-203.9296 415.5392-456.3456 422.1952l-14.0288 0.2048-53.0432-0.0512-27.648 6.5024-81.8176 18.0224-133.2224 28.0576a38.4 38.4 0 0 1-45.7216-31.4368l-6.5536-38.8096a2274.56 2274.56 0 0 0-6.6048-35.7376l-6.6048-32.768-3.5328-16.1792C81.4592 733.0816 22.5792 629.1968 13.9264 515.584l-0.8704-14.848L12.8 486.4c0-230.0928 203.9296-415.5392 456.3456-422.1952l14.0288-0.2048h57.6512z m0 76.8H483.1744C264.8576 140.8 89.6 296.6016 89.6 486.4c0 104.192 52.9408 201.1648 143.3088 266.6496a38.4 38.4 0 0 1 14.848 22.2208c5.5808 23.7056 11.1104 50.176 16.5888 79.616l4.1472 23.1424 110.4896-23.4496 63.5392-14.08 31.5392-7.424 9.1136-1.0752h57.6512c218.3168 0 393.5744-155.8016 393.5744-345.6 0-185.9072-168.192-339.2512-380.3136-345.3952l-13.312-0.2048z m137.984 337.92a38.4 38.4 0 0 1 14.1312 52.4288 205.5168 205.5168 0 0 1-356.1984 0 38.4 38.4 0 0 1 66.56-38.2976 128.7168 128.7168 0 0 0 223.0784 0 38.4 38.4 0 0 1 52.4288-14.1312z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconjinru1X.defaultProps = {
  size: 18,
};

Iconjinru1X = React.memo ? React.memo(Iconjinru1X) : Iconjinru1X;

export default Iconjinru1X;
