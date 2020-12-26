import Map from "@/components/Map";
import { useStore } from "@/stores";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { StatusBar } from "react-native";

export default observer(() => {
    const navigation = useNavigation<Navigation>();
    const publishState = useStore("leadsPublishState");
    const [placeId] = useState<string | undefined>(publishState.place.plcaceId);

    return <><StatusBar barStyle="dark-content" />
        <Map selectedPlaceId={placeId}
            onBackPress={() => navigation.goBack()} onComfirm={placeId => {
                publishState.setPlace(placeId);
                navigation.goBack();
            }} /></>;
});



