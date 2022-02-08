import { inject, injectable } from "tsyringe";

import { Pub } from "../../entities/Pub";
import { IPubsRepository } from "../../repositories/IPubsRepository";

@injectable()
class FindPubsUseCase {
  constructor(
    @inject("PubsRepository")
    private pubsRepository: IPubsRepository
  ) {}

  async execute(): Promise<Pub[]> {
    const pubs = await this.pubsRepository.findAll();

    return pubs;
  }

}

export { FindPubsUseCase };
