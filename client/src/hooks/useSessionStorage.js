import { useState } from "react";


export function useSessionStorage(key){
    const [value, setValue] = useState(() => JSON.parse(sessionStorage.getItem(key)));

    function setSessionStorage(newValue){
        if (newValue) {
            sessionStorage.setItem(key, JSON.stringify(newValue));
            setValue(newValue);
        } else {
            sessionStorage.removeItem(key);
            setValue(null);
        }
    }
    return [value, setSessionStorage];
};