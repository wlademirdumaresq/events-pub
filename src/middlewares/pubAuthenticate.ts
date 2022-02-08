import { NextFunction, Request, Response } from "express";

import { RolesApplicationEnum } from "../enums/RolesApplicationEnum";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function pubAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user } = request.body.user_token;
  const usersRepository = new UsersRepository();

  const { role } = await usersRepository.findById(user.id);

  if (role !== RolesApplicationEnum.PUB) {
    throw new AppError("User isn't an pub");
  }
  next();
}
