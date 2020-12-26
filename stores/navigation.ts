import { action, observable } from "mobx";



export default class NavigationState {
    constructor() {

    }

    @observable
    public homeFocusTabName: string = "HOME";

    @observable
    public homePagePositions: {
        [tab: string]: boolean;
    } = {
            "HOME": true,
        };

    @action
    public setHomeFocusTabName = (name: string) => {
        this.homeFocusTabName = name;
    };

    @action
    public setHomePagePositions = (tab: string, isTop: boolean) => {
        this.homePagePositions[tab] = isTop;
    };
}