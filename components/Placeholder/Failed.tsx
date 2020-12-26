import React from 'react';
import PlaceHolderContent from "./PlaceHolderContent";

type FailedViewProps = {
    text: string;
};

export default class extends React.Component<FailedViewProps>{
    render() {
        const { text } = this.props;
        return <PlaceHolderContent type="failed" text={text} />;
    }
}