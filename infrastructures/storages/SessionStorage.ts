import AsyncStorage from '@react-native-community/async-storage';
import { Session } from '@/types/data/Session';




export class SessionStorage {
    private SESSION = "SESSION"
    private EXPIRE = "EXPIRE";
    setSession = async (session: Session) => {
        const now = new Date();
        //每次更新会话时, 设置超时时间, 本地超时时间比服务器超时时间略短
        const expire = now.setDate(now.getDate() + 29.8);
        await AsyncStorage.setItem(this.EXPIRE, expire.toString());
        await AsyncStorage.setItem(this.SESSION, JSON.stringify(session));
    }

    getSession = async () => {
        const str = await AsyncStorage.getItem(this.SESSION);
        if (str) {
            const session = JSON.parse(str) as Session;
            const expire = Number(await AsyncStorage.getItem(this.EXPIRE));
            const now = new Date().getTime();
            // 如果当前时间大于超时时间,则标识会话已过期
            session.timeout = session.timeout || now > expire;
            return session;
        }
    }

    removeSession = async () => {
        await AsyncStorage.removeItem(this.SESSION);
    }
}