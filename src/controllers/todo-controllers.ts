import { Request, Response } from "express";

import service from "../services";

const todoService = new service.TodoService();

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userId = req.headers["userId"];
    const { title, description }: { title: string; description: string } =
      req.body;
    if (typeof userId === "string") {
      const user = await todoService.createTodo({ title, description, userId });
      return res.status(201).json({
        data: user,
        message: "Sucessfully created a Todo",
        success: true,
        err: {},
      });
    }
    return res.status(500).json({
      message: "Failed to create a todo",
    });
  } catch (error) {
    console.log("Something went wrong at controller layer");
    throw { error };
  }
};
