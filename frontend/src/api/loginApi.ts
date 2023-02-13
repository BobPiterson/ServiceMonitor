import {baseRequest} from "./baseRequest";
import {serverResponses} from "../types/ServerResponseEnum";

export const loginApi = async (login: string, password: string, captcha: string): Promise<{ success: boolean, message: string }> => {
    const result = await baseRequest("/user/auth", {login, password, captcha})
    if (result.status === serverResponses.success) {
        return {success: true, message: result.response.token}
    } else {
        return {success: false, message: result.response}
    }
}