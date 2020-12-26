import { stores } from "@/stores";
import NetInfo from "@react-native-community/netinfo";
import { useCallback, useEffect, useState } from "react";

export default (): [boolean, () => void, (effect: React.EffectCallback, didMountExecute?: boolean) => void, (callback: React.EffectCallback, deps: React.DependencyList) => () => void | (() => void | undefined), () => void] => {
    const [isConnected, setIsConnected] = useState(stores.appState.netInfoState.isConnected);

    const fetchNetState = async () => {
        const netState = await NetInfo.fetch();
        setIsConnected(netState.isConnected);
        stores.appState.updateNetInfoState(netState);
    };

    useEffect(() => {
        fetchNetState();
    }, []);

    const useNetworkEffect = (effect: React.EffectCallback, didMountExecute?: boolean) => {
        useEffect(() => {
            if (didMountExecute && isConnected)
                effect();
        }, []);

        useEffect(() => {
            if (isConnected)
                effect();
        }, [isConnected]);
    };

    const useNetworkCallback = (callback: React.EffectCallback, deps: React.DependencyList) => {

        return useCallback(() => {
            if (isConnected)
                return callback();
        }, deps);
    };

    const useGlobalNetworkStateListener = () => {
        useEffect(() => {
            const unsubscribe = NetInfo.addEventListener((state) => {
                stores.appState.updateNetInfoState(state);
            });
            return () => unsubscribe();
        }, []);
    };

    return [isConnected, fetchNetState, useNetworkEffect, useNetworkCallback, useGlobalNetworkStateListener];
};