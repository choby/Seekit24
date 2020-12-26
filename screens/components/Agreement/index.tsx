import BottomModal from '@/components/BottomModal';
import PlaceHolder from "@/components/Placeholder";
import useNetworkListener from "@/hooks/useNetworkListener";
import { EnumQuoteUri } from '@/types/enums';
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import WebView from "react-native-webview";
import styles from './styles';

const windowHeight = pixelRatio.screenSize.height - getLogicPixel(80);
const style = { height: windowHeight };
export default () => {
    const [isConnected, fetchNetState] = useNetworkListener();
    const bottomModal = useRef<BottomModal>(null);
    const bottomModal2 = useRef<BottomModal>(null);
    return <View>
        <Text style={styles.agreement}>
            Have read and agree <Text style={styles.agreementBold} onPress={async () => {
                await fetchNetState();
                bottomModal.current?.open();
            }}>《Seekit24 User Agreement》</Text>

            and

            <Text style={styles.agreementBold} onPress={async () => {
                await fetchNetState();
                bottomModal2.current?.open();
            }}>《Seekit24 Privacy Policy》</Text>

        </Text>
        <BottomModal ref={bottomModal}>
            <PlaceHolder.NoNetworkView onRefresh={fetchNetState} isDisconnected={!isConnected}>
                <WebView source={{ uri: EnumQuoteUri.AGREEMENT_EN }} style={style} javaScriptEnabled onMessage={e => e.nativeEvent.data === "close" && bottomModal.current?.close()} />
            </PlaceHolder.NoNetworkView>
        </BottomModal>
        <BottomModal ref={bottomModal2}>
            <PlaceHolder.NoNetworkView onRefresh={fetchNetState} isDisconnected={!isConnected}>
                <WebView source={{ uri: EnumQuoteUri.PRIVACYPOLICY_EN }} style={style} javaScriptEnabled onMessage={e => e.nativeEvent.data === "close" && bottomModal2.current?.close()} />
            </PlaceHolder.NoNetworkView>
        </BottomModal>
    </View>;
};