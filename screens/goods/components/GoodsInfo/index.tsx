import { SeekitImage } from '@/components/SeekitImage';
import useState from "@/hooks/useState";
import { Goods } from '@/types/data/Goods';
import { Video } from 'expo-av';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ImageView from "react-native-image-viewing";
import styles from './styles';

interface GoodsInfoProps {
    goods: Goods;
}

export default ({ goods }: GoodsInfoProps) => {
    const [showPreview, setShowPreview] = useState(false);
    const [previewIndex, setPreviewIndex] = useState(0);
    const getBorderStyle = (index: number) => {
        if (goods?.imageUrls.length === 1) {
            return { ...styles.goodsInfoImageFirst, ...styles.goodsInfoImageLast };
        }
        if (index === 0) return styles.goodsInfoImageFirst;
        const length = goods?.imageUrls.length;
        if (length - 1 === index) return styles.goodsInfoImageLast;
        return undefined;
    };

    return <View style={styles.goodsInfoContainer}>
        <View style={styles.goodsInfoPriceContainer}>
            <Text style={styles.goodsInfoPriceCurrency}>$</Text>
            <Text style={styles.goodsinfoPrice}>{goods?.goodsPrice}</Text>
        </View>
        <View style={styles.goodsInfoTextContainer}>
            <Text style={styles.goodsInfoTextTitle}>{goods?.goodsName}</Text>
            <Text style={styles.goodsInfoTextDetail}>
                {goods?.goodsDescribe}
            </Text>
        </View>
        <View style={styles.goodsInfoImageListContainer}>
            {
                Array.isArray(goods?.imageUrls) && goods?.imageUrls.map((img, index) => <TouchableOpacity key={`image_${index}`}
                    activeOpacity={1} onPress={() => {
                        setPreviewIndex(index);
                        setShowPreview(true);
                    }}>
                    <SeekitImage
                        style={[styles.goodsInfoImage, getBorderStyle(index)]}
                        source={{ uri: img }}
                        width={styles.goodsInfoImage.width}
                        resizeMethod="resize" resizeMode="contain"
                    /></TouchableOpacity>)
            }

            {
                Array.isArray(goods?.videoUrls) && goods?.videoUrls.map((video, index) => <Video source={{ uri: video }}
                    key={`video_${index}`}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode={Video.RESIZE_MODE_CONTAIN}
                    useNativeControls
                    style={styles.goodsInfoImageVideo}
                />)
            }

        </View>
        {
            Array.isArray(goods?.imageUrls) && <ImageView
                images={goods.imageUrls.map(uri => ({ uri }))}
                imageIndex={previewIndex}
                visible={showPreview}
                onRequestClose={() => setShowPreview(false)}

            />
        }

    </View>;
};
