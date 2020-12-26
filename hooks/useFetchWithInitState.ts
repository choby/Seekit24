import { useEffect, useRef, useState } from "react";

export default (): [initializing: boolean,
    useFetch: (effect: React.EffectCallback | (() => Promise<void>)) => Promise<void>,
    useFetchEffect: (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => void
] => {
    const [initializing, setInitializing] = useState(true);
    const isFirstFocus = useRef(true);

    async function useFetch(effect: React.EffectCallback | (() => Promise<void>)) {
        if (isFirstFocus.current)
            setInitializing(true);
        await effect();
        setInitializing(false);
        isFirstFocus.current = false;
    }

    const useFetchEffect = (effect: React.EffectCallback, deps?: React.DependencyList | undefined) => {
        useEffect(() => {
            useFetch(effect);
        }, deps);
    };

    return [initializing, useFetch, useFetchEffect];
};