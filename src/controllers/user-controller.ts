import { Request, Response } from "express";

import service from "../services";

const userService = new service.UserService();

export const userCreate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;
    const response = await userService.create({
      username,
      password,
    });
    if (!response.success) {
      return res.status(403).json({ message: "User already exists" });
    }
    return res.json({
      token: response.token,
      message: "User successfully created",
      success: response.success,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong at controller layer");
    throw { error };
  }
};
