import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserPubUseCase } from "./createUserPubUseCase";

class CreateUserPubController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username, name, email } = request.body;

    const createUserUseCase = container.resolve(CreateUserPubUseCase);

    await createUserUseCase.execute({ password, username, name, email });
    return response.status(201).send();
  }
}

export { CreateUserPubController };
