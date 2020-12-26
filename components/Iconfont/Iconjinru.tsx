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

let Iconjinru: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M140.8 318.9248a38.4 38.4 0 1 1-76.8 0V204.8A140.8 140.8 0 0 1 204.8 64h114.1248a38.4 38.4 0 1 1 0 76.8H204.8c-35.328 0-64 28.672-64 64v114.1248zM705.0752 140.8a38.4 38.4 0 1 1 0-76.8H819.2A140.8 140.8 0 0 1 960 204.8v114.1248a38.4 38.4 0 1 1-76.8 0V204.8c0-35.328-28.672-64-64-64h-114.1248z m178.1248 564.2752a38.4 38.4 0 1 1 76.8 0V819.2A140.8 140.8 0 0 1 819.2 960h-114.1248a38.4 38.4 0 1 1 0-76.8H819.2c35.328 0 64-28.672 64-64v-114.1248zM318.9248 883.2a38.4 38.4 0 1 1 0 76.8H204.8A140.8 140.8 0 0 1 64 819.2v-114.1248a38.4 38.4 0 1 1 76.8 0V819.2c0 35.328 28.672 64 64 64h114.1248zM102.4 550.4a38.4 38.4 0 0 1 0-76.8h819.2a38.4 38.4 0 1 1 0 76.8H102.4z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconjinru.defaultProps = {
  size: 18,
};

Iconjinru = React.memo ? React.memo(Iconjinru) : Iconjinru;

export default Iconjinru;
