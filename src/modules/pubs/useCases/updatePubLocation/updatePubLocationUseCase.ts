import { inject, injectable } from "tsyringe";
import { UpdateResult } from "typeorm";
import { AppError } from "../../../../errors/AppError";
import { IUpdatePubLocationDTO } from "../../dtos/IUpdatedPubLocationDTO";

import { IPubsRepository } from "../../repositories/IPubsRepository";

@injectable()
class UpdatePubLocationUseCase {
  constructor(
    @inject("PubsRepository")
    private pubsRepository: IPubsRepository
  ) {}

  async execute(id: string, user_id: string, 
    { latitude,
      longitude}: IUpdatePubLocationDTO): Promise<any> {

    if (!latitude || !longitude) {
      throw new AppError("Latitude and Longitude must be provided");
    }
        
    const updated_pub = await this.pubsRepository.updateLocation(id, user_id, { latitude, longitude });

    return updated_pub;
  }

}

export { UpdatePubLocationUseCase };
