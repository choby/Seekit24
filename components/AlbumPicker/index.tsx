import IconFont from '@/components/Iconfont';
import * as MediaLibrary from 'expo-media-library';
import { observer } from "mobx-react";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from 'react-native';
import { Picker, Radio } from "reactive";
import styles from './styles';
interface AlbumPickerProps {
    album?: MediaLibrary.Album;
    onSelect: (album?: MediaLibrary.Album) => void;
}

export default observer(({ album, onSelect }: AlbumPickerProps) => {
    //const publishState = useStore("publishState");
    const [albums, setAlbums] = useState<MediaLibrary.Album[]>([]);
    const picker = useRef<Picker>(null);
    const isUnmounted = useRef(false);

    useEffect(() => {
        loadAblumsAsync();
        return () => { isUnmounted.current = true; };
    }, []);


    const loadAblumsAsync = async () => {
        try {
            const albums = await MediaLibrary.getAlbumsAsync();
            if (!isUnmounted.current)
                setAlbums(albums);
        }
        catch {
            (function () { })();
        }
    };

    return <Picker
        ref={picker}
        label={album?.title ?? "Select Album"}
        labelStyle={styles.label}
        //labelActiveStyle={styles.labelActive}
        cancelable={true}
        activeIcon={<IconFont name="dingbubiaotixiala1x-copy" size={14} />}
        inactiveIcon={<IconFont name="dingbubiaotixiala1x" size={14} />}

    >
        <View style={styles.radioContainer} >
            <Radio checkedIcon={<IconFont name="duihao1x" size={20} />}
                iconPosition="right"
                onChange={value => {
                    const selected = albums.find(x => x.id === value);
                    onSelect(selected);
                    picker.current?.close();
                }}
                value={album?.id ?? "-1"}
            >
                <Radio.Item label={<Text style={styles.labelItem}>All</Text>} value={"-1"} />
                {
                    albums.filter(a => a.assetCount > 0).map(a => <Radio.Item key={a.id} label={<Text style={styles.labelItem}>{a.title}</Text>} value={a.id} />)
                }
            </Radio>
        </View>
    </Picker>;
});