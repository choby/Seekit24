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

let IconshoucangiconLiang1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1030 1024" width={size} height={size} {...rest}>
      <Path
        d="M435.005952 76.032a89.6 89.6 0 0 1 156.672-7.3728l4.096 7.3728 107.6736 218.2144a12.8 12.8 0 0 0 6.656 6.144l2.9696 0.8704 240.7936 34.9696a89.6 89.6 0 0 1 55.3984 146.688l-5.7344 6.144-174.2336 169.8816a12.8 12.8 0 0 0-3.84 8.192l0.1536 3.1232 41.1136 239.8208a89.6 89.6 0 0 1-122.368 98.048l-7.6288-3.584-215.3984-113.2544a12.8 12.8 0 0 0-8.96-1.0752l-2.9184 1.0752-215.3984 113.2544a89.6 89.6 0 0 1-131.072-86.1184l1.024-8.3456 41.1648-239.8208a12.8 12.8 0 0 0-1.7408-8.9088l-1.9456-2.4064L27.249152 489.0624a89.6 89.6 0 0 1 41.3696-151.2448l8.2944-1.536 240.7936-35.0208a12.8 12.8 0 0 0 7.936-4.4032l1.6896-2.6112 107.7248-218.2144z m122.0096 481.9968l-2.6624 4.5056c-4.864 9.728-11.6224 17.5104-19.456 22.7328-20.992 13.9264-46.9504 7.2704-62.1056-16.8448l-3.328-5.888a38.4 38.4 0 1 0-68.7104 34.304c34.4064 68.9152 114.3296 93.696 176.64 52.4288 19.2-12.8 34.9184-30.8736 45.6704-52.4288a38.4 38.4 0 0 0-66.048-38.8096z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

IconshoucangiconLiang1X.defaultProps = {
  size: 18,
};

IconshoucangiconLiang1X = React.memo ? React.memo(IconshoucangiconLiang1X) : IconshoucangiconLiang1X;

export default IconshoucangiconLiang1X;
