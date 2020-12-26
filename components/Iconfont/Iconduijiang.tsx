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

let Iconduijiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.781538 0 512 229.218462 512 512s-229.218462 512-512 512S0 794.781538 0 512 229.218462 0 512 0z m0 59.076923C261.868308 59.076923 59.076923 261.868308 59.076923 512S261.868308 964.923077 512 964.923077 964.923077 762.131692 964.923077 512 762.131692 59.076923 512 59.076923z m81.683692 159.389539c160.846769 160.886154 163.721846 419.918769 8.585846 584.310153l-8.585846 8.861539-41.787077-41.747692a360.369231 360.369231 0 0 0 7.955693-501.405539l-7.955693-8.231385 41.747693-41.747692z m-117.76 108.622769a265.846154 265.846154 0 0 1 7.089231 368.64l-7.089231 7.325538-41.747692-41.787077a206.769231 206.769231 0 0 0 6.695385-285.380923l-6.695385-7.049846 41.747692-41.747692zM374.153846 428.465231a118.153846 118.153846 0 0 1 0 167.069538c-27.175385-27.136-55.020308-54.980923-83.495384-83.534769a1936.187077 1936.187077 0 0 0 83.495384-83.495385z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconduijiang.defaultProps = {
  size: 18,
};

Iconduijiang = React.memo ? React.memo(Iconduijiang) : Iconduijiang;

export default Iconduijiang;
