import controllerType from "../types/controllerType";
import {UsersModel} from "../models/UsersModel";
import {ServerStatuses} from "../serverStatuses/ServerStatuses";

export const getUserController: controllerType = async (req, res) => {
    if (req.user) {
        const user = await UsersModel.findOne({where: {id: req.user}, attributes: ['login']})
        if (user) {
            return res.status(ServerStatuses.OK).json({id: req.user, login: user.login})
        } else {
            return res.status(ServerStatuses.Error).json({message: 'Wrong token!'})
        }
    } else {
        return res.status(ServerStatuses.Error).json({message: 'Don`t authorized!'})
    }
}