import { NativeSyntheticEvent, ImageLoadEventData } from 'react-native';
import { SeekitImage, SeekitImageProps } from '@/components/SeekitImage';


export default class Image extends SeekitImage {

    constructor(props: SeekitImageProps) {
        super(props);
    }

    protected onLoad(event: NativeSyntheticEvent<ImageLoadEventData>) {
        const containerWidth = this.state.width;
        const width = event.nativeEvent.source.width;
            const height = event.nativeEvent.source.height;
            if (this.isUnmount) return;
            this.setState({
                height: width >= height ? containerWidth : containerWidth * 4 / 3
            });
    }
    
}