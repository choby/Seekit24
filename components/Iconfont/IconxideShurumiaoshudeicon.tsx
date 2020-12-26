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

let IconxideShurumiaoshudeicon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M765.915429 294.363429l-35.254858-42.057143a73.142857 73.142857 0 0 0-103.021714-8.996572l-304.603428 255.597715a73.142857 73.142857 0 0 0-24.612572 41.289142l-22.089143 107.373715a18.285714 18.285714 0 0 0 17.92 21.942857H405.942857a73.142857 73.142857 0 0 0 47.030857-17.078857l303.908572-255.012572a73.142857 73.142857 0 0 0 8.996571-103.058285z m-63.268572-18.505143l35.254857 42.020571a36.571429 36.571429 0 0 1-4.498285 51.529143l-303.908572 255.012571-4.132571 2.998858a36.571429 36.571429 0 0 1-19.382857 5.558857l-89.307429-0.073143 17.554286-85.357714a36.571429 36.571429 0 0 1 12.324571-20.626286l304.566857-255.597714a36.571429 36.571429 0 0 1 51.565715 4.534857zM840.923429 760.027429a18.285714 18.285714 0 0 1 3.730285 36.242285l-3.291428 0.365715-676.571429 7.936a18.285714 18.285714 0 0 1-3.730286-36.205715l3.291429-0.365714 676.571429-7.972571z"
        fill={getIconColor(color, 0, '#B6BECA')}
      />
    </Svg>
  );
};

IconxideShurumiaoshudeicon.defaultProps = {
  size: 18,
};

IconxideShurumiaoshudeicon = React.memo ? React.memo(IconxideShurumiaoshudeicon) : IconxideShurumiaoshudeicon;

export default IconxideShurumiaoshudeicon;
