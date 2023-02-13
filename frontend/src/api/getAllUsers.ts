import {baseRequest} from "./baseRequest";
import {serverResponses} from "../types/ServerResponseEnum";

export const getAllUsers = async (): Promise<{ success: boolean, data: any[] }> => {
    const result = await baseRequest("/admin/getAllUsers")
    return {success: result.status === serverResponses.success, data: result.response.data}
}