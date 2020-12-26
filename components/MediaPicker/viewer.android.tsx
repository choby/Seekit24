import Checkbox from "@/components/Checkbox";
import IconFont from "@/components/Iconfont";
import pixelRatio, { getLogicPixel } from "@/utils/pixelRatio";
import { Asset } from "expo-media-library";
import React from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';
import { SafeAreaView } from "react-native-safe-area-context";
import { SlideModal, SlideModalProps } from "reactive";
import Button from "../Button";
import NextStepButton from "./nextStepButton";
import SelectedList from "./selectedList";
import styles from "./styles/viewer";
import { ViewerProps, ViewerState } from "./viewer";

export class Viewer extends React.PureComponent<ViewerProps, ViewerState>{
    slideModalX!: SlideModal<SlideModalProps> | null;
    /**
     *
     */
    constructor(props: ViewerProps) {
        super(props);
        this.state = {
            previewLib: [],
            initIndex: 0,
            currentIndex: 0,
            disableSwipe: true,
            openStatus: false
        };
    }

    isUrl(asset: Asset | string): asset is string {
        return typeof asset === "string";
    }

    open(previewLib: (Asset | string)[], initAsset?: Asset | string) {
        if (initAsset) {
            this.setState({ initIndex: previewLib.findIndex(l => this.isUrl(initAsset) ? initAsset === l : (this.isUrl(l) ? false : l.id === initAsset.id)) });
        }
        this.setState({ previewLib: previewLib, openStatus: true }, () => {
            this.slideModalX!.open(undefined);
        });

    }

    close() {
        this.slideModalX?.close();
        this.setState({ initIndex: 0, previewLib: [], openStatus: false });
    }

    assetIsSelected = (asset: Asset | string) => {
        const { selectedAssets } = this.props;
        return selectedAssets?.map(a => this.isUrl(a) ? a : a.id).includes(this.isUrl(asset) ? asset : asset.id) ?? false;
    };

    disabled = (asset: Asset | string) => {
        const { selectedAssets, options: { maxSelectQty } } = this.props;
        return !this.assetIsSelected(asset) && selectedAssets.length >= maxSelectQty;
    };

    onCheckAsset(asset: Asset | string) {
        const { onCancelAsset, onSelectAsset } = this.props;
        if (this.assetIsSelected(asset))
            onCancelAsset(asset);
        else {
            onSelectAsset(asset);
        }

    }

    async selectedSingle() {
        const { previewLib, currentIndex } = this.state;
        const currentItem = previewLib[currentIndex! - 1];
        const { onSelectAsset } = this.props;
        await onSelectAsset(currentItem);
    }

    cancelSingle() {
        this.close();
    }


    render() {
        const { onNextPress, options, onCancelAsset, onSelectAsset } = this.props;
        const { previewLib, initIndex, openStatus } = this.state;
        const { selectedAssets } = this.props;
        return <SlideModal align="down" direction="up" ref={ref => this.slideModalX = ref}
            styles={{
                container: { top: 0, bottom: 0, left: 0, right: 0 },
                backdrop: [{ backgroundColor: '#000000' }],
                content: {
                    width: '100%',
                    height: pixelRatio.screenSize.height,
                    paddingTop: Platform.OS === "ios" ? pixelRatio.statusBarHeight : 0
                }
            }}
            screenHeight={pixelRatio.screenSize.height}
            cancelable={false}
        >
            {
                Array.isArray(previewLib) && previewLib.length > 0 &&
                <SafeAreaView style={{ flex: 1, paddingBottom: getLogicPixel(20) }} edges={["top", "bottom"]}>
                    {openStatus &&
                        <ImageViewer
                            flipThreshold={80}
                            useNativeDriver={true}
                            pageAnimateTime={150}
                            enablePreload={true}
                            imageUrls={previewLib.map(a => ({ url: this.isUrl(a) ? a : a.uri, originUrl: this.isUrl(a) ? a : a.uri }))}
                            index={initIndex}
                            saveToLocalByLongPress={false}
                            renderImage={props => {
                                return <Image key={props.source.uri} source={{ uri: props.source.uri }} style={{ marginTop: getLogicPixel(40), width: "100%", height: "100%" }} />;
                            }}
                            enableSwipeDown={true}
                            onSwipeDown={() => {
                                this.slideModalX!.close();
                            }}
                            swipeDownThreshold={100}
                            renderIndicator={(currentIndex, allSize) => {
                                this.setState({ currentIndex: currentIndex! });
                                const currentItem = previewLib[currentIndex! - 1];

                                return <View style={[styles.indicator, options.maxSelectQty === 1 ? styles.indicatorBackground : undefined]}>
                                    <TouchableOpacity onPress={() => this.close()} hitSlop={{
                                        top: 10,
                                        left: 10,
                                        right: 10,
                                        bottom: 10
                                    }}>
                                        <IconFont name="yemianguanbi-bai1x" />
                                    </TouchableOpacity>
                                    <Text style={{ color: "#FFFFFF" }}>{currentIndex}/{allSize}</Text>
                                    {options.maxSelectQty > 1 ? <Checkbox checked={this.assetIsSelected(currentItem)}
                                        onChange={() => this.onCheckAsset(currentItem)}
                                        disabled={this.disabled(currentItem)}
                                        style={styles.iconBackground}
                                    /> : <View></View>}
                                </View>;
                            }}

                        />
                    }

                    {options.maxSelectQty <= 1 ? <View style={[styles.paddingHorizontal, styles.confirm]}>
                        <TouchableOpacity style={[styles.confirmButton, styles.confirmCancelButton]} onPress={() => this.cancelSingle()}>
                            <Text style={styles.confirmText}>Cancel</Text>
                        </TouchableOpacity>

                        <Button type="primary" size="lg" style={styles.confirmButton} onPress={() => this.selectedSingle()}>Select</Button>
                    </View> : <View style={styles.paddingHorizontal}><SelectedList
                        onPreview={(asset) => this.open(selectedAssets, asset)}
                        onCancelAsset={onCancelAsset}
                        onSelectAsset={onSelectAsset}
                        selectedAssets={selectedAssets}
                    >
                        <NextStepButton onNextPress={() => {
                            this.close();
                            onNextPress();
                        }} maxSelectQty={options.maxSelectQty} selectedAssets={selectedAssets} />
                    </SelectedList>
                        </View>
                    }


                </SafeAreaView>
            }
        </SlideModal>;

    }
}
