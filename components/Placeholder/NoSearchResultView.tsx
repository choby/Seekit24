import React from 'react';
import { ScrollView } from 'react-native';
import RefreshControl from '../RefreshControl';
import PlaceHolderContent from "./PlaceHolderContent";
import styles from './styles';

type NoSearchResultViewProps = {
    isEmpty?: boolean;
    text?: string;
} & ({
    canRefresh?: false;
} | {
    canRefresh: true;
    onRefresh: () => void;
});

export default class extends React.Component<NoSearchResultViewProps>{
    render() {
        const { isEmpty, text, children } = this.props;
        let component = isEmpty === true ? <PlaceHolderContent type="nosearchdata" text={text ?? "No search results"} /> : children;
        if (isEmpty === true && this.props.canRefresh === true) {
            component = <ScrollView refreshControl={<RefreshControl onRefresh={this.props.onRefresh} />}
                contentContainerStyle={styles.viewContainer}>
                {component}
            </ScrollView>;
        }
        return component;
    }
}