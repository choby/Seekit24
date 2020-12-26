import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/paramsList';
import CategorySelector from '@/screens/components/CategorySelector';
import BrandSelector from "./brandSelector"

export default () => {
    return <View style={styles.paramContainer}>
        <View style={styles.paramTitleContainer}>
            <Text style={styles.paramTitle}>All</Text>
        </View>
        <CategorySelector data={[{ label: "1", value: "12", imageUrl: "http://",selected:true }]} />
        <BrandSelector data={[{ label: "Xiaomi", value: "12",  }]} />
    </View>;
}

