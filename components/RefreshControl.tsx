import React, { useState } from 'react';
import { RefreshControl } from 'react-native';

interface RefreshControlProps {
    onRefresh?: () => void;
}

export default ({ onRefresh, ...otherProps }: RefreshControlProps) => {
    const [isFetching, setIsFetching] = useState(false);
    const handleRefresh = async () => {
        if (!onRefresh) return;
        setIsFetching(true);
        await onRefresh();
        setIsFetching(false);
    };
    return <><RefreshControl
        {...otherProps}
        refreshing={isFetching}
        onRefresh={handleRefresh}
        colors={['rgb(217, 51, 58)']}
    /></>;
};