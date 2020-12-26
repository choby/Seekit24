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

let Iconshanchuliaotian1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M844.8 204.8a76.8 76.8 0 0 1 76.629333 71.543467L921.6 281.6v460.8a76.8 76.8 0 0 1-71.543467 76.629333L844.8 819.2H296.072533a76.8 76.8 0 0 1-59.972266-28.808533l-3.4816-4.7104-157.252267-230.4a76.8 76.8 0 0 1-3.345067-81.237334l3.345067-5.3248 157.252267-230.4a76.8 76.8 0 0 1 57.617066-33.314133L296.0384 204.8H844.8z m0 51.2H296.072533a25.6 25.6 0 0 0-18.944 8.362667l-2.218666 2.798933-157.252267 230.4a25.6 25.6 0 0 0-1.9456 25.4976l1.9456 3.3792 157.252267 230.4a25.6 25.6 0 0 0 17.578666 10.922667l3.584 0.238933H844.8a25.6 25.6 0 0 0 25.361067-22.1184l0.238933-3.4816V281.6a25.6 25.6 0 0 0-22.1184-25.361067L844.8 256z m-373.077333 125.405867l2.8672 2.525866 88.576 91.306667 88.644266-91.306667a25.6 25.6 0 0 1 39.185067 32.768l-2.423467 2.901334L598.869333 512l89.7024 92.398933a25.6 25.6 0 0 1-33.928533 38.1952l-2.833067-2.525866-88.610133-91.306667-88.610133 91.306667a25.6 25.6 0 0 1-33.314134 2.9696l-2.901333-2.423467a25.6 25.6 0 0 1-2.9696-33.314133l2.423467-2.901334L527.496533 512l-89.668266-92.398933a25.6 25.6 0 0 1 33.928533-38.1952z"
        fill={getIconColor(color, 0, '#4D5B72')}
      />
    </Svg>
  );
};

Iconshanchuliaotian1X.defaultProps = {
  size: 18,
};

Iconshanchuliaotian1X = React.memo ? React.memo(Iconshanchuliaotian1X) : Iconshanchuliaotian1X;

export default Iconshanchuliaotian1X;
