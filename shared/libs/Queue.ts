import Queue from "bull";
import redisConfig from "../../config/redis";

import * as jobs from "../jobs";

interface IRequest {
  name: string;
  email: string;
}

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name: string, data: IRequest) {
    const queue = this.queues.find((queue) => queue.name === name);

    return queue?.bull.add(data);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on("failed", (job, err) => {
        console.log("Job failed", queue.name, job.data);
        console.log(err);
      });
    });
  },
};
