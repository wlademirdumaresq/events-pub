import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { IUpdatePubDTO } from "../../dtos/IUpdatePubDto";

import { Pub } from "../../entities/Pub";
import { IPubsRepository } from "../../repositories/IPubsRepository";

@injectable()
class UpdatePubUseCase {
  constructor(
    @inject("PubsRepository")
    private pubsRepository: IPubsRepository
  ) {}

  async execute(id: string, 
    { name,
      description,
      latitude,
      longitude}: IUpdatePubDTO): Promise<UpdateResult> {
        
    const updated_pub = await this.pubsRepository.update(id, { name, description, latitude, longitude });

    return updated_pub;
  }

}

export { UpdatePubUseCase };
