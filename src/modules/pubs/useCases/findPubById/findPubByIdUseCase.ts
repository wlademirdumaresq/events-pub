import { inject, injectable } from "tsyringe";

import { Pub } from "../../entities/Pub";
import { IPubsRepository } from "../../repositories/IPubsRepository";

@injectable()
class FindPubByIdUseCase {
  constructor(
    @inject("PubsRepository")
    private pubsRepository: IPubsRepository
  ) {}

  async execute(id: string): Promise<Pub> {
    const pub = await this.pubsRepository.findById(id);

    return pub;
  }
}

export { FindPubByIdUseCase };
