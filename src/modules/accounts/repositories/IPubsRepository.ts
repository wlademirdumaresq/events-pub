import { ICreatePubDTO } from "../dtos/ICreatePubDTO";
import { Pub } from "../entities/Pub";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IPubsRepository {
  create(data: ICreatePubDTO): Promise<void>;
  findById(id: string): Promise<Pub>;
  findByName(name: string): Promise<Pub>;
  findAll(): Promise<Pub[]>;
}

export { IPubsRepository };
