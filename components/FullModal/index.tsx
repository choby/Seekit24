import { SystemUtils } from "@/utils";
import pixelRatio from '@/utils/pixelRatio';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SlideModal, SlideModalProps } from 'reactive';

/**
 * 全屏模态框
 */
export default class extends React.Component<SlideModalProps>{
    private slideModalx?: SlideModal<SlideModalProps> | null;
    private static defaultProps = {
        offsetY: SystemUtils.isIos ? pixelRatio.statusBarHeight : 10
    };
    /**
     *
     */
    constructor(props: SlideModalProps) {
        super(props);
    }
    open() {
        this.slideModalx?.open(undefined);
    }
    close() {
        this.slideModalx?.close();
    }
    render() {
        const { children, scrollable, ...othersProps } = this.props;
        const style = {
            width: pixelRatio.screenSize.width,
            height: pixelRatio.screenSize.height - othersProps.offsetY!
        };
        return <SlideModal<SlideModalProps>
            align="up"
            direction="down"
            ref={ref => this.slideModalx = ref}
            backdropColor="#ffffff"
            cancelable={false}
            styles={
                {
                    container: {
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    }
                }
            }
            {...othersProps}

        >
            {
                scrollable && <ScrollView style={style} >
                    {children}
                </ScrollView>
            }
            {
                !scrollable && <View style={style}>
                    {children}
                </View>
            }
        </SlideModal>;
    }
}