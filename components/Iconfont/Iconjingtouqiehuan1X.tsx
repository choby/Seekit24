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

let Iconjingtouqiehuan1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.2 908.8a38.4 38.4 0 0 1-5.2224-76.4416L819.2 832a64 64 0 0 0 63.6928-57.4464L883.2 768V256a64 64 0 0 0-57.4464-63.6928L819.2 192h-301.568c-32.8704 0-49.7664-38.0928-30.0032-62.4128l3.6864-3.8912 100.864-95.3344a38.4 38.4 0 0 1 56.576 51.6096l-3.84 4.1984-30.6176 29.0304H819.2a140.8 140.8 0 0 1 140.544 132.1984L960 256v512A140.8 140.8 0 0 1 819.2 908.8z m-429.2096 90.2656a38.4 38.4 0 0 1-4.608-49.92l3.6864-4.352 32.768-33.8432L204.8 908.8a140.8 140.8 0 0 1-140.544-132.1984L64 768V256A140.8 140.8 0 0 1 204.8 115.2a38.4 38.4 0 0 1 5.2224 76.4416L204.8 192a64 64 0 0 0-63.6928 57.4464L140.8 256v512c0 33.1264 25.1904 60.416 57.7536 63.6928l6.656 0.3072 306.688 2.9696a38.4 38.4 0 0 1 30.7712 60.928l-3.584 4.1984-94.7712 98.048a38.4 38.4 0 0 1-54.3232 0.9216zM512 704a192 192 0 1 1 0-384 192 192 0 0 1 0 384z m0-76.8a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconjingtouqiehuan1X.defaultProps = {
  size: 18,
};

Iconjingtouqiehuan1X = React.memo ? React.memo(Iconjingtouqiehuan1X) : Iconjingtouqiehuan1X;

export default Iconjingtouqiehuan1X;
