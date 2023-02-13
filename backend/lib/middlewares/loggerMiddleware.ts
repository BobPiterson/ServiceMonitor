import controllerType from "../types/controllerType";
import {getTime} from "../utils/getTime";
import {getIpAddress} from "../utils/getIpAddress";

export const loggerMiddleware: controllerType = (req, res, next) => {
    console.log(`Request "${req.url}" from "${getIpAddress(req)}" at ${getTime()}`)
    next()
}