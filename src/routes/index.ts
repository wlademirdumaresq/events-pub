import { Router } from "express";

import { authenticateRoutes } from "./authentication.route";
import { usersRoutes } from "./users.routes";

import { pubsRoutes } from "./pubs.routes";
import { eventsRoutes } from "./events.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);

router.use("/pubs", pubsRoutes);

router.use("/events", eventsRoutes);

export { router };
