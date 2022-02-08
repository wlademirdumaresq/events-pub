import { getRepository, Repository, UpdateResult } from "typeorm";

import { ICreatePubDTO } from "../../dtos/ICreatePubDTO";
import { IUpdatePubLocationDTO } from "../../dtos/IUpdatedPubLocationDTO";
import { IUpdatePubDTO } from "../../dtos/IUpdatePubDto";
import { Pub } from "../../entities/Pub";
import { IPubsRepository } from "../IPubsRepository";

class PubsRepository implements IPubsRepository {
  private repository: Repository<Pub>;

  constructor() {
    this.repository = getRepository(Pub);
  }

  async create(
    user_id: string,
    { name, description, latitude, longitude }: ICreatePubDTO
  ): Promise<void> {
    await this.repository.query(
      "INSERT INTO pubs (name, description, location, user_id)" +
        "VALUES ($1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326), $5)",
      [name, description, latitude, longitude, user_id]
    );

    return Promise.resolve(undefined);
  }

  async findById(id: string): Promise<Pub> {
    const pub = await this.repository.findOne({ id, active: true });

    return pub;
  }

  async findAll(): Promise<Pub[]> {
    const pub = await this.repository.find({ active: true });

    return pub;
  }

  async update(
    id: string,
    user_id: string,
    { name, description }: IUpdatePubDTO
  ): Promise<UpdateResult> {
    const pub = await this.repository.findOne(id);

    const newValues = {
      name: !name ? pub.name : name,
      description: !description ? pub.description : description,
    };

    const updated_pub = await this.repository.query(
      "UPDATE pubs SET name = $1, description = $2 " +
        "WHERE id = $3 AND user_id = $4",
      [newValues.name, newValues.description, id, user_id]
    );

    return updated_pub;
  }

  async updateLocation(
    id: string,
    user_id: string,
    { latitude, longitude }: IUpdatePubLocationDTO
  ): Promise<UpdateResult> {
    const updated_pub = await this.repository.query(
      "UPDATE pubs SET location = ST_SetSRID(ST_MakePoint($1, $2), 4326)" +
        "WHERE id = $3 AND user_id = $4",
      [latitude, longitude, id, user_id]
    );

    return updated_pub;
  }

  async delete(id: string, user_id: string): Promise<any> {
    const pub = await this.repository.findOne({ id, active: true, user_id });

    if (!pub) {
      return false;
    }

    pub.active = false;

    const updated_pub = await this.repository.save(pub);

    return updated_pub;
  }
}

export { PubsRepository };
