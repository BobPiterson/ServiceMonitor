import {Router} from "express";
import {getUserController} from "../controllers/getUserController";
import {authUserController} from "../controllers/authUserController";
import {regUserController} from "../controllers/regUserController";

export const usersRouter = Router()

usersRouter.get('/get', getUserController)
usersRouter.post('/auth', authUserController)
usersRouter.post('/register', regUserController)