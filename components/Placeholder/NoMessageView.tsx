import React from 'react';
import { ScrollView } from 'react-native';
import RefreshControl from '../RefreshControl';
import PlaceHolderContent from "./PlaceHolderContent";
import styles from './styles';

type NoMessageViewProps = {
    isEmpty?: boolean;
    text?: string;
} & ({
    canRefresh?: false;
} | {
    canRefresh: true;
    onRefresh: () => void;
});

export default class extends React.Component<NoMessageViewProps>{
    render() {
        const { isEmpty, text, children } = this.props;
        let component = isEmpty === true ? <PlaceHolderContent type="nomsg" text={text ?? "No message"} /> : children;
        if (isEmpty === true && this.props.canRefresh === true) {
            component = <ScrollView
                refreshControl={<RefreshControl onRefresh={this.props.onRefresh} />}
                contentContainerStyle={styles.viewContainer}
            >
                {component}
            </ScrollView>;
        }
        return component;
    }
}