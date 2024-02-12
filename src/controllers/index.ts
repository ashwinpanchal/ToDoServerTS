import { signup, login, me } from "./user-controller";
import { create } from "./todo-controllers";

export const userController = {
  signup,
  login,
  me,
};

export const todoController = {
  create,
};
