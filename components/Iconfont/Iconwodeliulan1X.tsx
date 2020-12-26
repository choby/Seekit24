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

let Iconwodeliulan1X: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1034 1024" width={size} height={size} {...rest}>
      <Path
        d="M517.8368 952.32c-160.6144 0-324.7104-136.448-495.8208-405.0944L-0.0512 512l22.0672-35.2256C193.1264 208.128 357.2224 71.68 517.8368 71.68c160.6656 0 324.4544 136.448 494.9504 405.1456l22.016 35.1744-22.016 35.1744C842.2912 815.872 678.4512 952.32 517.8368 952.32z m0-61.44c127.2832 0 267.9296-111.9232 418.9696-339.456l12.288-18.688 13.2608-20.736-13.8752-21.6576c-147.5072-227.1232-285.184-344.7808-410.4192-356.3008l-10.3936-0.7168L517.8368 133.12c-127.2832 0-268.2368 111.9744-419.84 339.456l-12.288 18.7392-13.2608 20.6848 13.8752 21.6064c148.0192 227.1744 286.0544 344.832 411.2896 356.352l10.3936 0.7168 9.8304 0.2048z m0-194.56a184.32 184.32 0 1 1 0-368.64 184.32 184.32 0 0 1 0 368.64z m0-61.44a122.88 122.88 0 1 0 0-245.76 122.88 122.88 0 0 0 0 245.76z"
        fill={getIconColor(color, 0, '#FF515A')}
      />
    </Svg>
  );
};

Iconwodeliulan1X.defaultProps = {
  size: 18,
};

Iconwodeliulan1X = React.memo ? React.memo(Iconwodeliulan1X) : Iconwodeliulan1X;

export default Iconwodeliulan1X;
