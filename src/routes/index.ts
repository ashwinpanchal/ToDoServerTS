import { Router } from "express";

import { adminRouter } from "./user-routes";
import { todoRouter } from "./todo-routes";

export const router = Router();

router.use("/auth", adminRouter);
router.use("/todo", todoRouter);
