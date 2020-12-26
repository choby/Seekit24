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

let Icontianjiashipin1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1056 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 208a112 112 0 0 1 111.84 105.856L752 320v100.64l161.28-122.496c19.2-14.592 48.032-13.312 65.504 3.072 7.36 6.88 11.968 15.84 12.992 25.44l0.224 4.16v362.368c0 24.32-21.92 42.816-47.776 42.816a51.84 51.84 0 0 1-27.104-7.52l-3.84-2.624-161.28-122.528V704a112 112 0 0 1-105.856 111.84L640 816H160a112 112 0 0 1-111.84-105.856L48 704V320a112 112 0 0 1 105.856-111.84L160 208h480z m0 32H160a80 80 0 0 0-79.84 74.752L80 320v384a80 80 0 0 0 74.752 79.84L160 784h480a80 80 0 0 0 79.84-74.752L720 704V320a80 80 0 0 0-74.752-79.84L640 240z m295.392 81.92l-2.752 1.696-170.976 129.856a15.936 15.936 0 0 1-9.632 3.264v113.28a16 16 0 0 1 10.432 1.408l2.464 1.536 167.68 127.424a19.36 19.36 0 0 0 11.616 3.616c8.224 0 14.304-4.352 15.552-9.056l0.224-1.76V330.816a8.736 8.736 0 0 0-3.104-6.272c-5.248-4.928-14.624-5.92-21.504-2.592z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Icontianjiashipin1X.defaultProps = {
  size: 18,
};

Icontianjiashipin1X = React.memo ? React.memo(Icontianjiashipin1X) : Icontianjiashipin1X;

export default Icontianjiashipin1X;
