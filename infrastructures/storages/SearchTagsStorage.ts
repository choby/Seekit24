import AsyncStorage from '@react-native-community/async-storage';

export class SearchTagsStorage {
    private SEARCHTAGS = "SEARCHTAGS";

    addTag = async (tag: string) => {
        const tags = (await this.getTags()) ?? [];
        if (tags.includes(tag)) {
            const index = tags.findIndex(t => t === tag);
            tags.splice(index, 1);
        }
        tags.unshift(tag);
        if (tags.length > 15) tags.splice(15, 1);// 最多缓存15个关键词
        await AsyncStorage.setItem(this.SEARCHTAGS, JSON.stringify(tags));
    }

    getTags = async () => {
        const tags = await AsyncStorage.getItem(this.SEARCHTAGS);
        if (tags)
            return JSON.parse(tags) as string[];
        return [];
    }

    clearTags = async () => {
        await AsyncStorage.removeItem(this.SEARCHTAGS);
    }
}
