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

let Iconzhaopian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M716.8 245.76a102.4 102.4 0 0 1 102.2976 97.95584L819.2 348.16v327.68a102.4 102.4 0 0 1-97.95584 102.2976L716.8 778.24H307.2a102.4 102.4 0 0 1-102.2976-97.95584L204.8 675.84V348.16a102.4 102.4 0 0 1 97.95584-102.2976L307.2 245.76h409.6z m0 40.96H307.2a61.44 61.44 0 0 0-61.3376 57.83552L245.76 348.16v327.68a61.44 61.44 0 0 0 57.83552 61.3376L307.2 737.28h409.6a61.44 61.44 0 0 0 61.3376-57.83552L778.24 675.84V348.16a61.44 61.44 0 0 0-57.83552-61.3376L716.8 286.72z m-203.44832 239.28832l2.72384 2.92864 68.01408 78.17216a20.48 20.48 0 0 0 24.14592 5.09952l2.17088-1.18784 75.03872-47.0016a20.48 20.48 0 0 1 23.69536 33.32096l-1.9456 1.37216-75.03872 47.02208a61.44 61.44 0 0 1-76.30848-8.86784l-2.6624-2.8672-68.01408-78.17216a20.48 20.48 0 0 0-26.58304-3.74784l-2.048 1.51552-115.67104 97.25952a20.48 20.48 0 0 1-28.24192-29.57312l1.86368-1.78176 115.712-97.28a61.44 61.44 0 0 1 83.1488 3.7888zM645.12 368.64a71.68 71.68 0 1 1 0 143.36 71.68 71.68 0 0 1 0-143.36z m0 40.96a30.72 30.72 0 1 0 0 61.44 30.72 30.72 0 0 0 0-61.44z"
        fill={getIconColor(color, 0, '#3B4657')}
      />
    </Svg>
  );
};

Iconzhaopian.defaultProps = {
  size: 18,
};

Iconzhaopian = React.memo ? React.memo(Iconzhaopian) : Iconzhaopian;

export default Iconzhaopian;
