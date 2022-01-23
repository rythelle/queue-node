import { Router } from "express";
import { CreateUserController } from "../../../../src/modules/accounts/useCases/CreateUserController";

const createUserRoutes = Router();

const createUserController = new CreateUserController();

createUserRoutes.post("/", createUserController.handle);

export { createUserRoutes };
