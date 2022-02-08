import { UpdateResult } from "typeorm";
import { ICreatePubDTO } from "../dtos/ICreatePubDTO";
import { IUpdatePubLocationDTO } from "../dtos/IUpdatedPubLocationDTO";
import { IUpdatePubDTO } from "../dtos/IUpdatePubDto";
import { Pub } from "../entities/Pub";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IPubsRepository {
  create(data: ICreatePubDTO): Promise<void>;
  findById(id: string): Promise<Pub>;
  findByName(name: string): Promise<Pub>;
  findAll(): Promise<Pub[]>;
  update(id: string, data: IUpdatePubDTO): Promise<UpdateResult>;
  updateLocation(id: string, data: IUpdatePubLocationDTO): Promise<UpdateResult>;
  delete(id: string): Promise<UpdateResult>;
}

export { IPubsRepository };
