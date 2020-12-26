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

let Iconyuyintanhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 59.076923a98.461538 98.461538 0 0 1 98.264615 92.002462L610.461538 157.538462v393.846153a98.461538 98.461538 0 0 1-196.726153 6.459077L413.538462 551.384615V157.538462A98.461538 98.461538 0 0 1 512 59.076923zM512 768a98.461538 98.461538 0 0 1 98.264615 92.002462l0.196923 8.388923a98.461538 98.461538 0 0 1-196.726153 6.459077L413.538462 866.461538a98.461538 98.461538 0 0 1 98.461538-98.461538z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconyuyintanhao.defaultProps = {
  size: 18,
};

Iconyuyintanhao = React.memo ? React.memo(Iconyuyintanhao) : Iconyuyintanhao;

export default Iconyuyintanhao;
