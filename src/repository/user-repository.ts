import { User, UserInterface } from "../config/dbConfig";

export class UserRepository {
  async create(data: UserInterface): Promise<UserInterface> {
    const user = new User({
      ...data,
    });
    await user.save();
    return user;
  }
}
