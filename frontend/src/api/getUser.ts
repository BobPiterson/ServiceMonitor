import {baseRequest} from "./baseRequest";
import {serverResponses} from "../types/ServerResponseEnum";

export const getUser = async (): Promise<{ status: serverResponses, user: { login: string, id: number } }> => {
    const result = await baseRequest("/user/get")
    if (result.status === serverResponses.success) {
        return {status: result.status, user: {login: result.response.login, id: result.response.id}}
    } else {
        return {status: result.status, user: {login: '', id: -1}}
    }
}