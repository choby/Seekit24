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

let Iconjinrubeifen3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M804.571429 603.428571a54.857143 54.857143 0 0 1 45.933714 84.845715l-4.608 6.070857-182.637714 209.115428a54.857143 54.857143 0 0 1-87.552-65.682285l4.900571-6.509715L683.885714 713.142857H219.428571a54.857143 54.857143 0 0 1-54.345142-47.396571L164.571429 658.285714a54.857143 54.857143 0 0 1 47.396571-54.345143L219.428571 603.428571h585.142858zM438.125714 178.102857a54.857143 54.857143 0 0 1 10.166857 70.948572l-4.900571 6.436571L340.114286 373.613714H804.571429a54.857143 54.857143 0 0 1 54.345142 47.469715l0.512 7.460571a54.857143 54.857143 0 0 1-47.396571 54.345143L804.571429 483.401143H219.428571a54.857143 54.857143 0 0 1-45.933714-84.845714l4.608-6.144 182.637714-209.042286a54.857143 54.857143 0 0 1 77.385143-5.266286z"
        fill={getIconColor(color, 0, '#4D5B72')}
      />
    </Svg>
  );
};

Iconjinrubeifen3.defaultProps = {
  size: 18,
};

Iconjinrubeifen3 = React.memo ? React.memo(Iconjinrubeifen3) : Iconjinrubeifen3;

export default Iconjinrubeifen3;
