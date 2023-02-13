import {Router} from "express";
import {getAllServices} from "../controllers/getAllServices";

export const servicesRouter = Router()

servicesRouter.get('/getAllServices', getAllServices)