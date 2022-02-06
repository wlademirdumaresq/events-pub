import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email): Promise<User>;
  findByUsername(username): Promise<User>;
}

export { IUsersRepository };
