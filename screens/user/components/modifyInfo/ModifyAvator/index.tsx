import BottomModal from "@/components/BottomModal";
import Divider from "@/components/Divider";
import NavigationHelper from "@/navigation/helper";
import InfoList, { InfoItem } from "@/screens/components/InfoList";
import { Color } from "@/theme/variables";
import { User } from "@/types/data/User";
import React from 'react';
import { SafeAreaView, StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import ImageView from "react-native-image-viewing";
import styles from './styles';

const itemStyle: StyleProp<ViewStyle> = { flex: 1, alignItems: "center" };

interface ModifyAvatorProps {
    user: User;
}

interface ModifyAvatorState {
    openStatus: boolean;
}


export default class extends React.Component<ModifyAvatorProps, ModifyAvatorState> {
    /**
     *
     */
    constructor(props: ModifyAvatorProps) {
        super(props);
        this.state = {
            openStatus: false
        };
    }
    private bottomModal = React.createRef<BottomModal>();

    open() {
        this.bottomModal.current?.open();
    }

    close() {
        this.bottomModal.current?.close();
    }

    render() {
        const { user } = this.props;
        const { openStatus } = this.state;

        const listItems: InfoItem[] = [
            {
                label: "View avator",
                onPress: () => this.setState({ openStatus: true }),
                labelContainerstyle: itemStyle,
                hasIcon: false,
                disabled: !(user.avatarUrl?.length > 0)
            }, {
                label: "Photo album",
                onPress: () => {
                    this.close();
                    NavigationHelper.goSelectSinglePhoto();
                },
                labelContainerstyle: itemStyle,
                hasIcon: false
            }, {
                label: "Take picture",
                onPress: () => {
                    this.close();
                    NavigationHelper.goTakeSinglePhoto();
                },
                labelContainerstyle: itemStyle,
                hasIcon: false
            }];

        return <><BottomModal ref={this.bottomModal}>
            <SafeAreaView>
                <InfoList items={listItems} />
                <Divider height={8} style={{ backgroundColor: Color.PAGEBACK }} />
                <TouchableOpacity style={styles.cancelButton} onPress={() => this.bottomModal.current?.close()}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </BottomModal>
            <ImageView
                images={[{ uri: user.avatarUrl }]}
                imageIndex={0}
                visible={openStatus}
                onRequestClose={() => this.setState({ openStatus: false })}
                presentationStyle="overFullScreen"
            />
        </>;
    }
}