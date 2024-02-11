import jwt from "jsonwebtoken";

import repository from "../repository";
import { User, UserInterface } from "../config/dbConfig";
import { CreateUserServiceInterface } from "./interfaces";

export class UserService {
  userRepository;
  constructor() {
    this.userRepository = new repository.UserRepository();
  }

  async create(data: UserInterface): Promise<CreateUserServiceInterface> {
    try {
      const existingUser = await User.findOne({ username: data.username });
      if (existingUser) {
        return { token: "", success: false };
      }
      const user = await this.userRepository.create(data);
      const token = jwt.sign({ id: user._id }, "SECRET", {
        expiresIn: "1d",
      });
      return { token, success: true };
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}
