import { Job } from "bull";

export default {
  key: "User Report",
  options: {
    delay: 5000,
  },
  async handle({ data }: Job): Promise<any> {
    const { name, email } = data;

    console.log({ name, email });
  },
};
