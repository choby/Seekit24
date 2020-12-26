import NetInfo from "@react-native-community/netinfo";
import React from 'react';
import { View } from 'react-native';
import Button from "../Button";
import PlaceHolderContent from "./PlaceHolderContent";
import styles from './styles';

interface NoNetworkViewProps {
    isDisconnected?: boolean;
    text?: string;
    onRefresh?: () => void;
}

interface NoNetworkViewState {
    isDisconnected: boolean;
}

export default class extends React.Component<NoNetworkViewProps, NoNetworkViewState>{
    constructor(props: NoNetworkViewProps) {
        super(props);
        this.state = {
            isDisconnected: props.isDisconnected ?? true
        };
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<NoNetworkViewProps>, _prevState: Readonly<Record<string, unknown>>) {

        if (prevProps.isDisconnected !== this.props.isDisconnected) {
            return {
                isDisconnected: this.props.isDisconnected ?? true,
            };
        }
        return null;
    }



    async componentDidMount() {
        if (this.props.isDisconnected === undefined) {
            const netState = await NetInfo.fetch();
            this.setState({
                isDisconnected: !netState.isConnected
            });
        }
    }

    componentDidUpdate(_prevProps: NoNetworkViewProps, _prevState: NoNetworkViewProps, snapshot: NoNetworkViewState) {
        if (snapshot) {
            this.setState({ ...snapshot });
        }
    }

    render() {
        const { text, children, onRefresh } = this.props;
        const { isDisconnected, } = this.state;
        let component = isDisconnected === true ? <>
            <PlaceHolderContent type="nonetwork" text={text ?? "Please check your internet connection"} />
            <Button size="md" style={styles.refreshButton} onPress={onRefresh}>Refresh</Button>
        </>
            : children;
        if (isDisconnected === true) {
            component = <View style={styles.viewContainer}>
                {component}
            </View>;
        }
        return component;
    }
}