import ImageCache from "@/infrastructures/caches/imageCache";
import { Color } from "@/theme/variables";
import { SystemUtils } from "@/utils";
import { Logging } from "@/utils/logging";
import { isNumber } from 'lodash';
import React from 'react';
import { Image, ImageLoadEventData, ImageProps, ImageRequireSource, ImageSourcePropType, ImageURISource, NativeSyntheticEvent } from "react-native";

const cache = new ImageCache();

export interface SeekitImageProps extends Omit<ImageProps, "source"> {
    sizeRatio?: number;
    source: ImageURISource | ImageRequireSource;
}

function isUriSource(source: ImageURISource | ImageRequireSource): source is ImageURISource {
    if ((source as ImageURISource).uri)
        return true;
    return false;
}

export class SeekitImage<T extends SeekitImageProps = SeekitImageProps> extends React.Component<T, {
    height: number;
    width: number;
    source: ImageURISource | ImageRequireSource;
}> {
    /**
     *
     */
    constructor(props: T) {
        super(props);
        //@ts-ignore
        const width = props.width ?? props.style?.width ?? props.source.width;
        const { sizeRatio, height, source } = props;
        this.state = {
            width,
            height: height ?? width * (sizeRatio ?? 1),
            source: isUriSource(source) ? require("@/assets/images/imageLoading.png") : source
        };
        // 读取图片缓存
        if (isUriSource(source) && source.uri)
            cache.get(source.uri).then(uri => uri && this.setState({ source: { uri } }));
    }

    protected isUnmount: boolean = false;
    protected sourceIsImageURISource = (source: ImageSourcePropType): source is ImageURISource => {
        const uri = (source as ImageURISource).uri;
        return uri !== undefined && uri !== "";
    };

    componentWillUnmount() {
        this.isUnmount = true;
    }

    protected onLoad(event: NativeSyntheticEvent<ImageLoadEventData>) {
        const containerWidth = this.state.width;
        const { sizeRatio } = this.props;
        if (isNumber(sizeRatio)) {
            this.setState({
                height: containerWidth * sizeRatio
            });
        } else {
            const width = event.nativeEvent.source.width;
            const height = event.nativeEvent.source.height;
            if (this.isUnmount) return;
            this.setState({
                height: containerWidth * height / width
            });
        }
    }

    render() {
        const { style, source, sizeRatio } = this.props;
        const { height, width } = this.state;

        return <Image
            source={source}
            style={[style, { height, width, backgroundColor: Color.IMAGEBACK, borderWidth: 0 }]}
            width={width}
            height={height}
            onError={(e) => {
                Logging.error(e.nativeEvent.error);
            }}
            onLoad={(this.props.height === undefined && sizeRatio === undefined) ? e => this.onLoad(e) : undefined}
            defaultSource={SystemUtils.isIos ? require("@/assets/images/imageLoading.png") : undefined}
            loadingIndicatorSource={require("@/assets/images/imageLoading.png")}
        />;
    }
}