import type { PageParamsList, Pages } from "@/navigation/pages";
import type { EventMapBase, NavigationProp, NavigationState, ParamListBase, RouteProp } from '@react-navigation/native';

declare global {
    type Navigation<P extends ParamListBase = PageParamsList<Pages>> = NavigationProp<P, keyof ParamListBase, NavigationState, any, EventMapBase>;
    type Route<K extends keyof PageParamsList<Pages>> = RouteProp<PageParamsList<Pages>, K>;
}
