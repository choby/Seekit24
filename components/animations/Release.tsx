import LottieView from 'lottie-react-native';
import React from 'react';
import AnimationBase, { AnimatedLottieViewProps } from './animationBase';

export default class extends AnimationBase<AnimatedLottieViewProps> {
    render() {
        return <LottieView
            {...this.props}
            ref={this.lottieView}
            style={{
                height: 48,
            }}
            source={require('@/assets/animation/leadsRelease.json')}

        />;
    }
}