import {baseRequest} from "./baseRequest";
import {serverResponses} from "../types/ServerResponseEnum";

export const registerApi = async (login: string, password: string, email: string, captcha: string): Promise<{ success: boolean, message: string }> => {
    const result = await baseRequest("/user/register", {login, password, email, captcha})
    if (result.status === serverResponses.success) {
        return {success: true, message: result.response.token}
    } else {
        return {success: false, message: result.response}
    }
}
