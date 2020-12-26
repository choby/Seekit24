import BottomModal from '@/components/BottomModal';
import IconFont from "@/components/Iconfont";
import SearchInput from '@/components/SearchInput';
import { search } from '@/services/googleMapService';
import { inject } from '@/stores';
import PublishState from '@/stores/goods/publish';
import { Color } from '@/theme/variables';
import { GoogleLocationResult } from '@/types/data/GoogleMap';
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio';
import { observer } from 'mobx-react';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MarkKeyWords, NavigationBar } from 'reactive';
import styles from './styles/searchPlaceModal';


interface SearchPlaceModalProps {
    publishState?: PublishState;
    onSelect?: (value: GoogleLocationResult) => void;
}

@inject("leadsPublishState")
@observer
export default class SearchPlaceModal extends React.Component<SearchPlaceModalProps, {
    searchKeyword?: string;
    address: GoogleLocationResult[];
}> {
    private fullModal = React.createRef<BottomModal>();

    /**
     *
     */
    constructor(props: any) {
        super(props);

        this.state = {
            searchKeyword: "123",
            address: []
        };
    }

    open() {
        this.fullModal.current?.open();
    }

    close() {
        this.fullModal.current?.close();
    }

    searchGoogleMapAddressList = async () => {
        const { searchKeyword } = this.state;
        if (!!!searchKeyword) return;
        const res = await search(searchKeyword, {
            types: "establishment",
            language: "zh",
            // lat: location.coords?.latitude,
            // lng: location.coords?.longitude
        });
        if (!res) return res;
        if (res.status === "OK" && res.predictions.length > 0) {
            this.setState({ address: res.predictions });
        } else {
            this.setState({ address: [] });
        }
    };

    selectPlace(addr: GoogleLocationResult) {
        this.props.onSelect?.(addr);
        setTimeout(() => {
            this.fullModal.current?.close();
        }, 300);
    }

    render() {
        const { searchKeyword, address } = this.state;
        const { publishState } = this.props;
        return <BottomModal cancelable={false} ref={this.fullModal} >
            <View style={{ height: pixelRatio.screenSize.height - 60, paddingTop: getLogicPixel(20), paddingLeft: getLogicPixel(20), paddingRight: getLogicPixel(20), }}>
                <NavigationBar
                    backLabel={false}
                    titleContainer={<SearchInput
                        autoFocus={true}
                        value={searchKeyword}
                        onChange={(value) => this.setState({ searchKeyword: value })}
                        onFocus={() => { }}
                        onSubmitEditing={() => {
                            this.searchGoogleMapAddressList();
                        }}
                    />}
                    forwardLabel={<Text>Cancel</Text>}

                    style={{ zIndex: 1 }}
                    onPressForward={() => this.fullModal.current?.close()}
                />

                <ScrollView>
                    <View>
                        {
                            address.map(addr => <TouchableOpacity key={addr.place_id} onPress={() => this.selectPlace(addr)}>
                                <View style={[styles.addressItemContainer, styles.addressItemContainerBorder]}>
                                    <View>

                                        <Text style={styles.addressName}>
                                            <MarkKeyWords
                                                markActiveStyle={{ color: Color.ERROR }}
                                                searchStr={addr.structured_formatting.main_text}
                                                keyArr={[searchKeyword!]}
                                            />
                                        </Text>
                                        <Text style={styles.addressDetail}>{addr.structured_formatting.secondary_text}</Text>
                                    </View>

                                    {
                                        publishState?.place.plcaceId === addr.place_id && <IconFont name="duihao1x" />
                                    }
                                </View>
                            </TouchableOpacity>)
                        }
                    </View>
                    {/* <View style={[theme.container]}>
                    <AnotherCountyTip />
                </View> */}
                </ScrollView>
            </View>
        </BottomModal>;
    }
}