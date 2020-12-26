import React from 'react';
import Failed from './Failed';
import NoDataScrollView from './NoDataScrollView';
import NoDataView from './NoDataView';
import NoMessageView from "./NoMessageView";
import NoNetworkView from './NoNetworkView';
import NoSearchResultView from './NoSearchResultView';
import NotFoundGoodsView from "./NotFoundGoodsView";
import PlaceHolderContent, { BlankProps } from "./PlaceHolderContent";
import Processing from './Processing';
import Remind from './Remind';
import Success from './Success';

class PlaceHolder extends React.Component<BlankProps> {
    static NoDataView = NoDataView;
    static NoDataScrollView = NoDataScrollView;
    static NoSearchResultView = NoSearchResultView;
    static NoNetworkView = NoNetworkView;
    static NoMessageView = NoMessageView;
    static NotFoundGoodsView = NotFoundGoodsView;

    static defaultProps = {
        type: "empty",
        text: "No list information"
    };
    render() {
        const { type, text } = this.props;
        return <PlaceHolderContent type={type} text={text} />;
    }
}

export default PlaceHolder;
export { Success, Failed, Processing, Remind };
