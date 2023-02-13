import {baseRequest} from "./baseRequest";
import {serverResponses} from "../types/ServerResponseEnum";

export const getAllServices = async (): Promise<{ success: boolean, data: any[] }> => {
    const result = await baseRequest("/services/getAllServices")
    return {success: result.status === serverResponses.success, data: result.response.data}
}