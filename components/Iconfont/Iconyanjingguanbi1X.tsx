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

let Iconyanjingguanbi1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.7008 159.0272l54.272 54.272L213.2992 864.9728l-54.272-54.272L810.7008 159.0272z m64.1024 179.5072l16.0256 17.408 21.8112 24.6784c18.7392 21.5552 41.4208 48.4352 68.1472 80.7424l39.8336 48.3328-15.9232 23.7056c-144.0768 214.528-308.5824 324.1984-492.6976 324.1984a447.1296 447.1296 0 0 1-114.8928-14.8992l-18.688-5.376 22.784-73.3696c36.096 11.264 72.96 16.8448 110.7968 16.8448 145.8176 0 280.576-83.968 404.992-255.8464l7.68-10.9056-40.3968-48.4352-18.5344-21.76a1828.7104 1828.7104 0 0 0-36.864-41.984l-9.728-10.4448 55.6544-52.8896zM704 512a192 192 0 0 1-181.76 191.744l-10.24 0.256v-76.8a115.2 115.2 0 0 0 114.944-107.3152L627.2 512h76.8zM512 166.4c26.368 0 52.3776 2.2528 78.0288 6.8096l19.2 3.7888-16.64 75.008A370.688 370.688 0 0 0 512 243.2c-145.8176 0-280.576 83.968-404.992 255.8464l-8.6528 12.1344 4.4032 5.9392c33.1264 44.2368 60.2112 77.9776 80.9984 100.9664l6.0416 6.5536-56.0128 52.5312-13.6192-15.0016a1672.3456 1672.3456 0 0 1-78.5408-98.6112l-37.376-50.5856 15.0528-22.3744C163.3792 276.0704 327.8848 166.4 512 166.4z m0 153.6v76.8a115.2 115.2 0 0 0-114.944 107.3152L396.8 512h-76.8A192 192 0 0 1 512 320z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconyanjingguanbi1X.defaultProps = {
  size: 18,
};

Iconyanjingguanbi1X = React.memo ? React.memo(Iconyanjingguanbi1X) : Iconyanjingguanbi1X;

export default Iconyanjingguanbi1X;
