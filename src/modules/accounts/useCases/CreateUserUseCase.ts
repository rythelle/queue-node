import Queue from "../../../../shared/libs/Queue";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  async execute({ name, email }: IRequest): Promise<void> {
    await Queue.add("Registration Mail", { name, email });

    await Queue.add("User Report", { name, email });
  }
}

export { CreateUserUseCase };
