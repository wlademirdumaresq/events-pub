import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

import { PubsRepository } from "../../modules/pubs/repositories/implementations/PubsRepository ";
import { IPubsRepository } from "../../modules/pubs/repositories/IPubsRepository";

import { IEventsRepository } from "../../modules/events/repositories/IEventsRepository";
import { EventsRepository } from "../../modules/events/repositories/implementations/EventsRepository ";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPubsRepository>(
  "PubsRepository", 
  PubsRepository
);

container.registerSingleton<IEventsRepository>(
  "EventsRepository", 
  EventsRepository
);

