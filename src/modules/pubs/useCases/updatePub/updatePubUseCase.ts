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

  async execute(
    id: string,
    user_id: string,
    { name, description }: IUpdatePubDTO
  ): Promise<UpdateResult> {
    const updated_pub = await this.pubsRepository.update(id, user_id, {
      name,
      description,
    });

    return updated_pub;
  }
}

export { UpdatePubUseCase };
