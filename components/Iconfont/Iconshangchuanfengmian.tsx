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

let Iconshangchuanfengmian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1075 1024" width={size} height={size} {...rest}>
      <Path
        d="M450.3552 230.4l87.9616 0.9728h250.2144c29.0816 0 52.8896 22.272 55.9616 50.688l0.3072 6.144v499.8144c0 29.184-21.9136 53.3504-50.176 56.4736l-6.144 0.3072H235.52a56.5248 56.5248 0 0 1-56.0128-50.688l-0.3072-6.144V288.256c0-29.184 21.8624-53.4016 50.0736-56.5248l6.144-0.3072L450.3552 230.4z m-0.4608 51.1488l-214.3744 1.024a5.12 5.12 0 0 0-4.7104 3.3792L230.4 288.256v499.7632a5.632 5.632 0 0 0 3.1744 5.2224l1.9456 0.4096h552.96a5.12 5.12 0 0 0 4.7104-3.3792l0.4096-2.2528V288.256a5.632 5.632 0 0 0-3.1744-5.2736L788.48 282.624H538.112l-88.1664-1.024z m211.2 62.5664a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6z m0 51.2a25.6 25.6 0 1 0 0 51.2 25.6 25.6 0 0 0 0-51.2z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
      <Path
        d="M384.3584 472.1664a25.6 25.6 0 0 1 37.888-1.6384l3.1744 3.8912 136.6528 207.104 106.6496-69.6832a25.6 25.6 0 0 1 28.4672 0.3072l3.4304 2.816 108.032 105.6256a25.6 25.6 0 0 1-32.256 39.5264l-3.584-2.9184-93.3376-91.2896-110.6944 72.448a25.6 25.6 0 0 1-32.512-3.6864l-2.8672-3.584-131.7376-199.68-154.4704 185.7536a25.6 25.6 0 0 1-32.256 5.9392l-3.7888-2.6624a25.6 25.6 0 0 1-5.9392-32.256l2.6112-3.7888 176.5376-212.224z"
        fill={getIconColor(color, 1, '#FF515A')}
      />
    </Svg>
  );
};

Iconshangchuanfengmian.defaultProps = {
  size: 18,
};

Iconshangchuanfengmian = React.memo ? React.memo(Iconshangchuanfengmian) : Iconshangchuanfengmian;

export default Iconshangchuanfengmian;
