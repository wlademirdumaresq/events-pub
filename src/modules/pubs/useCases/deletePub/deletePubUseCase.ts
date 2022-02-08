import { inject, injectable } from "tsyringe";

import { IPubsRepository } from "../../repositories/IPubsRepository";

@injectable()
class DeletePubUseCase {
  constructor(
    @inject("PubsRepository")
    private pubsRepository: IPubsRepository
  ) {}

  async execute(id: string, user_id: string): Promise<void> {
    await this.pubsRepository.delete(id, user_id);
  }
}

export { DeletePubUseCase };
