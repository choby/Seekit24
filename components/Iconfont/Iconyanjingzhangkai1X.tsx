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

let Iconyanjingzhangkai1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 166.4c178.8416 0 339.2 103.5264 480.256 306.0736l12.4416 18.1248 14.336 21.4016-14.336 21.4016c-144.0768 214.528-308.5824 324.1984-492.6976 324.1984-178.8416 0-339.2-103.5264-480.256-306.0736l-12.4416-18.1248L4.9664 512l14.336-21.4016C163.3792 276.0704 327.8848 166.4 512 166.4z m0 76.8c-141.1072 0-271.872 78.592-392.9088 239.4624l-12.0832 16.384-9.216 12.9536 9.216 12.9536c116.3776 160.768 241.8176 244.6336 376.8832 254.8224l14.0288 0.768 14.08 0.256c141.1072 0 271.872-78.592 392.9088-239.4624l12.0832-16.384 9.1648-12.9536-9.216-12.9536c-116.3264-160.768-241.7664-244.6336-376.832-254.8224l-14.0288-0.768L512 243.2z m0 76.8a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m0 76.8a115.2 115.2 0 1 0 0 230.4 115.2 115.2 0 0 0 0-230.4z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconyanjingzhangkai1X.defaultProps = {
  size: 18,
};

Iconyanjingzhangkai1X = React.memo ? React.memo(Iconyanjingzhangkai1X) : Iconyanjingzhangkai1X;

export default Iconyanjingzhangkai1X;
