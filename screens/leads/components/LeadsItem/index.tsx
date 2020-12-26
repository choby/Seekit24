import Avator from '@/components/Avator';
import Moment from '@/components/Moment';
import { SeekitImage } from '@/components/SeekitImage';
import { Pages } from '@/navigation/pages';
import theme from '@/theme';
import { Leads } from '@/types/data/Leads';
import { EnumLeadsType } from "@/types/enums";
import { getLogicPixel } from '@/utils/pixelRatio';
import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LeadsGoods from "../LeadsGoods";
import Reply from './replay';
import styles from './styles';

type LeadsItemProps = {
    actions?: React.ReactElement | React.ReactElement[];
    data: Leads;
    onPressMessageIcon?: () => void;
    showTag?: boolean;
    onTagPress?: (typed: EnumLeadsType) => void;
} & ({
    showReply?: false;
    onReadyReply?: never;
} | {
    showReply: true,
    onReadyReply: () => void;
});

const renderImage = (item: string, index: number, isFirst: boolean, isLast: boolean, total: number) => {
    const Image = <SeekitImage
        key={`image_${index}`} source={{ uri: item }}
        width={getLogicPixel(89)}
        height={getLogicPixel(89)}
        resizeMethod="resize"
        resizeMode="cover"
        style={[styles.contentImage, isFirst ? styles.contentImageFirst : undefined, isLast ? styles.contentImageLast : undefined]}
    />;
    return total > 3 && isLast ? <View key={`imageContainer_${index}`} style={styles.contentImageItemContainer}>
        <View style={styles.hasMore}><Text style={styles.hasMoreText}>+{total - 3}</Text></View>
        {Image}
    </View> : Image;
};

const Leadsitem = function ({ actions, showReply, onReadyReply, data, onPressMessageIcon, showTag, onTagPress }: LeadsItemProps) {
    const navigation = useNavigation<Navigation>();
    return <View style={[theme.paddingHorizontal, styles.demandItemContainer, styles.backgroundWhite]}>
        <View style={styles.contentUserContainer}>
            <TouchableOpacity activeOpacity={1} style={styles.contentUserInfoContainer}>
                <Avator source={{ uri: data.avatarUrl }} size={getLogicPixel(48)} />
                <View style={styles.contentUserInfoDescContainer}>
                    <Text style={styles.contentUserInfoNameText} numberOfLines={1}>{data.userName}</Text>
                    <Text style={styles.contentUserInfoPositionText} numberOfLines={1}>
                        <Moment calendar={true}>{data.createTime}</Moment>
                    </Text>
                </View>
            </TouchableOpacity>
            {actions}
        </View>
        <View style={styles.contentContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(Pages.LeadsDetail, { id: data.demandId })}>
                <Text style={styles.contentText} numberOfLines={2}>
                    {showTag && <Text style={styles.adsHash} onPress={() => onTagPress?.(data.typed)}>#{data.typed === EnumLeadsType.ADS ? "Ads" : "Buying"}&nbsp;</Text>}
                    {data.description}
                </Text>
                {
                    Array.isArray(data.images) && data.images.length > 0 &&
                    <View style={styles.contentImageList}>
                        {data.images.map((item, index) => renderImage(item, index, index === 0, index === data.images.length - 1, data.images.length))}
                    </View>
                }
            </TouchableOpacity>
            {
                data.typed === EnumLeadsType.ADS && <LeadsGoods goods={data.goodsInfo} />
            }
            {
                showReply === true && <Reply leads={data} onReadyReply={onReadyReply!} onPressMessageIcon={onPressMessageIcon} />
            }
        </View>
    </View>;
};

export default memo(Leadsitem) as typeof Leadsitem;