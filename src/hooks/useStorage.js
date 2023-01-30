import { useState, useEffect } from 'react';

export default function useStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}