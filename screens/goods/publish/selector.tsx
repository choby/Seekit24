import React from 'react';
import { SlideModalProps, SlideModal } from 'reactive';
import styles from "./styles/selector";
import { View, TouchableOpacity } from 'react-native';
import IconFont from '@/components/Iconfont';
import { getLogicPixel } from '@/utils/pixelRatio';
import { observer } from 'mobx-react';
import withNavigation from '@/navigation/withNavigation';


@withNavigation
@observer
export default class Selector extends React.Component<{
    name: string;
    navigation: Navigation
}> {
    private slideModalx?: SlideModal<SlideModalProps> | null;

    public open() {
        this.slideModalx?.open(undefined);
    }

    render() {
        return <><SlideModal<SlideModalProps> align="down" direction="up" ref={ref => this.slideModalx = ref}
            styles={{
                container: {
                    ...styles.slideModalContainer,
                },
                content: styles.slideModalContent
            }}
            cancelable={true}
        >
            <View style={styles.closeButtonContainer}>
                <TouchableOpacity onPress={() => this.slideModalx?.close()}>
                    <View>
                        <IconFont name="yemianguanbi-hei1x" size={getLogicPixel(20)} />
                    </View>
                </TouchableOpacity>

            </View>

        </SlideModal></>
    }
}
