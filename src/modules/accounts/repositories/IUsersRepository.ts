import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
