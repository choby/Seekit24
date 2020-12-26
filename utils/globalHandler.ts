import { LogBox } from "react-native";
import * as Sentry from 'sentry-expo';
import { SystemUtils } from ".";

Sentry.init({
    dsn: "https://855cbc4e3a5246f6b37f2c0917d88109@sentry.aoidc.net/9",
    enableInExpoDevelopment: true,
    debug: true,
    enableAutoSessionTracking: true,
    environment: SystemUtils.expoEnv,
    release: SystemUtils.versionBuildNumber
});

if (!__DEV__) {
    console.info = () => { };
    console.log = () => { };

    console.debug = () => { };
    console.trace = () => { };
}
console.warn = () => { };
console.disableYellowBox = true;

LogBox.ignoreLogs(['Require cycle:']);
