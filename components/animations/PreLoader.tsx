import { hexToRGB } from "@/theme";
import { Color } from "@/theme/variables";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import LottieView from 'lottie-react-native';
import React from 'react';
import { Modal, View, ViewProps } from 'react-native';
import AnimationBase from './animationBase';

interface PreLoaderViewProps {
    loading?: boolean;
}

export class PreLoaderView extends React.Component<PreLoaderViewProps & ViewProps> {
    private preLoader = React.createRef<PreLoader>();
    componentDidMount() {
        this.preLoader.current?.play();
    }
    render() {
        const { loading, children, style, ...others } = this.props;
        return <>
            { loading === true && <Modal
                transparent
            >
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: pixelRatio.screenSize.width,
                    height: pixelRatio.screenSize.height - 50,
                    backgroundColor: "transparent",

                    ...others
                }}>
                    <View style={{
                        backgroundColor: hexToRGB(Color.WHITE, 0.92),
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 2,
                            height: 2
                        },
                        shadowOpacity: 0.1,
                        borderRadius: getLogicPixel(8),
                        shadowRadius: getLogicPixel(8),
                        height: getLogicPixel(80),
                        width: getLogicPixel(80),
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <PreLoader ref={this.preLoader} />
                    </View>
                </View>
            </Modal>
            }
            {loading !== true && children}
        </>;
    }
}


class PreLoader extends AnimationBase {
    public static View = PreLoaderView;

    render() {
        return <LottieView
            {...this.props}
            ref={this.lottieView}
            style={{
                height: 50,
            }}
            source={require('@/assets/animation/preloader.json')}
        />;
    }
}

export default PreLoader;

