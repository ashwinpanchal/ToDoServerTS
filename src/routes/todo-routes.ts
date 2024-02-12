import { Router } from "express";
import { authenticateJwt } from "../middlewares/user-middleware";
import { todoController } from "../controllers";

export const todoRouter = Router();

todoRouter.post("/todos", authenticateJwt, todoController.create);
