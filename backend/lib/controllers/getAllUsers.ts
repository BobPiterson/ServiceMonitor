import controllerType from "../types/controllerType";
import {UsersModel} from "../models/UsersModel";
import {ServerStatuses} from "../serverStatuses/ServerStatuses";

export const getAllUsers: controllerType = async (req, res) => {
    if (req.user) {
        const user = await UsersModel.findOne({where: {id: req.user}, attributes: ['login']})
        if (user?.login === 'admin') {
            const data = await UsersModel.findAll({raw: true, order: [['id', 'ASC']], attributes: ['id', 'login', 'email']})
            return res.status(ServerStatuses.OK).json({data})
        }
    } else {
        return res.status(ServerStatuses.Error).json({message: 'Don`t authorized!'})
    }
}