import { SessionStorage, UserInfoStorage } from "@/infrastructures/storages";
import { I18n, setLocale } from "@/locales";
import { getUserInfo } from '@/services/user';
import { Session } from '@/types/data/Session';
import { User } from '@/types/data/User';
import { LocationInfo } from '@/types/location';
import { NetInfoState } from '@react-native-community/netinfo';
import { action, computed, observable, runInAction } from 'mobx';


const sessionStorage = new SessionStorage();
const userInfoStorage = new UserInfoStorage();
type Location = Omit<LocationInfo, "loading">;
export default class AppState {
    /**
     *
     */
    constructor() {

        runInAction(async () => {
            const session = await sessionStorage.getSession();
            this.updateSession(session);
            this.initUserInfo();
        });

    }

    @observable
    public location: Location = {};

    @observable
    public I18n = I18n;

    @observable
    public session?: Session = undefined;

    @observable
    public userInfo?: User = undefined;

    @observable
    public netInfoState: NetInfoState = {
        isConnected: true,
    } as NetInfoState;

    @action.bound
    public setLocale(locale: string) {
        this.I18n.locale = locale;
        setLocale(locale);
    }

    @action.bound
    public updateSession(session?: Session) {
        this.session = session;
    }


    @action
    private initUserInfo() {
        userInfoStorage.getUserInfo().then(userInfo => {
            runInAction(async () => {
                this.userInfo = userInfo;
            });
        });

    }

    @action.bound
    public updateUserInfo() {
        if (!!!this.session || !!!this.session.userId) return;
        getUserInfo().then(remoteUser => {

            if (!!!remoteUser) return;
            runInAction(() => {
                this.userInfo = remoteUser;
            });
            userInfoStorage.setUserInfo(remoteUser);
        });
    }

    @action
    public updateNetInfoState(state: NetInfoState) {
        this.netInfoState = state;
    }

    @action
    public setLocation(location: Location) {
        this.location = location;
    }

    @computed
    public get userIsLogin() {
        return this.session && this.session.accessToken && !this.session.timeout;
    }


}