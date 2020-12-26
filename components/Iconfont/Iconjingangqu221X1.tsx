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

let Iconjingangqu221X1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.2 819.2a102.4 102.4 0 0 1-102.4 102.4H307.2a102.4 102.4 0 0 1-102.4-102.4V409.6a102.4 102.4 0 0 1 102.4-102.4V204.8a102.4 102.4 0 0 1 102.4-102.4h204.8a102.4 102.4 0 0 1 102.4 102.4v102.4a102.4 102.4 0 0 1 102.4 102.4z m-102.4-460.8H307.2a51.2 51.2 0 0 0-51.2 51.2v409.6a51.2 51.2 0 0 0 51.2 51.2h409.6a51.2 51.2 0 0 0 51.2-51.2v-51.2256L512 768a51.2 51.2 0 0 1-51.072-47.36L460.8 716.8v-230.144c0-28.288 22.912-51.2 51.328-51.2l255.872 2.5344V409.6a51.2 51.2 0 0 0-47.36-51.072L716.8 358.4z m-204.8 128.256V716.8l256-0.0256v-227.584l-256-2.5344zM614.4 153.6h-204.8a51.2 51.2 0 0 0-51.2 51.2v102.4h307.2V204.8a51.2 51.2 0 0 0-47.36-51.072L614.4 153.6z m-12.8 38.3488a38.4 38.4 0 1 1 0 76.8 38.4 38.4 0 0 1 0-76.8z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconjingangqu221X1.defaultProps = {
  size: 18,
};

Iconjingangqu221X1 = React.memo ? React.memo(Iconjingangqu221X1) : Iconjingangqu221X1;

export default Iconjingangqu221X1;
