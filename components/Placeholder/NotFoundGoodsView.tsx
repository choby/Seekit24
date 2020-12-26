import React from 'react';
import { View } from "react-native";
import PlaceHolderContent from "./PlaceHolderContent";
import styles from './styles';

type NotFoundGoodsViewProps = {
    isEmpty?: boolean;
    text?: string;
};

export default class extends React.Component<NotFoundGoodsViewProps>{
    render() {
        const { isEmpty, text, children } = this.props;
        const component = isEmpty === true ? <View style={styles.viewContainer}>
            <PlaceHolderContent type="notfoundgoods" text={text ?? "The product does not exist or has been deleted"} />
        </View> : children;
        return component;
    }
}