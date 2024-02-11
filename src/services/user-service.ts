import jwt from "jsonwebtoken";

import repository from "../repository";
import { UserInterface } from "../config/dbConfig";

export class UserService {
  userRepository;
  constructor() {
    this.userRepository = new repository.UserRepository();
  }

  async create(
    data: UserInterface
  ): Promise<{ token: string; success: boolean }> {
    try {
      const existingUser = await this.userRepository.getUserByUsername({
        username: data.username,
      });
      if (existingUser.success) {
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
