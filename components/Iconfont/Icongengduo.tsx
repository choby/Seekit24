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

let Icongengduo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M530.962963 37.925926c272.308148 0 493.037037 220.728889 493.037037 493.037037s-220.728889 493.037037-493.037037 493.037037S37.925926 803.271111 37.925926 530.962963 258.654815 37.925926 530.962963 37.925926z m0 56.888889C290.095407 94.814815 94.814815 290.095407 94.814815 530.962963S290.095407 967.111111 530.962963 967.111111 967.111111 771.830519 967.111111 530.962963 771.830519 94.814815 530.962963 94.814815z m140.781037 255.127704l40.239407 40.201481L571.164444 530.962963l140.818963 140.781037-40.201481 40.239407L530.962963 571.164444l-140.781037 140.818963-40.239407-40.201481L490.761481 530.962963l-140.818962-140.781037 40.201481-40.239407L530.962963 490.761481l140.781037-140.818962z"
        fill={getIconColor(color, 0, '#131A25')}
      />
    </Svg>
  );
};

Icongengduo.defaultProps = {
  size: 18,
};

Icongengduo = React.memo ? React.memo(Icongengduo) : Icongengduo;

export default Icongengduo;
