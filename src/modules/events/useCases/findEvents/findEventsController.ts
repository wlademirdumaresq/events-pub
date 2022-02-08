import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindEventsUseCase } from "./findEventsUseCase";

class FindEventsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findEventsUseCase = container.resolve(FindEventsUseCase);

    const pubs = await findEventsUseCase.execute();
    return response.status(200).send(pubs);
  }
}

export { FindEventsController };
