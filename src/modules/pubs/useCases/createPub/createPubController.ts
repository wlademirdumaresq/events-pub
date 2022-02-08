import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePubUseCase } from "./createPubUseCase";

class CreatePubController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, latitude, longitude } = request.body;

    const user_id = request.body.user_token.user.id;

    const createPubUseCase = container.resolve(CreatePubUseCase);

    await createPubUseCase.create(user_id, {
      name,
      description,
      latitude,
      longitude,
    });
    return response.status(201).send();
  }
}

export { CreatePubController };
