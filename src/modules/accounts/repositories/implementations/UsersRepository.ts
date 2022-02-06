import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    password,
    username,
    name,
    email,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ password, username, name, email });

    await this.repository.save(user);
    return Promise.resolve(undefined);
  }

  async findByEmail(email): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findByUsername(username): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }
}

export { UsersRepository };
