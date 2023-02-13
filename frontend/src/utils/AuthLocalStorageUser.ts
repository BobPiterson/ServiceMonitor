import {SetAuthHeaders} from "./SetAuthHeaders";
import {getUser} from "../api/getUser";
import {serverResponses} from "../types/ServerResponseEnum";

export const AuthLocalStorageUser = async (): Promise<{ user: { token: string, login: string, permission: string }, status: serverResponses }> => {
    let token = localStorage.getItem('Authorization')
    token = token ? token : ''
    SetAuthHeaders(token)
    const res = await getUser()

    if (res.status === serverResponses.success) {
        const login = res.user.login
        return {user: {token, login, permission: login}, status: res.status}
    } else {
        return {user: {token: "", login: "", permission: ""}, status: res.status}
    }
}