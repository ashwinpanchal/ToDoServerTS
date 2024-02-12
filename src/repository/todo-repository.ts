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
}
