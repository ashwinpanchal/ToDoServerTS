import { User, UserInterface } from "../config/dbConfig";

export class UserRepository {
  async create(data: UserInterface): Promise<UserInterface> {
    try {
      const user = new User({
        ...data,
      });
      await user.save();
      return user;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }

  async getUserByUsername(data: {
    username: string;
  }): Promise<{ user: UserInterface | null; success: boolean }> {
    try {
      const user = await User.findOne({ ...data });
      if (user) {
        return { user, success: true };
      }
      return { user, success: false };
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw { error };
    }
  }
}
