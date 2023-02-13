import {Router} from "express";
import {getAllUsers} from "../controllers/getAllUsers";

export const adminRouter = Router()

adminRouter.get('/getAllUsers', getAllUsers)