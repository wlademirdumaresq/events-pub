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

  async create({
    name,
    description,
    latitude,
    longitude
  }: ICreatePubDTO): Promise<void> {
    await this.pubsRepository.create({ name, description, latitude, longitude });
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
