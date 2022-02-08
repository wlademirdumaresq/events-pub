import { getRepository, Repository, UpdateResult } from "typeorm";

import { ICreatePubDTO } from "../../dtos/ICreatePubDTO";
import { IUpdatePubDTO } from "../../dtos/IUpdatePubDto";
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

  async findById(id: string): Promise<Pub> {
    const pub = await this.repository.findOne({ id, active: true });

    return pub;
  }

  async findByName(name: string): Promise<Pub> {
    const pub = await this.repository.findOne({ name, active: true });

    return pub; 
  }

  async findAll(): Promise<Pub[]> {
    const pub = await this.repository.find({ active: true });

    return pub;
  }

  async update(id: string, { 
    name,
    description,
    latitude,
    longitude}: IUpdatePubDTO): Promise<UpdateResult> {
      const pub = await this.repository.findOne(id);

      const newValues = {
        name: !name ? pub.name : name,
        description: !description ? pub.description : description,
      };

      const updated_pub = await this.repository.query(
        'UPDATE pubs SET name = $1, description = $2, location = ST_SetSRID(ST_MakePoint($3, $4), 4326)' +
        'WHERE id = $5',
        [name, description, latitude, longitude, id]
      );

    return updated_pub;
  }

  async updateLocation(id: string, { 
    latitude,
    longitude}: IUpdatePubDTO): Promise<UpdateResult> {
      // TO DO: validar latitude e longitude

      const updated_pub = await this.repository.query(
        'UPDATE pubs SET location = ST_SetSRID(ST_MakePoint($1, $2), 4326)' +
        'WHERE id = $3',
        [latitude, longitude, id]
      );

    return updated_pub;
  }

  async delete(id: string): Promise<UpdateResult> {
    const updated_pub = await this.repository.update(id, { active: false });

    return updated_pub;
  }
}

export { PubsRepository };
