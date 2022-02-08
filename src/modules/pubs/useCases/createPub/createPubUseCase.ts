import { inject, injectable } from "tsyringe";

import { ICreatePubDTO } from "../../dtos/ICreatePubDTO";
import { Pub } from "../../entities/Pub";
import { IPubsRepository } from "../../repositories/IPubsRepository";

@injectable()
class CreatePubUseCase {
  constructor(
    @inject("PubsRepository")
    private pubsRepository: IPubsRepository
  ) {}

  async create(user_id: string,{
    name,
    description,
    latitude,
    longitude
  }: ICreatePubDTO): Promise<void> {
    await this.pubsRepository.create(user_id, { name, description, latitude, longitude });
  }

  async findById(id: string): Promise<Pub> {
    const pub = await this.pubsRepository.findById(id);

    return pub;
  }

  async findByName(name: string): Promise<Pub> {
    const pub = await this.pubsRepository.findByName(name);

    return pub;
  }

  async findAll(): Promise<Pub[]> {
    const pubs = await this.pubsRepository.findAll();

    return pubs;
  }

}

export { CreatePubUseCase };
