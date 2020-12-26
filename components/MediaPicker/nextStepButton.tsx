import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/nextStepButton';
import Button from '@/components/Button';
import { Asset } from 'expo-media-library';

interface NextStepButtonProps {
    onNextPress: () => void;
    selectedAssets: (string | Asset)[];
    maxSelectQty: number;
}

export default ({ onNextPress, selectedAssets, maxSelectQty }: NextStepButtonProps) => {

    return <Button style={styles.nextStepButton} type="primary" onPress={() => {
        onNextPress?.();
        // NavigationHelper.Navigation.goBack();
        // NavigationHelper.Navigation.navigate(Pages.GoodsPublishConfirm)
    }}>
        <View>
            <Text style={styles.selectedQtyText}>{selectedAssets.length}/{maxSelectQty}</Text>
            <Text style={styles.selectedNextText}>Next</Text>
        </View>
    </Button>
}