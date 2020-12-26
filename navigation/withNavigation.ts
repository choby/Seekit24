import { useNavigation } from "@react-navigation/native";

export default function withNavigation<T extends React.ComponentClass<any, any>>(ComponentType: T) {
    const navigation = useNavigation();
    if (!!!ComponentType.defaultProps) ComponentType.defaultProps = {};
    ComponentType.defaultProps.navigation = navigation;
    return ComponentType;
}
