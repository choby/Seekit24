import Navigation from "@/navigation";
import { refreshToken } from "@/services/session";
import "@/theme/reactiveTheme";
import { } from "@/types/prototype";
import "@/utils/globalHandler";
import * as Permissions from "expo-permissions";
import * as SplashScreen from "expo-splash-screen";
import { observer } from "mobx-react";
import React, { useEffect, useState } from 'react';
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useFonts from "./hooks/useFonts";
import useGpsLocation from "./hooks/useGpsLocation";
import useMoment from "./hooks/useMoment";
import useNetworkListener from "./hooks/useNetworkListener";
import { useOTA } from "./hooks/useOTA";

function App() {
  const fontsLoaded = useFonts();
  const [refreshingToken, setRefreshingToken] = useState(true);
  const [, getLocation] = useGpsLocation();
  const [, , , , useGlobalNetworkStateListener] = useNetworkListener();
  //const colorScheme = useColorScheme();
  useMoment();
  useOTA();
  useGlobalNetworkStateListener();
  //useNotification();

  useEffect(() => {
    setRefreshingToken(true);
    refreshToken().then(() => setRefreshingToken(false));
    (async () => {
      await Permissions.getAsync(Permissions.LOCATION);
      getLocation();
    })();
  }, []);


  useEffect(() => {
    if (fontsLoaded && !refreshingToken) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, refreshingToken]);

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null;
  }



  return <SafeAreaProvider>
    <StatusBar hidden={false} barStyle="dark-content" />
    <SafeAreaView edges={['right', 'bottom', 'left']} style={{ flex: 1 }}>
      <Navigation colorScheme={"light"} />
    </SafeAreaView>
  </SafeAreaProvider>;
}

export default observer(App);


