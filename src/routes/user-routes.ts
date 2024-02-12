import { Router } from "express";

import { userController } from "../controllers";
import { authenticateJwt } from "../middlewares/user-middleware";

export const adminRouter = Router();

adminRouter.post("/signup", userController.signup);
adminRouter.post("/login", userController.login);
adminRouter.get("/me", authenticateJwt, userController.me);
