//import * as Updates from 'expo-updates';
import { useEffect } from "react";

export function useOTA() {
    useEffect(() => {
        performUpdate();
    }, []);

    const performUpdate = async () => {
        // const update = await Updates.checkForUpdateAsync();
        // if (update.isAvailable) {
        //     alert('正在准备更新');
        //     await Updates.fetchUpdateAsync();
        //     alert("更新完成");
        //     Updates.reloadAsync();
        // }
        // else {
        //     alert('已经是最新版本！');
        // }
    };
}