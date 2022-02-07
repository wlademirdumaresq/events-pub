import { getRepository, Repository } from "typeorm";

import { ICreatePubDTO } from "../../dtos/ICreatePubDTO";
import { Pub } from "../../entities/Pub";
import { IPubsRepository } from "../IPubsRepository";

class PubsRepository implements IPubsRepository {
  private repository: Repository<Pub>;

  constructor() {
    this.repository = getRepository(Pub);
  }

  async create({
    name,
    description,
    latitude,
    longitude,
  }: ICreatePubDTO): Promise<void> {
    await this.repository.query(
      'INSERT INTO pubs (name, description, location)' +
      'VALUES ($1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326))',
      [name, description, latitude, longitude]
    );
    
    return Promise.resolve(undefined);
  }

  async findById(id: any): Promise<Pub> {
    const pub = await this.repository.findOne({ id });

    return pub;
  }

  async findByName(name: string): Promise<Pub> {
    const pub = await this.repository.findOne({ where: [
        { name: name },
      ]}
    );

    return pub; 
  }

  async findAll(): Promise<Pub[]> {
    const pub = await this.repository.find();

    return pub;
  }
}

export { PubsRepository };
