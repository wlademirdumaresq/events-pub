import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { IUpdatePubLocationDTO } from "../../dtos/IUpdatedPubLocationDTO";

import { IPubsRepository } from "../../repositories/IPubsRepository";

@injectable()
class UpdatePubLocationUseCase {
  constructor(
    @inject("PubsRepository")
    private pubsRepository: IPubsRepository
  ) {}

  async execute(id: string, 
    { latitude,
      longitude}: IUpdatePubLocationDTO): Promise<UpdateResult> {
        
    const updated_pub = await this.pubsRepository.updateLocation(id, { latitude, longitude });

    return updated_pub;
  }

}

export { UpdatePubLocationUseCase };
