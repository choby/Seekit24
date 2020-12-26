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

let IconTgfenxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m245.76 0l532.48 0q245.76 0 245.76 245.76l0 532.48q0 245.76-245.76 245.76l-532.48 0q-245.76 0-245.76-245.76l0-532.48q0-245.76 245.76-245.76Z"
        fill={getIconColor(color, 0, '#2F9FDA')}
      />
      <Path
        d="M102.4 512c0 226.22208 183.37792 409.6 409.6 409.6s409.6-183.37792 409.6-409.6S738.22208 102.4 512 102.4 102.4 285.77792 102.4 512z"
        fill={getIconColor(color, 1, '#2F9FDA')}
      />
      <Path
        d="M718.39744 745.82016l98.89792-451.46112c4.03456-19.08736 1.67936-32.768-7.08608-41.02144-8.72448-8.25344-20.2752-9.74848-34.65216-4.54656L194.39616 465.69472c-13.0048 4.79232-21.8112 10.19904-26.54208 16.2816-4.7104 6.10304-5.28384 11.83744-1.67936 17.26464 3.56352 5.44768 10.73152 9.66656 21.504 12.71808l148.66432 44.93312 345.06752-210.41152c9.4208-6.10304 16.5888-7.3728 21.504-3.8912 3.15392 2.17088 2.2528 5.4272-2.6624 9.728l-279.1424 244.3264-10.79296 148.52096c10.32192 0 20.43904-4.75136 30.28992-14.336l72.64256-67.76832 150.67136 107.52c28.71296 15.60576 46.8992 7.3728 54.51776-24.7808h-0.04096z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconTgfenxiang.defaultProps = {
  size: 18,
};

IconTgfenxiang = React.memo ? React.memo(IconTgfenxiang) : IconTgfenxiang;

export default IconTgfenxiang;
