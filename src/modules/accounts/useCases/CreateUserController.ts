import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    const createUserUseCase = new CreateUserUseCase();

    await createUserUseCase.execute({ name, email });

    return response.json(user);
  }
}

export { CreateUserController };
