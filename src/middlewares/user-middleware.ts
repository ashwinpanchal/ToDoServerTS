import jwt from "jsonwebtoken";
import env from "../config/serverConfig";
import { Request, Response, NextFunction } from "express";

export const authenticateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    const token: string = authorization.split(" ")[1];

    jwt.verify(token, env.JWT_SECRET, (err, payload) => {
      if (err) {
        res.sendStatus(403);
      }
      if (!payload) {
        res.sendStatus(403);
      }
      if (typeof payload === "string") {
        return res.sendStatus(403);
      }

      if (payload) {
        req.headers["userId"] = payload.id;
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
