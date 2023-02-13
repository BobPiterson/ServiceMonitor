import controllerType from "../types/controllerType";
import {verifyTokenService} from "../services/verifyTokenService";


export const verifyTokenMiddleware: controllerType = (req, res, next) => {
    try {
        if (req.headers.authorization)
            req.user = Number(verifyTokenService(req.headers.authorization))
    } catch (e) {
    } finally {
        next()
    }
}