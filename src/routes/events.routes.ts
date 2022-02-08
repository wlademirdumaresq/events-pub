import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import { pubAuthenticate } from "../middlewares/pubAuthenticate";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateEventController } from "../modules/events/useCases/createEvent/createEventController";
import { FindEventByIdController } from "../modules/events/useCases/findEventById/findEventByIdController";
import { FindEventsController } from "../modules/events/useCases/findEvents/findEventsController";
import { UpdateEventController } from "../modules/events/useCases/updateEvent/updateEventController";
import { DeleteEventController } from "../modules/events/useCases/deleteEvent/deleteEventController";

const eventsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createEventController = new CreateEventController();
const findEventByIdController = new FindEventByIdController();
const findEventsController = new FindEventsController();
const updateEventController = new UpdateEventController();
const deleteEventController = new DeleteEventController();

eventsRoutes.post(
  "/",
  ensureAuthenticated,
  pubAuthenticate,
  createEventController.handle
);

eventsRoutes.get("/", ensureAuthenticated, findEventsController.handle);

eventsRoutes.get("/:id", ensureAuthenticated, findEventByIdController.handle);

eventsRoutes.put(
  "/:id",
  ensureAuthenticated,
  pubAuthenticate,
  updateEventController.handle
);

eventsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  pubAuthenticate,
  deleteEventController.handle
);

export { eventsRoutes };
