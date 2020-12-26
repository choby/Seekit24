import Map from "@/components/Map";
import { useStore } from "@/stores";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useState } from "react";

export default observer(() => {
    const navigation = useNavigation<Navigation>();
    const publishState = useStore("goodsPublishState");
    const [placeId] = useState<string | undefined>(publishState.place.plcaceId);

    return <Map selectedPlaceId={placeId}
        onBackPress={() => navigation.goBack()} onComfirm={placeId => {
            publishState.setPlace(placeId);
            navigation.goBack();
        }} />;
});



