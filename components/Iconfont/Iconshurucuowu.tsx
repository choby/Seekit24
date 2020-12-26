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

let Iconshurucuowu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M513.8432 473.9584l161.0752-161.0752a25.6 25.6 0 0 1 36.1984 36.1984L548.1984 512l162.9184 162.9184a25.6 25.6 0 0 1-36.1984 36.1984l-161.0752-161.0752-161.1264 161.0752a25.6 25.6 0 0 1-36.1984-36.1984L479.4368 512 316.5184 349.0816a25.6 25.6 0 1 1 36.1984-36.1984l161.1264 161.0752zM512 972.8a460.8 460.8 0 1 0 0-921.6 460.8 460.8 0 0 0 0 921.6z m0 51.2C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconshurucuowu.defaultProps = {
  size: 18,
};

Iconshurucuowu = React.memo ? React.memo(Iconshurucuowu) : Iconshurucuowu;

export default Iconshurucuowu;
