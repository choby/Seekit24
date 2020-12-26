import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import theme from '@/theme';
import styles from './styles/myBrowsing';
import Iconfont from '@/components/Iconfont';
import { getLogicPixel } from '@/utils/pixelRatio';
import { FlatList } from 'react-native-gesture-handler';
import NextTimeEarly from '../components/NextTimeEarly';
import { GoodsRecordsDateline } from '@/types/data/GoodsRecordsDateline';
import { getDatelines } from '@/services/goods';
import { EnumRecordType } from '@/types/enums';

export default () => {
    const [datelines, setDatelines] = useState<GoodsRecordsDateline[]>([]);

    useEffect(() => {
        refresh();
    }, []);

    const refresh = async () => {
        const datelines = await getDatelines(EnumRecordType.HISTORY);
        if (datelines) {
            setDatelines(datelines);
        }
    }
    return <ScrollView style={[theme.container, styles.container]}>
        {
            datelines && Array.isArray(datelines) && datelines.map(line => <View style={styles.dateGoodsListContainer} key={line.key}>
                <View>
                    <Text style={styles.dateText}>{line.key}</Text>
                </View>
                <FlatList horizontal data={line.list} showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <View style={styles.item} key={`${line.key}-${item.goodsId}`}>
                         <NextTimeEarly state={item.state} style={styles.tag} />
                        <Image style={styles.itemImage} source={{ uri: item.coverUrl }} width={styles.itemImage.width} resizeMethod="resize" resizeMode="contain" />
                        <View style={styles.itemTitleContainer}>
                            <Text style={styles.itemTitleTxt} numberOfLines={2}>{item.goodsName}</Text>
                        </View>
                        <View style={styles.goodsInfoAssetsContainer}>
                            <View style={styles.goodsInfoAssets}>
                                <Iconfont name="liuyanlb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssetsText}>{item.chatCount}</Text>
                            </View>
                            <View style={styles.goodsInfoAssets}>
                                <Iconfont name="shoucangb1x" size={getLogicPixel(18)} /><Text style={styles.goodsInfoAssetsText}>{item.pageViewCount}</Text>
                            </View>
                        </View>
                        <View style={styles.itemPriceContainer}>
                            <Text style={styles.itemPriceCurrency}>$<Text style={styles.itemPriceAmount}>{item.goodsPrice}</Text></Text>
                        </View>
                    </View>}>

                </FlatList>

            </View>
            )
        }
    </ScrollView>
}