import * as MediaLibrary from 'expo-media-library';
import { Album, Asset } from "expo-media-library";
import _ from "lodash";
import React from "react";
import { FlatList, View } from "react-native";
import Camera from "./camera";
import NextStepButton from "./nextStepButton";
import PendingItem from "./pendingItem";
import SelectedList from "./selectedList";
import styles from "./styles";
import { Viewer } from "./viewer";


interface MediaPickerProps {
    options: Options;
    album?: Album;
    onSelectAsset: (asset: Asset | string) => void;
    onCancelAsset: (asset: Asset | string) => void;
    selectedAssets: (Asset | string)[];
    onNextPress: () => void;
}
interface MediaPickerState {
    assetsLib: Asset[];
    album?: Album;
    readQtyPerTime: number;
}

export class Options {
    constructor() {
        this.maxSelectQty = 10;
        this.selectedItems = [];
        this.readQtyPerTime = 40;
    }
    maxSelectQty: number;
    selectedItems: Asset[];
    readQtyPerTime: number;
}

export default class MediaPicker extends React.PureComponent<MediaPickerProps, MediaPickerState> {

    public static Camera = Camera;

    /**
     *
     */
    constructor(props: MediaPickerProps) {
        super(props);
        const { options, album } = this.props;
        this.state = {
            assetsLib: [],
            album: album,
            readQtyPerTime: options.readQtyPerTime
        };
    }

    private viewer!: Viewer | null;

    componentDidMount() {
        this.loadMediaAsync();
    }



    componentDidUpdate(prevProps: MediaPickerProps) {
        if (!_.isEqual(prevProps.album, this.props.album)) {
            this.setState({ assetsLib: [] }, () => {
                this.loadMediaAsync();
            });
        }
    }

    loadMediaAsync = () => {
        const { album } = this.props;
        const { readQtyPerTime, assetsLib } = this.state;
        return MediaLibrary.getAssetsAsync({
            first: readQtyPerTime,
            album: album,
            createdBefore: assetsLib[assetsLib.length - 1]?.creationTime,
            sortBy: "creationTime",
            mediaType: "photo"
        })
            .then(async data => {
                this.setState({ assetsLib: assetsLib.concat(data.assets.filter(a => !a.uri.endsWith(".gif"))) });
            }).catch(() => { });
    };

    isUrl(asset: Asset | string): asset is string {
        return typeof asset === "string";
    }

    onCheckAsset = (asset: Asset | string) => {
        const { onCancelAsset, onSelectAsset } = this.props;
        if (this.assetIsSelected(asset))
            onCancelAsset(asset);
        else {
            onSelectAsset(asset);
        }
    };



    assetIsSelected = (asset: Asset | string) => {
        const { selectedAssets } = this.props;
        return selectedAssets.map(a => this.isUrl(a) ? a : a.id).includes(this.isUrl(asset) ? asset : asset.id) ?? false;
    };

    disabled = (asset: Asset) => {
        const { selectedAssets, options } = this.props;
        return !this.assetIsSelected(asset) && selectedAssets.length >= options.maxSelectQty;
    };



    render() {
        const { assetsLib } = this.state;
        const { selectedAssets, onNextPress, options, onCancelAsset, onSelectAsset } = this.props;


        return <>
            <FlatList data={assetsLib} numColumns={4}
                renderItem={({ item, index }) => <PendingItem
                    key={`pending_${index}`}
                    asset={item}
                    checkboxDisabled={this.disabled(item)}
                    onCheckboxChange={asset => this.onCheckAsset(asset)}
                    checkboxIconSize={24}
                    checked={this.assetIsSelected(item)}
                    onPress={() => {
                        this.viewer?.open(assetsLib, item);
                    }}
                    multi={options.maxSelectQty > 1}
                    style={styles.libItem}
                />}
                contentContainerStyle={{ justifyContent: "space-between" }}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={styles.libItemSeparator}></View>}
                onScrollEndDrag={() => {
                    this.loadMediaAsync();
                }}
            >
            </FlatList>
            {
                selectedAssets.length > 0 && <SelectedList
                    onPreview={(asset) => {
                        this.viewer?.open(selectedAssets, asset);
                    }}
                    onCancelAsset={this.onCheckAsset}
                    onSelectAsset={this.onCheckAsset}
                    selectedAssets={selectedAssets}
                >
                    <NextStepButton onNextPress={onNextPress} maxSelectQty={options.maxSelectQty} selectedAssets={selectedAssets} />
                </SelectedList>
            }

            <Viewer
                selectedAssets={selectedAssets}
                onCancelAsset={onCancelAsset}
                onSelectAsset={onSelectAsset}
                options={options}
                onNextPress={onNextPress}
                ref={ref => this.viewer = ref}
            />
        </>;
    }
}