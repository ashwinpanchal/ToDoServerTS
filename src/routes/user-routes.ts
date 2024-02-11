import { Router } from "express";

import { userController } from "../controllers";

export const adminRouter = Router();

adminRouter.post("/signup", userController.userCreate);
