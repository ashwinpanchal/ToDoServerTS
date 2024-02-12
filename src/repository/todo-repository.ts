import { todo } from "node:test";
import { Todo, TodoInterface } from "../config/dbConfig";

export class TodoRepository {
  async create(data: TodoInterface): Promise<TodoInterface> {
    try {
      const todo = await Todo.create({ ...data });
      await todo.save();
      return todo;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }

  async getAllByUserId(userId: string): Promise<TodoInterface[]> {
    try {
      const todos = await Todo.find({ userId });
      return todos;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }

  async update(
    todoId: string,
    data: Partial<TodoInterface>
  ): Promise<TodoInterface | null> {
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(todoId, data, {
        new: true,
      });
      return updatedTodo;
    } catch (error) {
      console.log("Something went wrong at the repository level");
      throw { error };
    }
  }
}
