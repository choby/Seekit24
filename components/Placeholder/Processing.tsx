import React from 'react';
import PlaceHolderContent from "./PlaceHolderContent";

type ProcessingViewProps = {
    text: string;
};

export default class extends React.Component<ProcessingViewProps>{
    render() {
        const { text } = this.props;
        return <PlaceHolderContent type="processing" text={text} />;
    }
}