import React from 'react';
import { TouchableOpacity, View, ViewProps } from "react-native";
import IconFont from "../Iconfont";
import styles from './styles/actions';


interface ActionsProps extends ViewProps {
    onPressMyLocation: () => void;
}

export default ({ onPressMyLocation, ...otherProps }: ActionsProps) => {
    return <View style={styles.actions} {...otherProps}>
        <TouchableOpacity activeOpacity={1} style={styles.icon} onPress={onPressMyLocation}>
            <IconFont name="dingwei-ditu1x" size={22} />
        </TouchableOpacity>
    </View>;
};