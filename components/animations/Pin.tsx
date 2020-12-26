import LottieView from 'lottie-react-native';
import React from 'react';
import AnimationBase from './animationBase';

export default class extends AnimationBase {
    render() {
        return <LottieView
            {...this.props}
            ref={this.lottieView}
            style={{
                height: 30,
            }}
            source={require('@/assets/animation/pin.ios.json')}
        />;
    }
}