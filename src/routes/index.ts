import { Router } from "express";

import { usersRoutes } from "./users.routes";

import { pubsRoutes } from "./pubs.routes";

const router = Router();

router.use("/users", usersRoutes);

router.use("/pubs", pubsRoutes);

export { router };
