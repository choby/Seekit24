import { Dispatch, SetStateAction, useEffect, useRef, useState as ReactUseState } from "react";

function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

function useState<S>(initialState?: S | (() => S)): [S | undefined, Dispatch<SetStateAction<S | undefined>>] {
    const isAlive = useRef(true);
    useEffect(() => {
        return () => { isAlive.current = false; };
    }, []);

    const [state, setState] = ReactUseState(initialState);
    const setSafeState = (value: SetStateAction<S | undefined>) => {
        if (isAlive.current) {
            setState(value);
        }
    };
    return [state, setSafeState];
}

export default useState;