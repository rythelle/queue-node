import "dotenv/config";
import express from "express";
import { router } from "../shared/infra/http/routes";
import { ExpressAdapter } from "@bull-board/express";
import Queue from "../shared/libs/Queue";

const app = express();

// const serverAdapter = new ExpressAdapter();

// const { RegistrationMail, UserReport } = createBullBoard({
//   queues: Queue.queues.map((queue) => {
//     queue.bull;
//   }),
//   serverAdapter: serverAdapter,
// });

// serverAdapter.setBasePath("/admin/queues");

// app.use("/admin/queues", serverAdapter.getRouter());

app.use(express.json());

app.use(router);

app.listen(5000, () => {
  console.log("Server is running");
});
