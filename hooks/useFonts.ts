import { useFonts } from '@use-expo/font';

export default () => {
    const [fontsLoaded] = useFonts({
        "AirbnbCerealBook": require("@/assets/fonts/AirbnbCerealBook.ttf"),
        "AirbnbCerealMedium": require("@/assets/fonts/AirbnbCerealMedium.ttf"),
        "DINAlternate-Bold": require("@/assets/fonts/din-alternate-bold.ttf")
    });
    return fontsLoaded;
};