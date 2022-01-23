import { Job } from "bull";
import Mail from "../libs/Mail";

export default {
  key: "Registration Mail",
  async handle({ data }: Job): Promise<any> {
    const { name, email } = data;

    await Mail.sendMail({
      from: "Queue test <rythelle20@hotmail.com>",
      to: `${name} <${email}>`,
      subject: "Cadastro de usuário",
      html: `Olá ${name}, bem vindo ao cadastro de usuário!`,
    });
  },
};
