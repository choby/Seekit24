import { Logging } from "@/utils/logging";
import * as FileSystem from 'expo-file-system';
const hash = require("object-hash");

export default class ImageCache {
    private cacheDir = FileSystem.cacheDirectory + "images/";
    constructor() {
        this.ensureDirExists();
    }

    private async ensureDirExists() {
        const dirInfo = await FileSystem.getInfoAsync(this.cacheDir);
        if (!dirInfo.exists) {
            await FileSystem.makeDirectoryAsync(this.cacheDir, { intermediates: true });
        }
    }

    /**
     * 获取图片缓存路径
     * @param uri 图片标识
     */
    public async get(uri: string): Promise<string | undefined> {
        const arr = uri.split("?")[0].split("/");
        const key = hash({ key: arr[arr.length - 1] });
        const path = this.cacheDir + key;
        const imageInfo = await FileSystem.getInfoAsync(path);
        if (imageInfo.exists)
            return path;
        const downloadResumable = FileSystem.createDownloadResumable(uri, path, {});
        try {
            const local = (await downloadResumable.downloadAsync())?.uri;
            return local ?? uri;
        } catch (e) {
            Logging.error(e);
        }
    }
}