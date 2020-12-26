import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import theme from '@/theme';
import styles from './styles/myFollow';
import Button from '@/components/Button';
import { UserFollowPageInfo } from '@/types/data/UserFollows';
import { getFollows } from '@/services/user';
import Avator from '@/components/Avator';
import { getLogicPixel } from '@/utils/pixelRatio';
import { EnumGender, EnumFollowState } from '@/types/enums';

export default () => {
    const [pageInfo, setPageInfo] = useState<UserFollowPageInfo>();

    useEffect(() => {
        refresh();
    }, []);

    const refresh = async () => {
        const data = await getFollows("followme");
        if (data) {
            setPageInfo(data.pageInfo);
        }
    }
    return <ScrollView style={theme.container}>
        {
            pageInfo && Array.isArray(pageInfo?.list) && pageInfo.list.map(item => <View style={styles.userInfoItemConainer} key={item.followId}>
                <Avator source={{ uri: item.avatarUrl }} size={getLogicPixel(48)} />
                <View style={styles.userInfoContainer}>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoNickName}>{item.nickName}</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoGender}>{item.gender === EnumGender.FEMALE ? "women" : "man"}</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={styles.userInfoStatus}>Release {item.pushTotal} products | men | in Release 5 products | men | in</Text>
                    </View>
                </View>
                {
                    item.state === EnumFollowState.FOLLOWING && <Button type="secondary" size="sm" style={styles.followButton}>Following</Button>
                }
                {
                    item.state === EnumFollowState.FOLLOWER && <Button type="primary" size="sm" style={styles.followButton}>Follow</Button>
                }
            </View>)
        }
    </ScrollView>
}