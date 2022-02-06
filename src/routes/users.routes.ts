import { Router } from "express";
import multer from "multer";
import "reflect-metadata";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";
import { FindUserWithTokenController } from "../modules/accounts/useCases/findUserWithToken/findUserWithTokenController";

const usersRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createUserController = new CreateUserController();
const findUserWithTokenController = new FindUserWithTokenController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.use(ensureAuthenticated);

usersRoutes.get("/", findUserWithTokenController.handle);

export { usersRoutes };
