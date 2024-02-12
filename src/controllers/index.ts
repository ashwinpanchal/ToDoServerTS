import { signup, login, me } from "./user-controller";
import { create, getAllByUserID } from "./todo-controllers";

export const userController = {
  signup,
  login,
  me,
};

export const todoController = {
  create,
  getAllByUserID,
};
