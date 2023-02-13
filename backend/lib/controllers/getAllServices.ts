import controllerType from "../types/controllerType";
import {ServerStatuses} from "../serverStatuses/ServerStatuses";
import {MonitorModel} from "../models/MonitorModel";

export const getAllServices: controllerType = async (req, res) => {
    if (req.user) {
        const data = await MonitorModel.findAll({
            raw: true,
            order: [['id', 'ASC']],
            attributes: ['url', 'inf_s', 'note']
        })
        console.log(data)
        return res.status(ServerStatuses.OK).json({data})
    } else {
        return res.status(ServerStatuses.Error).json({message: 'Don`t authorized!'})
    }
}