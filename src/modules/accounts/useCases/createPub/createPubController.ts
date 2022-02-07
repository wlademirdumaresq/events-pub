import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePubUseCase } from "./createPubUseCase";

class CreatePubController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, latitude, longitude } = request.body;

    const createPubUseCase = container.resolve(CreatePubUseCase);

    await createPubUseCase.create({ name, description, latitude, longitude });
    return response.status(201).send();
  }

  async getAll(request: Request, response: Response): Promise<Response> {
    const createPubUseCase = container.resolve(CreatePubUseCase);

    const pubs = await createPubUseCase.findAll();
    return response.status(200).send(pubs);
  }

  async getByName(request: Request, response: Response): Promise<Response> {
    const {... search } = request.query;
    const name: string = search.name as string;
    
    const createPubUseCase = container.resolve(CreatePubUseCase);

    const pub = await createPubUseCase.findByName(name);
    
    return response.status(200).send(pub);
  }
}

export { CreatePubController };
