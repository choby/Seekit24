import React from 'react';
import PlaceHolderContent from "./PlaceHolderContent";

type RemindViewProps = {
    text: string;
};

export default class extends React.Component<RemindViewProps>{
    render() {
        const { text } = this.props;
        return <PlaceHolderContent type="info" text={text} />;
    }
}