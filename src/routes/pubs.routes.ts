import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import { CreatePubController } from "../modules/accounts/useCases/createPub/createPubController";

const pubsRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createPubController = new CreatePubController();

pubsRoutes.post("/", createPubController.create);

pubsRoutes.get("/", createPubController.getByName);

// pubsRoutes.get("/", createPubController.getAll);

export { pubsRoutes };
