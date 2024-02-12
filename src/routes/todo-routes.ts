import { Router } from "express";
import { authenticateJwt } from "../middlewares/user-middleware";
import { todoController } from "../controllers";

export const todoRouter = Router();

todoRouter.post("/todos", authenticateJwt, todoController.create);
todoRouter.get("/todos", authenticateJwt, todoController.getAllByUserID);
todoRouter.patch(
  "/todos/:todoId/done",
  authenticateJwt,
  todoController.doneUpdate
);
