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

let Iconxuanxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M526.2336 956.672l35.2256-14.4384 18.8416-7.9872 40.2432-17.5616a502.784 502.784 0 0 0 298.6496-441.6l7.936-222.0544a89.6 89.6 0 0 0-95.8976-92.5696c-109.056 7.7312-206.9504-21.76-295.3216-89.1904a38.4 38.4 0 0 0-46.6944 0.1024c-83.1488 63.8976-175.7184 93.7472-279.04 89.9584l-17.408-0.9216a89.6 89.6 0 0 0-95.8976 92.5696l7.936 222.1056a502.784 502.784 0 0 0 298.6496 441.6l40.2432 17.5616 36.864 15.4624c5.888 2.4064 11.6224 4.7616 17.2032 6.9632a38.4 38.4 0 0 0 28.4672 0z m5.632-85.2992L512 879.616l-19.8656-8.192-37.5296-16.128a3593.984 3593.984 0 0 1-19.968-8.8064 425.984 425.984 0 0 1-253.0816-374.1696L173.568 250.2656a12.8 12.8 0 0 1 12.288-13.312l19.7632 1.0752c109.7216 4.352 210.2784-23.9104 300.6464-84.3776l6.4-4.4544 6.4512 4.4544c95.5904 63.6928 201.8816 91.648 317.5424 83.4048a12.8 12.8 0 0 1 13.1072 8.96l0.5632 3.584-7.936 222.72a425.984 425.984 0 0 1-253.0304 374.1696l-39.2192 17.1008c-6.2464 2.7136-12.3904 5.2736-18.3296 7.7824z"
        fill={getIconColor(color, 0, '#131A25')}
      />
      <Path
        d="M512 551.8848a38.4 38.4 0 0 1-38.0416-33.1776l-0.3584-5.2224v-153.6a38.4 38.4 0 0 1 76.4416-5.2224l0.3584 5.2224v153.6a38.4 38.4 0 0 1-38.4 38.4zM512 718.592a51.2 51.2 0 0 1-50.8416-45.2608L460.8 667.392v-1.536a51.2 51.2 0 0 1 102.0416-5.9904l0.3584 7.5264a51.2 51.2 0 0 1-51.2 51.2z"
        fill={getIconColor(color, 1, '#131A25')}
      />
    </Svg>
  );
};

Iconxuanxiang.defaultProps = {
  size: 18,
};

Iconxuanxiang = React.memo ? React.memo(Iconxuanxiang) : Iconxuanxiang;

export default Iconxuanxiang;
