import { getLogicPixel } from "@/utils/pixelRatio";
import { Asset } from "expo-media-library";
import React, { createRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ImageView from "react-native-image-viewing";
import { SafeAreaView } from "react-native-safe-area-context";
//@ts-ignore
import Loading from 'react-native-whc-loading';
import { SlideModal, SlideModalProps } from "reactive";
import { Options } from ".";
import Button from "../Button";
import Checkbox from "../Checkbox";
import IconFont from "../Iconfont";
import NextStepButton from "./nextStepButton";
import SelectedList from "./selectedList";
import styles from "./styles/viewer";

export interface ViewerProps {
    onNextPress: () => void;
    onSelectAsset: (asset: Asset | string) => void;
    onCancelAsset: (asset: Asset | string) => void;
    options: Options;
    selectedAssets: (Asset | string)[];
}
export interface ViewerState {
    previewLib: (Asset | string)[];
    initIndex: number;
    currentIndex: number;
    disableSwipe: boolean;
    openStatus: boolean;

}



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
    private loading = createRef<any>();
    isUrl(asset: Asset | string): asset is string {
        return typeof asset === "string";
    }

    open(previewLib: (Asset | string)[], initAsset?: Asset | string) {
        if (initAsset) {
            this.setState({ initIndex: previewLib.findIndex(l => this.isUrl(initAsset) ? initAsset === l : (this.isUrl(l) ? false : l.id === initAsset.id)) ?? 0 });
        }
        this.setState({ previewLib: previewLib, openStatus: true }, () => {
            //  this.slideModalX!.open(undefined);
        });

    }

    close() {
        // this.slideModalX?.close();
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

    async selectedSingle(item: Asset) {
        const { onSelectAsset } = this.props;
        this.loading.current?.show();
        await onSelectAsset(item);
        this.loading.current?.close();
    }

    cancelSingle() {
        this.close();
    }

    render() {
        const { onNextPress, options, onCancelAsset, onSelectAsset } = this.props;
        const { previewLib, initIndex, openStatus } = this.state;
        const { selectedAssets } = this.props;

        return <>

            {
                Array.isArray(previewLib) && previewLib.length > 0 &&
                <SafeAreaView style={{ flex: 1, paddingBottom: getLogicPixel(20) }} edges={["top", "bottom"]}>

                    <ImageView
                        images={previewLib.map(a => ({ uri: this.isUrl(a) ? a : a.uri, originUrl: this.isUrl(a) ? a : a.uri }))}
                        imageIndex={initIndex}
                        visible={openStatus}
                        onRequestClose={() => this.close()}
                        HeaderComponent={({ imageIndex }) => {
                            const currentItem = previewLib[imageIndex];
                            return <View style={[styles.indicator, options.maxSelectQty === 1 ? styles.indicatorBackground : undefined]}>
                                {
                                    options.maxSelectQty === 1 && <Loading ref={this.loading} backgroundColor={'#00000096'}
                                        indicatorColor={'#fff'} />
                                }

                                <TouchableOpacity onPress={() => this.close()} hitSlop={{
                                    top: 10,
                                    left: 10,
                                    right: 10,
                                    bottom: 10
                                }}>
                                    <IconFont name="yemianguanbi-bai1x" style={styles.iconBackground} />
                                </TouchableOpacity>
                                <Text style={{ color: "#FFFFFF" }}>{imageIndex + 1}/{previewLib.length}</Text>
                                {options.maxSelectQty > 1 ? <Checkbox checked={this.assetIsSelected(currentItem)}
                                    onChange={() => this.onCheckAsset(currentItem)}
                                    disabled={this.disabled(currentItem)}
                                    style={styles.iconBackground}
                                /> : <View></View>}
                            </View>;
                        }}
                        FooterComponent={({ imageIndex }) => {
                            const currentItem = previewLib[imageIndex];
                            return options.maxSelectQty <= 1 ? <View style={[styles.paddingHorizontal, styles.confirm]}>
                                <TouchableOpacity style={[styles.confirmButton, styles.confirmCancelButton]} onPress={() => this.cancelSingle()}>
                                    <Text style={styles.confirmText}>Cancel</Text>
                                </TouchableOpacity>

                                <Button type="primary" size="lg" style={styles.confirmButton} onPress={() => this.selectedSingle(currentItem as Asset)}>Select</Button>
                            </View> : <View style={styles.paddingHorizontal}>
                                    <SelectedList
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
                                </View>;
                        }}
                        presentationStyle="fullScreen"

                    />
                </SafeAreaView>
            }
        </>;

    }
}