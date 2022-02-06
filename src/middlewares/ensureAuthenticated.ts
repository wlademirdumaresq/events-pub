import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const session = verify(token, "0cb6aaaeae511c4a0cab75d7e489dda4");
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(session.sub);

    if (!user) {
      throw new Error("User does not exists");
    }

    request.body.user_token = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        active: user.active,
        role: user.role,
      },
      session,
    };
    next();
  } catch {
    throw new Error("Invalid token!");
  }
}
