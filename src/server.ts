import "dotenv/config";
import express from "express";
import { ExpressAdapter } from "@bull-board/express";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { createBullBoard } from "@bull-board/api";

import { router } from "../shared/infra/http/routes";
import Queue from "../shared/libs/Queue";
import { Queue as bullQueue } from "bull";

const app = express();

app.use(express.json());

app.use(router);

// const newQueues = Queue.queues.map((queue) => {
//   new BullAdapter(queue);
// });

// const serverAdapter = new ExpressAdapter();

// createBullBoard({
//   queues: [new BullAdapter(newQueues)],
//   serverAdapter: serverAdapter,
// });

// serverAdapter.setBasePath("/admin/queues");
// app.use("/admin/queues", serverAdapter.getRouter());

app.listen(3333, () => {
  console.log("Server is running in http://localhost:3333");
});
