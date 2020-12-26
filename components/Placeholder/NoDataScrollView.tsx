import React from 'react';
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import RefreshControl from '../RefreshControl';
import PlaceHolderContent from "./PlaceHolderContent";
import styles from './styles';

type NoDataScrollViewProps = ({
    isEmpty?: boolean;
    text?: string;
    style?: StyleProp<ViewStyle>;
} & ({
    canRefresh?: false;
} | {
    canRefresh: true;
    onRefresh: () => void;
})) & ScrollViewProps;

export default class extends React.Component<NoDataScrollViewProps>{
    render() {
        const { isEmpty, text, children, ...otherProps } = this.props;
        let component = isEmpty === true ? <PlaceHolderContent type="empty" text={text ?? "No list information"} /> : children;
        if (isEmpty === true && this.props.canRefresh === true) {
            component = <ScrollView
                refreshControl={<RefreshControl onRefresh={this.props.onRefresh} />}
                {...otherProps}
                contentContainerStyle={styles.viewContainer}
            >
                {component}
            </ScrollView>;
        }
        return component;
    }
}