import React, { useRef, memo } from "react";
import { View, FlatList, StyleProp, ViewStyle } from "react-native";
import styles from "./styles/selectedList";
import SelectedItem from "./selectedItem";
import { Asset } from "expo-media-library";

interface SelectedListProps {
    style?: StyleProp<ViewStyle>;
    onSelectAsset: (asset: Asset | string) => void;
    onCancelAsset: (asset: Asset | string) => void;
    onPreview: (asset: Asset | string) => void;
    selectedAssets: (Asset | string)[];
}

const isUrl = (asset: Asset | string): asset is string => {
    return typeof asset === "string";
}

const selectedList: React.FunctionComponent<SelectedListProps> = ({
    style,
    onSelectAsset,
    onCancelAsset,
    onPreview,
    children,
    selectedAssets
}) => {
    const selectedFlatList = useRef<FlatList<any>>(null);

    const onPressAsset = (asset: Asset | string) => {
        if (assetIsSelected(asset))
            onCancelAsset(asset)
        else {
            onSelectAsset(asset)
        }
    }

    const assetIsSelected = (asset: Asset | string) => {
        return selectedAssets.map(a => isUrl(a) ? a : a.id).includes(isUrl(asset) ? asset : asset.id);
    }

    return <View style={[styles.selectedListContainer, style]}>
        <FlatList<Asset | string> data={selectedAssets}
            renderItem={({ item, index }: { item: Asset | string, index: number }) => <SelectedItem
                asset={item}
                key={`selected_${index}`}
                onDelete={asset => onPressAsset(asset)}
                onPress={() => onPreview?.(item)}
            />}
            ItemSeparatorComponent={() => <View style={styles.selectedItemSeparator}></View>}
            horizontal={true}
            ref={selectedFlatList}
            onEndReached={() => {
                selectedFlatList.current?.scrollToEnd();
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_item, index) => `${index}`}
        />
        {selectedAssets.length > 0 && children}
    </View>
}


export default memo(selectedList) as typeof selectedList;