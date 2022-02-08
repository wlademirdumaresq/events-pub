import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePubLocationUseCase } from "./updatePubLocationUseCase";

class UpdatePubLocationController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body;
    const {... search } = request.params;
    const id: string = search.id as string;
    
    const updatePubLocationUseCase = container.resolve(UpdatePubLocationUseCase);

    const updated_pub = await updatePubLocationUseCase.execute(id, { latitude, longitude });
    
    return response.status(200).send(updated_pub);
  }
  
}

export { UpdatePubLocationController };
