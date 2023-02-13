import {createContext, Dispatch, SetStateAction} from "react";

interface IUser {
    token: string,
    login: string,
    permission: string
}

export const AuthContext = createContext<{
    user: IUser,
    setUser: null | Dispatch<SetStateAction<IUser>>
}>({
    user: {token: '', login:'', permission: ''},
    setUser: null,
})