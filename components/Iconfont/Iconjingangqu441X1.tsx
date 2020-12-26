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

let Iconjingangqu441X1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M742.4 153.6a102.4 102.4 0 0 1 102.4 102.4v460.8l-0.1024 3.8144v0.6656a97.792 97.792 0 0 1-83.968 97.024l18.8672 70.2464 0.5888 2.944a25.6 25.6 0 0 1-49.1264 13.1584l-0.9216-2.8416-22.1184-82.5344H315.9552l-22.0928 82.5344a25.6 25.6 0 0 1-50.048-10.3168l0.5888-2.944 18.8416-70.3232a97.8688 97.8688 0 0 1-81.9712-79.872l-0.768-4.992A104.0384 104.0384 0 0 1 179.2 716.8V256a102.4 102.4 0 0 1 102.4-102.4h460.8z m50.6368 358.4768H230.528l0.4864 209.5104c0 1.3568 0.0512 2.6624 0.1792 3.9936A51.1488 51.1488 0 0 0 281.6 768h460.8a51.2 51.2 0 0 0 51.1232-48.5632l-0.4864-207.36z m-280.3712 88.8832a38.4 38.4 0 1 1 0 76.8 38.4 38.4 0 0 1 0-76.8zM742.4 204.8H281.6a51.2 51.2 0 0 0-51.2 51.2v204.8768h563.2V256a51.2 51.2 0 0 0-51.2-51.2z m-229.7344 91.1104a38.4 38.4 0 1 1 0 76.8 38.4 38.4 0 0 1 0-76.8z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconjingangqu441X1.defaultProps = {
  size: 18,
};

Iconjingangqu441X1 = React.memo ? React.memo(Iconjingangqu441X1) : Iconjingangqu441X1;

export default Iconjingangqu441X1;
