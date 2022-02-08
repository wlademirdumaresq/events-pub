import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import { pubAuthenticate } from "../middlewares/pubAuthenticate";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreatePubController } from "../modules/pubs/useCases/createPub/createPubController";
import { FindPubByIdController } from "../modules/pubs/useCases/findPubById/findPubByIdController";
import { FindPubsController } from "../modules/pubs/useCases/findPubs/findPubsController";
import { UpdatePubController } from "../modules/pubs/useCases/updatePub/updatePubController";
import { UpdatePubLocationController } from "../modules/pubs/useCases/updatePubLocation/updatePubLocationController";
import { DeletePubController } from "../modules/pubs/useCases/deletePub/deletePubController";

const pubsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createPubController = new CreatePubController();
const findPubByIdController = new FindPubByIdController();
const findPubsController = new FindPubsController();
const updatePubController = new UpdatePubController();
const updatePubLocationController = new UpdatePubLocationController();
const deletePubController = new DeletePubController();

pubsRoutes.post(
  "/",
  ensureAuthenticated,
  pubAuthenticate,
  createPubController.create
);

pubsRoutes.get("/", ensureAuthenticated, findPubsController.handle);

pubsRoutes.get("/:id", ensureAuthenticated, findPubByIdController.handle);

pubsRoutes.put(
  "/:id",
  ensureAuthenticated,
  pubAuthenticate,
  updatePubController.handle
);

pubsRoutes.put(
  "/:id/location",
  ensureAuthenticated,
  pubAuthenticate,
  updatePubLocationController.handle
);

pubsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  pubAuthenticate,
  deletePubController.handle
);

export { pubsRoutes };
