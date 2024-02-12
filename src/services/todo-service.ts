import repository from "../repository";
import { TodoInterface } from "../config/dbConfig";

export class TodoService {
  todoRepository;
  constructor() {
    this.todoRepository = new repository.TodoRepository();
  }

  async createTodo(data: TodoInterface): Promise<TodoInterface> {
    try {
      const todo = await this.todoRepository.create(data);
      return todo;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw { error };
    }
  }
}