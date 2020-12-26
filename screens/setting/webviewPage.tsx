import PlaceHolder from "@/components/Placeholder";
import useNetworkListener from "@/hooks/useNetworkListener";
import { Pages } from '@/navigation/pages';
import theme from '@/theme';
import pixelRatio, { getLogicPixel } from '@/utils/pixelRatio';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

const windowHeight = pixelRatio.screenSize.height - getLogicPixel(80);
const style = { height: windowHeight };

export interface WebviewRouteParams {
    url: string;
}

export default () => {
    const navigation = useNavigation<Navigation>();
    const url = useRoute<Route<Pages.SettingWebviewPage>>().params.url;
    const [isConnected, fetchNetState] = useNetworkListener();

    return <View style={[theme.statusBar, theme.screenView]}>
        <PlaceHolder.NoNetworkView isDisconnected={!isConnected} onRefresh={fetchNetState}>
            <WebView source={{ uri: url }} style={style} javaScriptEnabled onMessage={e => e.nativeEvent.data === "close" && navigation.goBack()} />
        </PlaceHolder.NoNetworkView>
    </View>;
};