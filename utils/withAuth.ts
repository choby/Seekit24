import NavigationHelper from "@/navigation/helper";
import { SessionStorage } from "../infrastructures/storages";
export default (func?: () => void) => {
    withAuthDelegate(func)();
};

export const withAuthDelegate = (func?: () => void) => {
    const sessionStorage = new SessionStorage();
    return (
        async () => {
            if (!!!func) return;
            const session = await sessionStorage.getSession();
            if (!!!session || session.timeout) {
                NavigationHelper.goLogin();
                return;
            }
            func();
        }
    );
};