import { Router } from "express";

import { adminRouter } from "./user-routes";

export const router = Router();

router.use("/auth", adminRouter);
