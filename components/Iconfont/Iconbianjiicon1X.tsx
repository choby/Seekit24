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

let Iconbianjiicon1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M972.8 908.8a38.4 38.4 0 0 1 5.2224 76.4416L972.8 985.6H51.2a38.4 38.4 0 0 1-5.2224-76.4416L51.2 908.8h921.6zM581.5808 89.7024a166.4 166.4 0 0 1 235.3152 235.3152l-477.696 477.696a38.4 38.4 0 0 1-21.8624 10.9056l-210.176 29.184a38.4 38.4 0 0 1-43.3152-43.3664l29.184-210.176a38.4 38.4 0 0 1 10.8544-21.8624z m180.992 54.272a89.6 89.6 0 0 0-126.72 0l-468.5824 468.6336-20.3776 147.0976 147.1488-20.4288 468.5312-468.5312a89.6 89.6 0 0 0 5.0176-121.344z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Iconbianjiicon1X.defaultProps = {
  size: 18,
};

Iconbianjiicon1X = React.memo ? React.memo(Iconbianjiicon1X) : Iconbianjiicon1X;

export default Iconbianjiicon1X;
