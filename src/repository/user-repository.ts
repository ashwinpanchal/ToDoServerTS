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
}
