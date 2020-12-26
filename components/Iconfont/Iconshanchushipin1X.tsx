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

let Iconshanchushipin1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M844.8 204.8a76.8 76.8 0 0 1 76.672 72.2944L921.6 281.6v460.8a76.8 76.8 0 0 1-72.2944 76.672L844.8 819.2H296.064a76.8 76.8 0 0 1-60.4416-29.44l-2.9952-4.0704-157.2608-230.4a76.8 76.8 0 0 1-2.9696-81.92l2.9696-4.6592 157.2608-230.4a76.8 76.8 0 0 1 58.368-33.3568L296.0896 204.8H844.8z m0 51.2H296.064a25.6 25.6 0 0 0-19.2 8.704l-1.9456 2.4576-157.2608 230.4a25.6 25.6 0 0 0-1.792 25.856l1.792 3.0208 157.2608 230.4a25.6 25.6 0 0 0 17.9968 10.9568l3.1488 0.2048H844.8a25.6 25.6 0 0 0 25.4208-22.6048L870.4 742.4V281.6a25.6 25.6 0 0 0-22.6048-25.4208L844.8 256z m-156.7744 127.3856a25.6 25.6 0 0 1 2.6368 33.792l-2.0992 2.4064L598.8864 512l89.6768 92.416a25.6 25.6 0 0 1-34.3552 37.8368l-2.3808-2.176L563.2 548.736l-88.6272 91.3152a25.6 25.6 0 0 1-33.7408 2.6368l-2.4576-2.0736a25.6 25.6 0 0 1-2.6368-33.792l2.0992-2.4064 89.6768-92.4416-89.6768-92.3904a25.6 25.6 0 0 1 34.3552-37.8112l2.3808 2.176L563.2 475.2384l88.6272-91.2896a25.6 25.6 0 0 1 36.1984-0.5632z"
        fill={getIconColor(color, 0, '#4D5B72')}
      />
    </Svg>
  );
};

Iconshanchushipin1X.defaultProps = {
  size: 18,
};

Iconshanchushipin1X = React.memo ? React.memo(Iconshanchushipin1X) : Iconshanchushipin1X;

export default Iconshanchushipin1X;
