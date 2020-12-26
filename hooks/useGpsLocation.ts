import { reverseGeocoding } from "@/services/googleMapService";
import { stores } from "@/stores";
import { EnumErrorType } from "@/types/enums";
import { LocationInfo } from "@/types/location";
import { SystemUtils } from "@/utils";
import { Logging } from "@/utils/logging";
import * as Location from 'expo-location';
import { LocationAccuracy } from "expo-location";
import { useState } from "react";


export default (): [LocationInfo, (openModal?: boolean, resetLoadingStatus?: boolean) => Promise<LocationInfo | undefined>] => {
    const [location, setLocation] = useState<LocationInfo>({ loading: false, coords: stores.appState.location.coords });

    const loadLocationAsync = async (openModal?: boolean, resetLoadingStatus?: boolean) => {
        if (resetLoadingStatus !== false)
            setLocation({ loading: true });
        const enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            const error = EnumErrorType.GPSISOFF;
            stores.appState.setLocation({ error });
            setLocation({ loading: false, error });

            return;
        }

        const status = await SystemUtils.permissions.checkLocation(openModal);
        if (status !== 'granted') {
            const error = EnumErrorType.NOPERMISSIONS;
            stores.appState.setLocation({ error });
            setLocation({ loading: false, error });
            return;
        }

        try {
            await Location.enableNetworkProviderAsync();
            const location = await Location.getCurrentPositionAsync({
                accuracy: LocationAccuracy.Balanced
            });
            setLocation({
                loading: false,
                coords: location.coords
            });
            stores.appState.setLocation({
                coords: location.coords
            });
            const address = await reverseGeocoding(location.coords.latitude, location.coords.longitude);
            stores.appState.setLocation({
                address: address?.results?.[0],
                coords: location.coords
            });
            const state = {
                loading: false,
                address: address?.results?.[0],
                coords: location.coords
            };
            setLocation(state);
            return state;
        } catch (e) {
            stores.appState.setLocation({
                error: `获取定位失败:${e.message}`
            });
            setLocation({ loading: false, error: `获取定位失败:${e.message}` });
            Logging.error(e);
        }
    };

    const getLocation = async (openModal?: boolean, resetLoadingStatus?: boolean) => {
        return await loadLocationAsync(openModal, resetLoadingStatus);
    };

    return [location, getLocation];
};