import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindPubsUseCase } from "./findPubsUseCase";

class FindPubsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findPubsUseCase = container.resolve(FindPubsUseCase);

    const pubs = await findPubsUseCase.execute();
    return response.status(200).send(pubs);
  }
}

export { FindPubsController };
