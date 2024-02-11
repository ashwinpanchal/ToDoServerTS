import { Schema, model } from "mongoose";

export interface UserInterface {
  username: string;
  password: string;
}

export interface TodoInterface {
  title: String;
  description: String;
  done: Boolean;
  userId: String;
}

const userSchema = new Schema<UserInterface>({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const todoSchema = new Schema<TodoInterface>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
  userId: { type: String, required: true },
});

export const User = model<UserInterface>("User", userSchema);
export const Todo = model<TodoInterface>("Todo", todoSchema);
