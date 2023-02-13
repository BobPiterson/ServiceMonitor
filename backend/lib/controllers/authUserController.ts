import controllerType from "../types/controllerType";
import {makeJWTService} from "../services/makeJWTService";
import {UsersModel} from "../models/UsersModel";
import {ServerStatuses} from "../serverStatuses/ServerStatuses";
import {SHA512} from "../utils/SHA512";
import {verifyCaptchaService} from "../services/verifyCaptchaService";


export const authUserController: controllerType = async (req, res) => {
    try {
        if (!(req.body.login && req.body.password)) return res.status(ServerStatuses.Error).json({message: 'Not enough parameters!'})
        if (!(await verifyCaptchaService(req.body.captcha))) return res.status(ServerStatuses.Error).json({message: 'You are not human!'})

        const hashPassword = SHA512(req.body.password)
        const user = await UsersModel.findOne({
            where: {password: hashPassword, login: req.body.login},
            attributes: ['id']
        })
        if (user) {
            const token = makeJWTService(user.id)
            res.status(ServerStatuses.OK).json({token})
        } else {
            res.status(ServerStatuses.Error).json({message: 'Wrong name or password!'})
        }
    } catch (e) {
        console.log(e)
    }
}
