import controllerType from "../types/controllerType";
import {UsersModel} from "../models/UsersModel";
import {ServerStatuses} from "../serverStatuses/ServerStatuses";
import {SHA512} from "../utils/SHA512";
import {verifyCaptchaService} from "../services/verifyCaptchaService";
import {makeJWTService} from "../services/makeJWTService";

export const regUserController: controllerType = async (req, res) => {
    try {
        if (!(req.body.login && req.body.password && req.body.email && req.body.captcha)) return res.status(ServerStatuses.Error).json({message: 'Not enough parameters!'})
        if (!(await verifyCaptchaService(req.body.captcha))) return res.status(ServerStatuses.Error).json({message: 'You are not human!'})

        const hashPassword = SHA512(req.body.password)
        const user = await UsersModel.create({
            login: req.body.login,
            password: hashPassword,
            email: req.body.email
        })
        const token = makeJWTService(user.id)
        res.status(ServerStatuses.OK).json({token})
    } catch (error) {
        if (error instanceof Error && error.name === 'SequelizeUniqueConstraintError') {
            res.status(ServerStatuses.Error).json({message: 'A user with this name or email already exists!'})
        } else {
            console.log(error)
        }
    }
}