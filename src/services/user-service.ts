import jwt from "jsonwebtoken";

import repository from "../repository";
import { UserInterface } from "../config/dbConfig";
import env from "../config/serverConfig";

export class UserService {
  userRepository;
  constructor() {
    this.userRepository = new repository.UserRepository();
  }

  async signup(
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
      const token = jwt.sign({ id: user._id }, env.JWT_SECRET, {
        expiresIn: "1d",
      });
      return { token, success: true };
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async login(
    data: UserInterface
  ): Promise<{ token: string; success: boolean }> {
    try {
      const response = await this.userRepository.getUserByUsernameAndPassword(
        data
      );
      const user = response.user;
      if (response.success && user) {
        const token = jwt.sign({ id: user._id }, env.JWT_SECRET, {
          expiresIn: "1d",
        });
        return { token, success: true };
      } else {
        return { token: "", success: false };
      }
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async me(userId: string): Promise<{ username: string; success: boolean }> {
    try {
      const response = await this.userRepository.getUserByID(userId);
      const user = response.user;
      if (response.success && user) {
        return { username: user.username, success: true };
      } else {
        return { username: "", success: false };
      }
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
}
