import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePubUseCase } from "./updatePubUseCase";

class UpdatePubController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, latitude, longitude } = request.body;
    const {... search } = request.params;
    const id: string = search.id as string;
    
    const updatePubUseCase = container.resolve(UpdatePubUseCase);

    const updated_pub = await updatePubUseCase.execute(id, { name, description, latitude, longitude });
    
    return response.status(200).send(updated_pub);
  }
  
}

export { UpdatePubController };
