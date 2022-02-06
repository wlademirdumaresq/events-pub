import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";

const usersRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);
export { usersRoutes };
