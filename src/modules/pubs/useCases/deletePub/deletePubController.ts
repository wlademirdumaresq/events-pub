import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePubUseCase } from "./deletePubUseCase";

class DeletePubController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {... search } = request.params;
    const id: string = search.id as string;

    const user_id = request.body.user_token.user.id;
    
    const deletePubUseCase = container.resolve(DeletePubUseCase);

    const pub = await deletePubUseCase.execute(id, user_id);
    
    return response.status(200).send(pub);
  }
}

export { DeletePubController };
