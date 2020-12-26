import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import Button from "@/components/Button";

export default () => {
    return <View style={styles.tipContainer}>
        <Text style={styles.notTurnOffGuiderText}>
            Sorry, your current location does not belong to
            Cambodia National Geographic Location
            (Currently the location of the product release is
            only supported in the country of Cambodia Cloth,
            you can manually select the geographical location  of Cambodia).
    </Text>
        <View style={styles.chooseButtonsContainer}>
            <Button type="primary" size="lg" style={styles.chooseButton}>Choose location</Button>
        </View>
    </View>;
}