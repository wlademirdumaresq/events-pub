import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindPubByIdUseCase } from "./findPubByIdUseCase";

class FindPubByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {... search } = request.params;
    const id: string = search.id as string;
    
    const findPubByIdUseCase = container.resolve(FindPubByIdUseCase);

    const pub = await findPubByIdUseCase.execute(id);
    
    return response.status(200).send(pub);
  }
}

export { FindPubByIdController };
