import React from "react";
import { View, ViewStyle } from "react-native";

export interface DividerProps {
    style?: ViewStyle;
    height?: number;
}

export default (props: DividerProps) => <View style={{ width: "100%", height: props.height ?? 20, ...props.style }}></View>