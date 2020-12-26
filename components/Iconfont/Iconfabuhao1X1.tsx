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

let Iconfabuhao1X1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.646897 204.023172a52.965517 52.965517 0 0 1 52.718344 47.845518l0.247173 5.12-0.035311 205.965241h200.492138a52.965517 52.965517 0 0 1 5.08469 105.683862l-5.08469 0.247173h-200.492138v205.965241a52.965517 52.965517 0 0 1-105.683862 5.12l-0.211862-5.12-0.03531-205.965241H247.172414a52.965517 52.965517 0 0 1-5.08469-105.683863L247.172414 462.953931h211.473655V256.98869a52.965517 52.965517 0 0 1 52.965517-52.965518z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconfabuhao1X1.defaultProps = {
  size: 18,
};

Iconfabuhao1X1 = React.memo ? React.memo(Iconfabuhao1X1) : Iconfabuhao1X1;

export default Iconfabuhao1X1;
