import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    password,
    username,
    name,
    email,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({ password, username, name, email });
  }
}

export { CreateUserUseCase };
