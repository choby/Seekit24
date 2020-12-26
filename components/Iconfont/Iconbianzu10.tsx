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

let Iconbianzu10: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M442.289231 327.089231a265.846154 265.846154 0 0 1 7.049846 368.64l-7.089231 7.325538-41.747692-41.787077a206.769231 206.769231 0 0 0 6.695384-285.380923l-6.695384-7.049846 41.747692-41.747692zM340.48 595.495385L256.984615 512l24.221539-23.315692 11.303384-11.027693 20.873847-20.873846 9.609846-9.846154 17.486769-18.471384a118.153846 118.153846 0 0 1 0 167.069538z m219.490462-377.068308c160.846769 160.886154 163.721846 419.918769 8.585846 584.310154l-8.585846 8.861538-41.787077-41.747692a360.369231 360.369231 0 0 0 7.955692-501.405539l-7.955692-8.231384 41.747692-41.747692z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconbianzu10.defaultProps = {
  size: 18,
};

Iconbianzu10 = React.memo ? React.memo(Iconbianzu10) : Iconbianzu10;

export default Iconbianzu10;
