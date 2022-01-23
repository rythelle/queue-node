import { Router } from "express";
import { createUserRoutes } from "./users.routes";

const router = Router();

router.use("/users", createUserRoutes);

export { router };
