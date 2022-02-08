import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { PubsRepository } from "../../modules/pubs/repositories/implementations/PubsRepository ";
import { IPubsRepository } from "../../modules/pubs/repositories/IPubsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPubsRepository>(
  "PubsRepository",
  PubsRepository
);
