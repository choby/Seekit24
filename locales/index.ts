import * as Localization from "expo-localization";
import en from './lang/en';
import zh from './lang/zh';
import km from './lang/km';
import I18n from "i18n-js";
import AsyncStorage from "@react-native-community/async-storage";

const LOCALE = "LOCALE";
const getLocale = async () => {
    let locale = await AsyncStorage.getItem(LOCALE);
    if (!!!locale)
        locale = Localization.locale;
    AsyncStorage.setItem(LOCALE, locale);
    return locale;
}

const setLocale = (locale: string) => {
    AsyncStorage.setItem(LOCALE, locale);
    I18n.locale = locale;
}

(async () => {
    setLocale(await getLocale());
})();

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    en,
    zh,
    km
};

export { I18n, setLocale, getLocale };