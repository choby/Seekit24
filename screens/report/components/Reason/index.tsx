import BottomModal from "@/components/BottomModal";
import Divider from "@/components/Divider";
import InfoList, { InfoItem } from "@/screens/components/InfoList";
import { Color } from "@/theme/variables";
import React, { createRef } from "react";
import { SafeAreaView, StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from './styles';

const itemStyle: StyleProp<ViewStyle> = { flex: 1, alignItems: "center" };

interface ReasonProps {
    onSelect: (reason: string) => void;
}

export default class Reason extends React.Component<ReasonProps> {
    private bottomModal = createRef<BottomModal>();

    open() {
        this.bottomModal.current?.open();
    }

    private onSelect(reason: string) {
        this.props.onSelect(reason);
        this.bottomModal.current?.close();
    }

    render() {

        const listItems: InfoItem[] = [
            {
                label: "Contraband",
                onPress: () => this.onSelect("Contraband"),
                labelContainerstyle: itemStyle,
                hasIcon: false
            }, {
                label: "Suspected of fraud",
                onPress: () => this.onSelect("Suspected of fraud"),
                labelContainerstyle: itemStyle,
                hasIcon: false
            }, {
                label: "The product does not match the description",
                onPress: () => this.onSelect("The product does not match the description"),
                labelContainerstyle: itemStyle,
                hasIcon: false
            }, {
                label: "Advertising Harassment",
                onPress: () => this.onSelect("Advertising Harassment"),
                labelContainerstyle: itemStyle,
                hasIcon: false
            }, {
                label: "Abusive harassment",
                onPress: () => this.onSelect("Abusive harassment"),
                labelContainerstyle: itemStyle,
                hasIcon: false
            }, {
                label: "Other",
                onPress: () => this.onSelect("Other"),
                labelContainerstyle: itemStyle,
                hasIcon: false
            },];

        return <BottomModal ref={this.bottomModal}>
            <SafeAreaView>
                <InfoList items={listItems} />
                <Divider height={8} style={{ backgroundColor: Color.PAGEBACK }} />
                <TouchableOpacity style={styles.cancelButton} onPress={() => this.bottomModal.current?.close()}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </BottomModal>;
    }
}