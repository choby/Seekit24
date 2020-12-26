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

let Icontupianqiehuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M166.4 852.2752h666.7264c34.9696 0 63.4368-28.5696 63.4368-63.9488V241.664c0-35.328-28.4672-63.9488-63.4368-63.9488H166.4c-34.9696 0-63.4368 28.6208-63.4368 63.9488v546.6624c0 35.328 28.4672 63.9488 63.4368 63.9488zM26.1632 241.664A140.4928 140.4928 0 0 1 166.4 100.9152h666.7264A140.4928 140.4928 0 0 1 973.312 241.664v546.6624a140.4928 140.4928 0 0 1-140.288 140.7488H166.4a140.4928 140.4928 0 0 1-140.2368-140.7488V241.664z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M332.8 268.8a115.2 115.2 0 1 1 0 230.4 115.2 115.2 0 0 1 0-230.4z m0 76.8a38.4 38.4 0 1 0 0 76.8 38.4 38.4 0 0 0 0-76.8z m-59.136 402.6368a38.4 38.4 0 0 1-58.4192-49.8688l110.848-129.8944a38.4 38.4 0 0 1 49.5616-7.68l176.128 110.08 169.1648-256.256a38.4 38.4 0 1 1 64.1024 42.3424l-189.7984 287.488a38.4 38.4 0 0 1-52.3776 11.4176L363.008 643.584l-89.344 104.704z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Icontupianqiehuan.defaultProps = {
  size: 18,
};

Icontupianqiehuan = React.memo ? React.memo(Icontupianqiehuan) : Icontupianqiehuan;

export default Icontupianqiehuan;
