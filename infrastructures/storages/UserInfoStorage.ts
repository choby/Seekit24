import AsyncStorage from '@react-native-community/async-storage';
import { User } from '@/types/data/User';


export class UserInfoStorage {
    private USERINFO = "USERINFO";
    setUserInfo = async (user: User) => {
        await AsyncStorage.setItem(this.USERINFO, JSON.stringify(user));
    }

    getUserInfo = async () => {
        const user = await AsyncStorage.getItem(this.USERINFO);
        if (user)
            return JSON.parse(user) as User;
    }

    removeUserInfo = async () => {
        await AsyncStorage.removeItem(this.USERINFO);
    }
}

