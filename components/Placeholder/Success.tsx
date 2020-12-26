import React from 'react';
import PlaceHolderContent from "./PlaceHolderContent";

type SuccessViewProps = {
    text: string;
};

export default class extends React.Component<SuccessViewProps>{
    render() {
        const { text } = this.props;
        return <PlaceHolderContent type="success" text={text} />;
    }
}