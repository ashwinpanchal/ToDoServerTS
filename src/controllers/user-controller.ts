import { Request, Response } from "express";

import service from "../services";

const userService = new service.UserService();

export const signup = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;
    const response = await userService.signup({
      username,
      password,
    });
    if (!response.success) {
      return res.status(403).json({ message: "User already exists" });
    }
    return res.json({
      token: response.token,
      message: "User successfully signup",
      success: response.success,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong at controller layer");
    throw { error };
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;
    const response = await userService.login({ username, password });
    if (!response.success) {
      return res.status(403).json({ message: "Invalid username or password" });
    }
    return res.json({
      token: response.token,
      message: "User successfully login",
      success: response.success,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong at controller layer");
    throw { error };
  }
};
