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

let Iconshangchuanzhaopian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M199.424 880c-65.856 0-119.424-52.288-119.424-116.96V260.96C80 196.288 133.568 144 199.424 144h625.152c65.856 0 119.424 52.288 119.424 116.96v502.08c0 64.672-53.568 116.96-119.424 116.96z m0-32h625.152c48.352 0 87.424-38.112 87.424-84.96V260.96c0-46.848-39.04-84.96-87.424-84.96H199.424C151.072 176 112 214.112 112 260.96v502.08c0 46.848 39.04 84.96 87.424 84.96zM656 416a80 80 0 1 1 0-160 80 80 0 0 1 0 160z m0-32a48 48 0 1 0 0-96 48 48 0 0 0 0 96zM213.664 748.224a16 16 0 0 1-3.52-20.192l1.632-2.368 216.544-256a16 16 0 0 1 22.752-1.728l2.048 2.176 157.184 199.552 87.168-73.888a16 16 0 0 1 21.312 0.576l2.016 2.304 92.16 128a16 16 0 0 1-24.064 20.864l-1.888-2.176-82.048-113.92-86.656 73.344a16 16 0 0 1-20.896-0.16l-2.016-2.144-155.296-197.152-203.872 241.024a16 16 0 0 1-22.56 1.888z"
        fill={getIconColor(color, 0, '#9BA6B8')}
      />
    </Svg>
  );
};

Iconshangchuanzhaopian.defaultProps = {
  size: 18,
};

Iconshangchuanzhaopian = React.memo ? React.memo(Iconshangchuanzhaopian) : Iconshangchuanzhaopian;

export default Iconshangchuanzhaopian;
