import {NextFunction, Request, Response} from "express";

export default interface controllerType {
    (req: Request, res: Response, next: NextFunction): void
}
