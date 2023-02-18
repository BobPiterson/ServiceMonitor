import {createContext, Dispatch, SetStateAction} from "react";

export const serviceContext = createContext<{
    service: string,
    setService: null | Dispatch<SetStateAction<string>>
}>({
    service: '',
    setService: null,
})