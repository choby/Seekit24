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

let IconshoucangiconLiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1029 1024" width={size} height={size} {...rest}>
      <Path
        d="M434.76736 76.032L327.14496 294.2464a12.8 12.8 0 0 1-9.6256 7.0144l-240.7936 34.9696a89.6 89.6 0 0 0-49.664 152.832l174.2336 169.8816a12.8 12.8 0 0 1 3.6864 11.3152l-41.1136 239.8208a89.6 89.6 0 0 0 129.9968 94.464l215.3984-113.2544a12.8 12.8 0 0 1 11.8784 0l215.3984 113.2544a89.6 89.6 0 0 0 130.048-94.464l-41.1648-239.8208a12.8 12.8 0 0 1 3.6864-11.3152l174.2336-169.8816a89.6 89.6 0 0 0-49.664-152.832l-240.7936-34.9696a12.8 12.8 0 0 1-9.6256-7.0144l-107.7248-218.2144a89.6 89.6 0 0 0-160.6656 0z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
      <Path
        d="M605.62176 545.3312a38.4 38.4 0 0 0-48.8448 12.6976l-2.6624 4.5056c-4.864 9.728-11.6224 17.5104-19.456 22.7328-20.992 13.9264-46.9504 7.2704-62.1056-16.8448l-3.328-5.888a38.4 38.4 0 1 0-68.7104 34.304c34.4064 68.9152 114.3296 93.696 176.64 52.4288 19.2-12.8 34.9184-30.8736 45.6704-52.4288a38.4 38.4 0 0 0-17.2032-51.5072z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconshoucangiconLiang.defaultProps = {
  size: 18,
};

IconshoucangiconLiang = React.memo ? React.memo(IconshoucangiconLiang) : IconshoucangiconLiang;

export default IconshoucangiconLiang;
