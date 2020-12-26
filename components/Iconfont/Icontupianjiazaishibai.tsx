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

let Icontupianjiazaishibai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M523.0592 358.422756l-18.557156 61.019022 35.589689 82.761955-39.503644 71.122489-22.641778-20.900978 6.542222-40.539022-32.142222-80.145066 13.312-73.9328-139.582578 0.6144c-11.036444 0-19.979378 8.954311-19.979377 19.990755V698.140444c0 11.036444 8.942933 19.979378 19.968 19.979378h359.7312c11.036444 0 19.979378-8.942933 19.979377-19.968V378.413511c0-11.036444-8.942933-19.990756-19.968-19.990755H523.0592z m-17.419378 299.758933l31.118222 57.1392-59.323733-57.1392h-111.388444v-99.919645l59.960889-59.960888 99.919644 99.931022 59.949511-59.960889 59.949511 59.960889v59.949511H505.639822z m100.215467-159.869156a39.958756 39.958756 0 1 1 0-79.928889 39.958756 39.958756 0 0 1 0 79.928889z"
        fill={getIconColor(color, 0, '#E4E8EF')}
      />
    </Svg>
  );
};

Icontupianjiazaishibai.defaultProps = {
  size: 18,
};

Icontupianjiazaishibai = React.memo ? React.memo(Icontupianjiazaishibai) : Icontupianjiazaishibai;

export default Icontupianjiazaishibai;
