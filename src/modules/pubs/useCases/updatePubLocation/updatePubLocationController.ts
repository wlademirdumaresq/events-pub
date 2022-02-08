import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePubLocationUseCase } from "./updatePubLocationUseCase";

class UpdatePubLocationController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body;
    const {... search } = request.params;
    const id: string = search.id as string;

    const user_id = request.body.user_token.user.id;
    
    const updatePubLocationUseCase = container.resolve(UpdatePubLocationUseCase);

    const updated_pub = await updatePubLocationUseCase.execute(id, user_id, { latitude, longitude });
    
    return response.status(200).send(updated_pub);
  }
  
}

export { UpdatePubLocationController };
