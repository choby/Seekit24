import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

interface Keyboard {
    height?: number;
}

export default () => {
    const [keyboard, setKeyboard] = useState<Keyboard>({});

    const keyboardDidShow = (e: KeyboardEvent) => {
        if (e.endCoordinates) setKeyboard({ ...keyboard, height: e.endCoordinates.height });

    };

    const keyboardDidHide = (_e: KeyboardEvent) => {
        setKeyboard({ ...keyboard, height: 0 });
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return keyboard;
};