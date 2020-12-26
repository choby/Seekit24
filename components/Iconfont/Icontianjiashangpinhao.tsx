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

let Icontianjiashangpinhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M778.473544 453.111018a53.894737 53.894737 0 0 1 3.179789 107.699649l-3.179789 0.089824H251.508772a53.894737 53.894737 0 0 1-3.161825-107.699649l3.161825-0.089824h526.964772z"
        fill={getIconColor(color, 0, '#E4E8EF')}
      />
      <Path
        d="M574.517895 770.497123a53.894737 53.894737 0 0 1-107.717614 3.161824l-0.089825-3.161824V243.532351a53.894737 53.894737 0 0 1 107.699649-3.17979l0.089825 3.17979v526.964772z"
        fill={getIconColor(color, 1, '#E4E8EF')}
      />
    </Svg>
  );
};

Icontianjiashangpinhao.defaultProps = {
  size: 18,
};

Icontianjiashangpinhao = React.memo ? React.memo(Icontianjiashangpinhao) : Icontianjiashangpinhao;

export default Icontianjiashangpinhao;
