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

  async create(
    user_id: string,
    { name, description, latitude, longitude, cep, number }: ICreatePubDTO
  ): Promise<void> {
    await this.pubsRepository.create(user_id, {
      name,
      description,
      latitude,
      longitude,
      cep,
      number,
    });
  }

  async findById(id: string): Promise<Pub> {
    const pub = await this.pubsRepository.findById(id);

    return pub;
  }

  async findAll(): Promise<Pub[]> {
    const pubs = await this.pubsRepository.findAll();

    return pubs;
  }
}

export { CreatePubUseCase };
