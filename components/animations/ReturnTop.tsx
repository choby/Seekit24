import LottieView from 'lottie-react-native';
import React from 'react';
import AnimationBase, { AnimatedLottieViewProps } from './animationBase';

export default class ReturnTop<T extends AnimatedLottieViewProps = AnimatedLottieViewProps> extends AnimationBase<T> {

    render() {
        return <LottieView
            {...this.props}
            loop={false}
            ref={this.lottieView}
            onAnimationFinish={() => {
                this.lottieView.current?.pause();
            }}
            style={[{
                height: 28,
            }, this.props.style]}
            source={require('@/assets/animation/returnTop.json')}
        />;
    }
}