import Divider from "@/components/Divider";
import { SeekitImage } from '@/components/SeekitImage';
import useState from "@/hooks/useState";
import { Leads } from '@/types/data/Leads';
import { EnumLeadsType } from "@/types/enums";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ImageView from "react-native-image-viewing";
import LeadsGoods from "../LeadsGoods";
import styles from './styles';

interface LeadsInfoProps {
    leads: Leads;
}

export default ({ leads }: LeadsInfoProps) => {
    const [showPreview, setShowPreview] = useState(false);
    const [previewIndex, setPreviewIndex] = useState(0);
    const getBorderStyle = (index: number) => {
        if (index === 0) return styles.leadsInfoImageFirst;
        const length = leads?.images.length;
        if (length - 1 === index) return styles.leadsInfoImageLast;
        return undefined;
    };
    return <>
        {
            leads.typed === EnumLeadsType.ADS && <>
                <Divider height={12} />
                <LeadsGoods goods={leads.goodsInfo} />
            </>
        }
        <View style={styles.leadsInfoContainer}>

            <View style={styles.leadsInfoTextContainer}>
                <Text style={styles.leadsInfoTextDetail}>
                    {leads.description}
                </Text>
            </View>
            <View style={styles.leadsInfoImageListContainer}>
                {
                    Array.isArray(leads.images) && leads.images.map((img, index) => <TouchableOpacity
                        key={`leads_detail_image_${index}`}
                        activeOpacity={1} onPress={() => {
                            setPreviewIndex(index);
                            setShowPreview(true);
                        }}>
                        <SeekitImage

                            style={[styles.leadsInfoImage, getBorderStyle(index)]}
                            source={{ uri: img }}
                            width={styles.leadsInfoImage.width}
                            resizeMethod="resize" resizeMode="contain"

                        />
                    </TouchableOpacity>)
                }
            </View>
        </View>
        {
            Array.isArray(leads.images) && <ImageView
                images={leads.images.map(uri => ({ uri }))}
                imageIndex={previewIndex}
                visible={showPreview}
                onRequestClose={() => setShowPreview(false)}

            />
        }

    </>;
};