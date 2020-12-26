import React from 'react';
import { View, ViewProps } from 'react-native';
import PlaceHolderContent from "./PlaceHolderContent";
import styles from './styles';

type NoDataViewProps = {
    isEmpty?: boolean;
    text?: string;
} & ViewProps;

export default class extends React.Component<NoDataViewProps>{
    render() {
        const { isEmpty, text, children, ...otherProps } = this.props;
        let component = isEmpty === true ? <PlaceHolderContent type="empty" text={text ?? "No list information"} /> : children;
        if (isEmpty === true) {
            component = <View style={styles.viewContainer} {...otherProps}>
                {component}
            </View>;
        }
        return component;
    }
}