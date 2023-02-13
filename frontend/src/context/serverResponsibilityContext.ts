import {createContext, Dispatch, SetStateAction} from "react";

export const serverResponsibilityContext = createContext<{
    status: boolean,
    setStatus: null | Dispatch<SetStateAction<boolean>>
}>({
    status: true,
    setStatus: null,
})